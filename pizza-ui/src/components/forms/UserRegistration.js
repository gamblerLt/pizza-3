import React, { useEffect, useState } from "react";
import { Form, Formik } from "formik";
import {
    Alert,
    Button,
    CircularProgress,
    Stack,
    Typography,
} from "@mui/material";
import * as Yup from "yup";
import FormTextInput from "./FormTextInput";

import { createUser, getUserById } from "../api/userApi";
import { useParams } from "react-router-dom";
import {useNavigate} from "react-router-dom";
import {useTranslation} from "react-i18next";

const userValidationSchema = Yup.object().shape({
    name: Yup.string()
        .min(4, "Username must be more than 4 characters")
        .max(10, "Username must be less than 10 characters")
        .required("Username is required"),
    phone: Yup.string()
        .matches(/^\+?\d{1,4}\d{5,}$/, "Invalid phone number")
        .min(5, "Phone number must be longer than 5 digits")
        .required("Phone number is required"),
    address: Yup.string().required('Address is required'),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
        .min(5, "Password must be more than 5 characters")
        .max(10, "Password must be less than 10 characters")
        .required("Password is required"),
    passwordConfirmation: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("Password confirmation is required"),
});

const UserRegistration = () => {
    const {t} = useTranslation('registration');
    const [notification, setNotification] = useState({
        isVisible: false,
        message: "",
        severity: "success",
    });
    const { id } = useParams();
    const [user, setUser] = useState({
        name: "",
        phone: "",
        address: "",
        email: "",
        password: "",
        passwordConfirmation: "",
    });
    const [loading, setLoading] = useState(true);
    const navigation = useNavigate();

    useEffect(() => {
        if (!id) {
            setLoading(false);
            return;
        }
        getUserById(id)
            .then(({ data }) => setUser(data))
            .catch((err) => console.log(err))
            .finally(() => setLoading(false));
    }, [id]);

    const onFormSubmit = (values, helper) => {
        onCreateUser(values, helper);
    };

    const onCreateUser = (values, helper) => {
        createUser(values)
            .then(() => {
                helper.resetForm();
                setNotification({
                    isVisible: true,
                    message: t('registration_ok'),
                    severity: "success",
                });
            })
            .catch((error) => {
                setNotification({
                    isVisible: true,
                    message: t('registration_not_ok'),
                    severity: "error",
                });
                console.log(error);
            })
            .finally(() => helper.setSubmitting(false));
    };
    const handleAdditionalAction = () => {
        navigation("/users/login");
    };

    return (
        <>
            {loading ?
                <CircularProgress />
             :
                <Formik
                    initialValues={user}
                    onSubmit={onFormSubmit}
                    validationSchema={userValidationSchema}
                >
                    {(props) => (
                        <Form>
                            <Stack spacing={2} direction="column">
                                {notification.isVisible && (
                                    <Alert severity={notification.severity}>
                                        {notification.message}
                                    </Alert>
                                )}
                                <Typography variant="h6">{t('register')}</Typography>
                                <FormTextInput
                                    error={props.touched.name && !!props.errors.name}
                                    name="name"
                                    label={t('name')}
                                />
                                <FormTextInput
                                    error={props.touched.phone && !!props.errors.phone}
                                    name="phone"
                                    label={t('phone')}
                                />
                                <FormTextInput
                                    error={props.touched.address && !!props.errors.address}
                                    name="address"
                                    label={t('address')}
                                />
                                <FormTextInput
                                    error={props.touched.email && !!props.errors.email}
                                    name="email"
                                    label={t('email')}
                                />
                                <FormTextInput
                                    error={props.touched.password && !!props.errors.password}
                                    name="password"
                                    label={t('password')}
                                    type="password"
                                />
                                <FormTextInput
                                    error={
                                        props.touched.passwordConfirmation &&
                                        !!props.errors.passwordConfirmation
                                    }
                                    name="passwordConfirmation"
                                    label={t('confirm_password')}
                                    type="password"
                                />
                            </Stack>
                            <Typography sx={{ textAlign: "right", mt: 2 }}>
                                <Button variant="outlined" type="submit">
                                    {t('register')}
                                </Button>
                                {notification.isVisible && notification.severity === "success" && (
                                    <Button variant="outlined" type="button" sx={{ ml: 2 }} onClick={handleAdditionalAction}>
                                        {t('login')}
                                    </Button>
                                )}
                            </Typography>
                        </Form>
                    )}
                </Formik>
            }
        </>
    );
};

export default UserRegistration;