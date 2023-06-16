/*import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import {
    Alert,
    Stack,
    Typography,
    Button,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    Input,
} from '@mui/material';

import * as Yup from 'yup';
import FormTextInput from './FormTextInput';
import { savePizza } from '../api/pizzaApi';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

const pizzaValidationSchema = Yup.object().shape({
    title: Yup.string()
        .min(5, 'Pizza title must be more than 5 characters')
        .max(100, 'Pizza title must be less than 100 characters')
        .required('Pizza title is required'),
    size: Yup.string().required('Pizza size is required'),
    description: Yup.string()
        .min(10, 'Description must be more than 10 characters')
        .max(150, 'Description must be less than 150 characters')
        .required('Description is required'),
    picture: Yup.string().required('Picture is required'),
    price: Yup.number()
        .typeError('Price must be a number')
        .positive('Price must be bigger than 0')
        .required('Price is required'),
});

const Pizza = () => {
    const { t } = useTranslation('create');
    const [notification, setNotification] = useState({ isVisible: false });
    const [pizza, setPizza] = useState({
        title: '',
        size: '',
        description: '',
        picture: '',
        price: '',
    });
    const user = useSelector((state) => state.user.user);

    const onFormSubmit = (values, helper) => {
        onCreatePizza(values, helper);
    };

    const onCreatePizza = (values, helper) => {
        // Create the pizza object to send to the server
        const pizzaData = {
            title: values.title,
            size: values.size,
            description: values.description,
            picture: values.picture,
            price: values.price,
        };

        // Send the pizza creation request to the server
        savePizza(pizzaData)
            .then((response) => {
                helper.resetForm();
                setNotification({
                    isVisible: true,
                    message: t('created'),
                    severity: 'success',
                });
            })
            .catch((error) => {
                setNotification({
                    isVisible: true,
                    message: t('not_created'),
                    severity: 'error',
                });
            });
    };

    return (
        <Stack spacing={2}>
            <Typography variant="h5" component="h2">
                {t('title')}
            </Typography>
            {notification.isVisible && (
                <Alert
                    severity={notification.severity}
                    onClose={() => setNotification({ isVisible: false })}
                >
                    {notification.message}
                </Alert>
            )}
            {user && (
                <Formik
                    initialValues={pizza}
                    validationSchema={pizzaValidationSchema}
                    onSubmit={onFormSubmit}
                >
                    {({ errors, touched }) => (
                        <Form>
                            <FormTextInput
                                name="title"
                                label={t('title')}
                                error={errors.title && touched.title}
                                helperText={errors.title && touched.title && errors.title}
                            />

                            <FormControl
                                error={touched.size && !!errors.size}
                                fullWidth
                            >
                                <InputLabel id="size-label">{t('size')}</InputLabel>
                                <Field as={Select} labelId="size-label" id="size" name="size">
                                    <MenuItem value="L">L</MenuItem>
                                    <MenuItem value="XL">XL</MenuItem>
                                </Field>
                            </FormControl>
                            <FormTextInput
                                error={touched.description && !!errors.description}
                                name="description"
                                label={t('description')}
                                rows={4}
                                multiline
                            />
                            <Field
                                as={Input}
                                error={touched.picture && !!errors.picture}
                                name="picture"
                                label={t('picture')}
                                type="file"
                            />
                            <FormTextInput
                                error={touched.price && !!errors.price}
                                name="price"
                                label={t('price')}
                            />
                            <Typography sx={{ textAlign: 'right', mt: 2 }}>
                                <Button variant="outlined" type="submit">
                                    {t('button_create')}
                                </Button>
                            </Typography>
                        </Form>
                    )}
                </Formik>
            )}
        </Stack>
    );
};

export default Pizza;*/







import { Formik, Form, Field } from 'formik';
import {
    Alert,
    Stack,
    Typography,
    Button,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    Input,
} from '@mui/material';
import * as Yup from 'yup';
import FormTextInput from './FormTextInput';
import { getPizzaById, savePizza } from '../api/pizzaApi';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

const pizzaValidationSchema = Yup.object().shape({
    title: Yup.string()
        .min(5, 'Pizza title must be more than 5 characters')
        .max(100, 'Pizza title must be less than 100 characters')
        .required('Pizza title is required'),
    size: Yup.string().required('Pizza size is required'),
    description: Yup.string()
        .min(10, 'Description must be more than 10 characters')
        .max(150, 'Description must be less than 150 characters')
        .required('Description is required'),
    picture: Yup.string().required('Picture is required'),
    price: Yup.number()
        .typeError('Price must be a number')
        .positive('Price must be bigger than 0')
        .required('Price is required'),
});

const Pizza = () => {
    const { t } = useTranslation('create');
    const [notification, setNotification] = useState({ isVisible: false });
    const { id } = useParams();
    const [pizza, setPizza] = useState({
        title: '',
        size: '',
        description: '',
        picture: '',
        price: '',
    });
    const [loading, setLoading] = useState(true);
    const navigation = useNavigate();
   // const user = useSelector((state) => state.user);

    useEffect(() => {
        if (!id) {
            setLoading(false);
            return;
        }
        getPizzaById(id)
            .then(({ data }) => setPizza(data))
            .catch((err) => console.log(err))
            .finally(() => setLoading(false));
    }, []);

    const onFormSubmit = (values, helper) => {
        onCreatePizza(values, helper);
    };

    const onCreatePizza = (values, helper) => {
        const fileName = values.picture.split('\\').pop().split('/').pop();
        const modifiedValues = { ...values, picture: `images/${fileName}` };

        savePizza(modifiedValues)
            .then((response) => {
                helper.resetForm();
                setNotification({
                    isVisible: true,
                    message: t('created'),
                    severity: 'success',
                });
            })
            .catch((error) => {
                setNotification({
                    isVisible: true,
                    message: t('not_created'),
                    severity: 'error',
                });
                console.log(error);
            })
            .finally(() => helper.setSubmitting(false));
    };

    return (
        <>

                <Formik
                    initialValues={pizza}
                    onSubmit={onFormSubmit}
                    validationSchema={pizzaValidationSchema}
                >
                    {(props) => (
                        <Form>
                            <Stack spacing={2} direction="column">
                                {notification.isVisible && (
                                    <Alert severity={notification.severity}>
                                        {notification.message}
                                    </Alert>
                                )}
                                <Typography variant="h6">{t('create')}</Typography>
                                <FormTextInput
                                    error={props.touched.title && !!props.errors.title}
                                    name="title"
                                    label={t('title')}
                                />
                                <FormControl error={props.touched.size && !!props.errors.size} fullWidth>
                                    <InputLabel id="size-label">{t('size')}</InputLabel>
                                    <Field as={Select} labelId="size-label" id="size" name="size">
                                        <MenuItem value="L">L</MenuItem>
                                        <MenuItem value="XL">XL</MenuItem>
                                    </Field>
                                </FormControl>
                                <FormTextInput
                                    error={props.touched.description && !!props.errors.description}
                                    name="description"
                                    label={t('description')}
                                    rows={4}
                                    multiline
                                />
                                <Field as={Input} error={props.touched.picture && !!props.errors.picture} name="picture" label={t('picture')} type="file" />
                                <FormTextInput
                                    error={props.touched.price && !!props.errors.price}
                                    name="price"
                                    label={t('price')}
                                />
                            </Stack>
                            <Typography sx={{ textAlign: 'right', mt: 2 }}>
                                <Button variant="outlined" type="submit">
                                    {t('button_create')}
                                </Button>
                            </Typography>
                        </Form>
                    )}
                </Formik>

        </>
    );
};

export default Pizza;

