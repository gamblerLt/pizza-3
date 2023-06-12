package lt.code.academy.pizza.security.service;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jws;
import io.jsonwebtoken.JwtParser;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.io.Encoders;
import io.jsonwebtoken.security.Keys;
import lt.code.academy.pizza.security.exception.InvalidTokenException;
import lt.code.academy.pizza.security.exception.ExpiredTokenException;
import lt.code.academy.pizza.user.dto.User;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;

import javax.crypto.SecretKey;
import java.util.Date;

@Service
public class JwtService {

    private final byte[] secretKey;
    private final long tokenValidMs;

    public JwtService(@Value("${security.jwt.secret.key}") byte[] secretKey,
                      @Value("#{${security.jwt.token.valid.min} * 60000}") long tokenValidMs) {
        this.secretKey = secretKey;
        this.tokenValidMs = tokenValidMs;
    }

    public String generateToken(User user) {
        Date date = new Date();
        return Jwts.builder()
                .setHeaderParam("typ", "JWT")
                .setAudience("pizza-ui")
                .setIssuer("src")
                .setIssuedAt(date)
                .setExpiration(new Date(date.getTime() + tokenValidMs))
                .setSubject(user.getName())
                .signWith(Keys.hmacShaKeyFor(secretKey), SignatureAlgorithm.HS512)
                .compact();
    }

    public Authentication parseToken(String token) {
        try {
            JwtParser jwtParser = Jwts.parserBuilder()
                    .setSigningKey(secretKey)
                    .build();

            Jws<Claims> headerClaimsJwt = jwtParser.parseClaimsJws(token);
            Claims body = headerClaimsJwt.getBody();

            validateToken(body);

            String userName = body.getSubject();

            return new UsernamePasswordAuthenticationToken(userName, null);

        } catch (ExpiredTokenException e) {
            throw e;
        } catch (Exception e) {
            throw new InvalidTokenException();
        }
    }

    private void validateToken(Claims claims) {
        Date expirationDate = claims.getExpiration();

        if (expirationDate.before(new Date())) {
            throw new ExpiredTokenException();
        }
    }

}
