import React from 'react';
import { Typography, Link, Container } from '@mui/material';

const Footer = () => {
    return (
        <footer>
            <Container maxWidth="sm">
        <Typography variant="body2" color="textSecondary" align="center">
        {'(C) All rights reserved '}
        <Link color="inherit" href="/index.html">
        The Best Pizza In The World!
    </Link>
    {' | '}
    <Link color="inherit" href="https://en.wikipedia.org/wiki/Terms_of_service">
        Terms of Service
    </Link>
    {' | '}
    <Link color="inherit" href="https://en.wikipedia.org/wiki/Privacy_policy">
        Privacy Policy
    </Link>
    </Typography>
    </Container>
    </footer>
)
}

export default Footer;
