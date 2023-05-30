import { Formik, Form, Field } from 'formik';
import {
    Alert,
    Stack,
    Typography,
    CircularProgress,
    Button,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    Input
} from '@mui/material';
import * as Yup from 'yup';
import FormTextInput from './FormTextInput';
import {getPizzaById, savePizza, updatePizza} from '../api/pizzaApi';
import {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import axios from "axios";

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
})

const Pizza = () => {
    const [notification, setNotification] = useState({ isVisible: false });
    const {id} = useParams();
    const [pizza, setPizza] = useState({
        title: '',
        size: '',
        description: '',
        picture: '',
        price: ''
    });
        const [loading, setLoading] = useState(true);
        const navigation = useNavigate();

        useEffect(() => {
            if(!id) {
                setLoading(false);
                return;
            }
            getPizzaById(id)
                .then(({data}) => setPizza(data))
                .catch((err) => console.log(err))
                .finally(() => setLoading(false));
        }, []);
        const onFormSubmit = (values, helper) => {
            if(id) {
                onPizzaUpdate(values, helper);
                return;
            }
            onCreatePizza(values, helper);
        }

        const onPizzaUpdate = (values, helper) => {
            updatePizza(id, values)
                .then(() => navigation(`/pizzas/${id}`))
                .catch((error) => setNotification({isVisible: true, message: 'Pizza cannot be updated', severity: 'error'}))
                .finally(() => helper.setSubmitting(false));
        }

    const onCreatePizza = (values, helper) => {

        const fileName = values.picture.split('\\').pop().split('/').pop();
        const modifiedValues = { ...values, picture: `images/${fileName}` }; // Corrected path


        savePizza(modifiedValues)
            .then((response) => {
                helper.resetForm();
                setNotification({ isVisible: true, message: 'Pizza created successfully', severity: 'success' });
            })
            .catch((error) => {
                setNotification({ isVisible: true, message: 'Pizza cannot be created', severity: 'error' });
                console.log(error);
            })
            .finally(() => helper.setSubmitting(false));
    };

    return (
        <>
            {
                loading ?<CircularProgress/> : <Formik
            initialValues={pizza}

            onSubmit={onFormSubmit}
            validationSchema={pizzaValidationSchema}
        >
            {props => (
                <Form>
                    <Stack spacing={2} direction="column">
                        {notification.isVisible &&
                            <Alert severity={notification.severity}>{notification.message}</Alert>
                        }
                        <Typography variant="h6">
                            {id ? 'Update Pizza:' : 'Create Pizza'}
                        </Typography>
                        <FormTextInput
                            error={props.touched.title && !!props.errors.title}
                            name="title"
                            label="Pizza title"
                        />
                        <FormControl error={props.touched.size && !!props.errors.size} fullWidth>
                            <InputLabel id="size-label">Pizza size</InputLabel>
                            <Field as={Select} labelId="size-label" id="size" name="size">
                                <MenuItem value="L">L</MenuItem>
                                <MenuItem value="XL">XL</MenuItem>
                            </Field>
                        </FormControl>

                        <FormTextInput
                            error={props.touched.description && !!props.errors.description}
                            name="description"
                            label="Pizza description"
                            rows={4}
                            multiline
                        />
                        <Field
                            as={Input}
                            error={props.touched.picture && !!props.errors.picture}
                            name="picture"
                            label="Pizza picture"
                           /*value=""*/
                            type="file"
                        />
                        <FormTextInput
                            error={props.touched.price && !!props.errors.price}
                            name="price"
                            label="Pizza price"
                        />
                    </Stack>
                    <Typography sx={{ textAlign: 'right', mt: 2 }}>
                        {props.isSubmitting ?
                            <CircularProgress />
                        :
                            <Button variant="outlined" type="submit">
                                {id ? 'Update' : 'Create'}
                            </Button>
                        }
                    </Typography>
                </Form>
            )}
        </Formik>
            }
            </>
    )
}

export default Pizza;
