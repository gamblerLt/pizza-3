import React from "react";
import {Form, Formik, Field} from "formik";
import {
    Alert,
    Button,
    CircularProgress,
    Stack,
    Typography,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    Input
} from "@mui/material";
import * as Yup from "yup";
import FormTextInput from "./FormTextInput";

import {createUser, getUserById} from "../api/userApi";


import {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import axios from "axios";

f


const userValidationSchema = Yup.object().shape({
    username: Yup.string()
        .min(4, "Username must be more than 4 characters")
        .max(10, "Username must be less than 10 characters")
        .required("Username is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    phone: Yup.string()
        .matches(/^\+?\d{1,4}\d{5,}$/, "Invalid phone number")
        .min(5, "Phone number must be longer than 5 digits")
        .required("Phone number is required"),
    password: Yup.string()
        .min(5, "Password must be more than 5 characters")
        .max(10, "Password must be less than 10 characters")
        .required("Password is required"),
    passwordConfirmation: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("Password confirmation is required"),
});

const UserRegistration = () => (
const [notification, setNotification] = useState({isVisible: false});
const {id} = useParams();
const [user, setUser] = useState({
    username: '',
    email: '',
    phone: '',
    password: '',
    passwordConfirmation: ''
});
const [loading, setLoading] = useState(true);
const navigation = useNavigate();

useEffect(() => {
    if (!id) {
        setLoading(false);
        return;
    }
    getUserById(id)
        .then(({data}) => setUser(data))
        .catch((err) => console.log(err))
        .finally(() => setLoading(false));
}, []);
const onCreateUser = (values, helper) => {
    saveUser(values)
        .then((response) => {
                helper.resetForm();
                setNotification({isVisible: true, message: 'User registration success', severity: 'success'});
            }
        )
        .catch((error) => {
                setNotification({isVisible: true, message: 'User registration NOT success', severity: 'error'});
                console.log(error);
            }
        )
        .finally(() => helper.setSubmitting(false));
};
return (
<>
{
    loading...........


    </>



    <Formik
    initialValues={{
    username: "",
    email: "",
    phone: "",
    password: "",
    passwordConfirmation: "",
}}
onSubmit={(values, helpers) => {
    createUser(values)
        .then((response) => {
            console.log("User created successfully:", response.data);
            helpers.setSubmitting(false);
            helpers.resetForm({
                username: "",
                email: "",
                phone: "",
                password: "",
                passwordConfirmation: "",
            });
        })
        .catch((error) => {
            console.error("Error creating user:", error);
            helpers.setSubmitting(false);
        });
}}
validationSchema={userValidationSchema}
>
{(props) => (
    <Form>
        <Stack spacing={2} direction="column">
            <Typography variant="h6" component="h6">
                User Registration
            </Typography>
            <FormTextInput
                error={props.touched.username && !!props.errors.username}
                name="username"
                label="Username"
            />
            <FormTextInput
                error={props.touched.email && !!props.errors.email}
                name="email"
                label="Email"
            />
            <FormTextInput
                error={props.touched.phone && !!props.errors.phone}
                name="phone"
                label="Phone (e.g., +370...)"
            />
            <FormTextInput
                error={props.touched.password && !!props.errors.password}
                name="password"
                label="Password"
                type="password"
            />
            <FormTextInput
                error={
                    props.touched.passwordConfirmation &&
                    !!props.errors.passwordConfirmation
                }
                name="passwordConfirmation"
                label="Confirm Password"
                type="password"
            />
        </Stack>
        <Typography sx={{textAlign: "right", mt: 2}}>
            {props.isSubmitting ? (
                <CircularProgress/>
            ) : (
                <Button variant="outlined" type="submit">
                    Register
                </Button>
            )}
        </Typography>
    </Form>
)}
</Formik>
)
;

export default UserRegistration;
