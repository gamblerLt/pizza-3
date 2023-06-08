import {Form, Formik} from "formik";
import * as Yup from 'yup';
import {Alert, Avatar, Box, Button, Checkbox, CircularProgress, Container, createTheme, CssBaseline, FormControlLabel, Grid, Link, Typography} from "@mui/material";
import {ThemeProvider} from "@emotion/react";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import FormTextInput from "./FormTextInput";
import {login} from "../api/userApi";
import {useState} from "react";
import {useDispatch} from "react-redux";
import {addUser} from "../../store/slices/userSlice";
import {useNavigate} from "react-router-dom";



const loginValidationSchema = Yup.object().shape(
    {
        username: Yup.string().required(),
        password: Yup.string().required()
    }
);

const defaultTheme = createTheme();

const Login = () => {

    const [showError, setShowError] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onLogin = (values, helpers) => {
        login(values)
            .then(({data, headers}) => {
                    dispatch(addUser({
                        user: data,
                        jwtToken: headers.authorization
                    }));
                    navigate('/');
                }
            )
            .catch((error) => {
                console.log(error);
                setShowError(true);
            })
            .finally(() => helpers.setSubmitting(false));
    }

    return (

        <Formik
            initialValues={ {username: '', password: ''} }

            onSubmit={ onLogin }

            validationSchema={ loginValidationSchema }>

            { props => (
                <ThemeProvider theme={ defaultTheme }>
                    <Container component="main" maxWidth="xs">
                        <CssBaseline/>
                        <Box
                            sx={ {
                                marginTop: 8,
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                            } }
                        >
                            <Avatar sx={ {m: 1, bgcolor: 'secondary.main'} }>
                                <LockOutlinedIcon/>
                            </Avatar>
                            <Typography component="h1" variant="h5">
                                Sign in
                            </Typography>
                            <Box noValidate sx={ {mt: 1} }>
                                { showError && <Alert severity="error">Login failed, please check your credentials and try again</Alert> }
                                <Form>
                                    <FormTextInput error={ props.touched.username && !!props.errors.username }
                                                   name="username"
                                                   label="Username"
                                                   fullWidth
                                                   margin="normal"/>
                                    <FormTextInput error={ props.touched.password && !!props.errors.password }
                                                   name="password"
                                                   label="password"
                                                   fullWidth
                                                   margin="normal"
                                                   type="password"/>

                                    <FormControlLabel
                                        control={ <Checkbox value="remember" color="primary"/> }
                                        label="Remember me"
                                    />
                                    {
                                        props.isSubmitting ?
                                            <Box
                                                sx={ {
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    alignItems: 'center',
                                                    mt: 3,
                                                    mb: 2
                                                } }
                                            >
                                                <CircularProgress size={ 36 }/>
                                            </Box> :
                                            <Button
                                                type="submit"
                                                fullWidth
                                                variant="contained"
                                                sx={ {mt: 3, mb: 2} }>
                                                Sign In
                                            </Button>
                                    }

                                    <Grid container>
                                        <Grid item xs>
                                            <Link href="#" variant="body2">
                                                Forgot password?
                                            </Link>
                                        </Grid>
                                        <Grid item>
                                            <Link href="#" variant="body2">
                                                { "Don't have an account? Sign Up" }
                                            </Link>
                                        </Grid>
                                    </Grid>

                                </Form>
                            </Box>
                        </Box>
                    </Container>
                </ThemeProvider>
            )
            }
        </Formik>

    );
}

export default Login;


/*
import React from "react";
import {Form, Formik} from "formik";
import * as Yup from "yup";
import {Button, CircularProgress, FormControl, FormHelperText, Stack, Typography} from "@mui/material";
import FormTextInput from "./FormTextInput";
import {useTranslation} from "react-i18next";

const loginValidationSchema = Yup.object().shape({
    username: Yup.string()
        .min(5, 'Username must be more than 5 symbols')
        .max(10, 'Username must be les than 10 symbols')
        .required('Username is required'),
    email: Yup.string()
        .email('Invalid email')
        .required('Email is required'),
    password: Yup.string()
        .required('Password is required')

});

const UserLogin = () => {
const {t} = useTranslation('login');
return (
    <Formik
        initialValues={{
            username: '',
            email: '',
            password: ''
        }}


        onSubmit={(values, helpers) => {
            console.log('values', values);
            console.log('helper', helpers);

            setTimeout(() => {
                helpers.setSubmitting(false);
                helpers.resetForm();
            }, 5000);
        }}
        validationSchema={loginValidationSchema}>

        {props => (
            <Form>
                <Stack spacing={2} direction="column">
                    <Typography variant="h6" component="h6">{t('user_login')}</Typography>
                    <FormTextInput error={props.touched.username && !!props.errors.username} name="username"
                                   label={t('username')}/>
                    <FormTextInput error={props.touched.email && !!props.errors.email} name="email" label={t('email')}/>
                    <FormTextInput error={props.touched.password && !!props.errors.password} name="password"
                                   label={t('password')}/>
                </Stack>
                <Typography sx={{textAlign: 'right', mt: 2}}>
                    {props.isSubmitting ? <CircularProgress/> : <Button variant="outlined" type="submit">{t('user_login')}</Button>}
                </Typography>
            </Form>
        )}
    </Formik>

)
};
export default UserLogin;*/
