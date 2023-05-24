import React from "react";
import { Form, Formik } from "formik";
import { Button, CircularProgress, FormControl, FormHelperText, Stack, Typography } from "@mui/material";
import * as Yup from 'yup';
import FormTextInput from "./FormTextInput";

const userValidationSchema = Yup.object().shape({
    username: Yup.string().required('Username is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    phone: Yup.string().required('Phone number is required'),
    password: Yup.string().required('Password is required'),
    passwordConfirmation: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
});

const User = () => (
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
                    <FormTextInput error={props.touched.phone && !!props.errors.phone} name="phone" label="Phone" />
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

export default User;
