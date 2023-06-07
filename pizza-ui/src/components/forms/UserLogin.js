const UserLogin = () => {

    return (
        <>
            THIS IS LOGIN FORM
        </>
    );
}

export default UserLogin;


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
