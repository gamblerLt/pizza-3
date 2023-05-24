import {ErrorMessage, Field, Form, Formik} from "formik";
import {Button, CircularProgress, FormControl, FormHelperText, Stack, TextField, Typography} from "@mui/material";
import * as Yup from 'yup';
import FormTextInput from "./FormTextInput";

const productValidationSchema = Yup.object().shape(
    {
        name: Yup.string()
            .min(5, 'Name must be more then 5 symbols')
            .max(10, 'Name must be less then 10 symbols')
            .required('Name is required'),
        category: Yup.string()
            .required('Category is required'),
        description: Yup.string()
            .required('Description is required'),
        quantity: Yup.number()
            .typeError('Quantity must be a number')
            .positive('Quantity must be bigger then 0')
            .required('Quantity is required'),
        price: Yup.number()
            .typeError('Price must be a number')
            .positive('Price must be bigger then 0')
            .required('Price is required')
    }
)

const Pizza = () => (

    <Formik
        initialValues={{
            name: '',
            category: '',
            description: '',
            quantity: '',
            price: ''
        }}

        onSubmit={(values, helpers) => {
            console.log('values ', values);
            console.log('helper ', helpers);

            setTimeout(() => {
                helpers.setSubmitting(false);
                helpers.resetForm();
            }, 5000);
        }}

        validationSchema={productValidationSchema}
    >
        {props => (
            <Form>
                <Stack spacing={2} direction="column">
                    <FormTextInput error={props.touched.name && !!props.errors.name}
                                   name="name"
                                   label="Product name"/>
                    <FormTextInput error={props.touched.category && !!props.errors.category}
                                   name="category"
                                   label="Product category"/>
                    <FormTextInput error={props.touched.description && !!props.errors.description}
                                   name="description"
                                   label="Product description"/>
                    <FormTextInput error={props.touched.quantity && !!props.errors.quantity}
                                   name="quantity"
                                   label="Product quantity"/>
                    <FormTextInput error={props.touched.price && !!props.errors.price}
                                   name="price"
                                   label="Product price"/>
                </Stack>
                <Typography sx={{textAlign: 'right', mt: 2}}>
                    {
                        props.isSubmitting ? <CircularProgress/> : <Button variant="outlined" type="submit">Save</Button>
                    }
                </Typography>
            </Form>
        )
        }
    </Formik>

)
export default Pizza;