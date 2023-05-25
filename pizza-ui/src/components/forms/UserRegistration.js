import React from "react";
import { Form, Formik } from "formik";
import { Button, CircularProgress, FormControl, FormHelperText, Stack, Typography } from "@mui/material";
import * as Yup from 'yup';
import FormTextInput from "./FormTextInput";

const userValidationSchema = Yup.object().shape({
    username: Yup.string()
        .min(5, 'Username must be more than 5 symbols')
        .max(10, 'Username must be less than 10 symbols')
        .required('Username is required'),
    email: Yup.string().email('Invalid email')
        .required('Email is required'),
    phone: Yup.string()
        .matches(/^\+?\d{1,4}\d{5,}$/, 'Invalid phone number')
        .min(5, 'Phone number must be longer than 5 digits')
        .required('Phone number is required'),
    password: Yup.string()
        .min(5, 'Username must be more than 5 symbols')
        .max(10, 'Username must be less than 10 symbols')
        .required('Password is required'),
    passwordConfirmation: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
});

const UserRegistration = () => (
    <Formik
        initialValues={{
            username: '',
            email: '',
            phone: '',
            password: '',
            passwordConfirmation: ''
        }}
        onSubmit={(values, helpers) => {
            console.log('values ', values);
            console.log('helper ', helpers);

            setTimeout(() => {
                helpers.setSubmitting(false);
                helpers.resetForm();
            }, 5000);
        }}
        validationSchema={userValidationSchema}
    >
        {props => (
            <Form>
                <Stack spacing={2} direction="column">
                    <Typography variant="h6" component="h6">User Registration</Typography>
                    <FormTextInput error={props.touched.username && !!props.errors.username} name="username" label="Username" />
                    <FormTextInput error={props.touched.email && !!props.errors.email} name="email" label="Email" />
                    <FormTextInput error={props.touched.phone && !!props.errors.phone} name="phone" label="Phone, please enter like +370..." />
                    <FormTextInput error={props.touched.password && !!props.errors.password} name="password" label="Password" />
                    <FormTextInput
                        error={props.touched.passwordConfirmation && !!props.errors.passwordConfirmation}
                        name="passwordConfirmation"
                        label="Confirm Password"
                    />
                </Stack>
                <Typography sx={{ textAlign: 'right', mt: 2 }}>
                    {props.isSubmitting ? <CircularProgress /> : <Button variant="outlined" type="submit">Register</Button>}
                </Typography>
            </Form>
        )}
    </Formik>
);

export default UserRegistration;
