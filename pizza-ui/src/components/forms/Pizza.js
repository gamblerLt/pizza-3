import { Formik, Form, Field } from 'formik';
import { Stack, Typography, CircularProgress, Button, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import * as Yup from 'yup';
import FormTextInput from "./FormTextInput";

const pizzaValidationSchema = Yup.object().shape(
    {
        name: Yup.string()
            .min(5, 'Pizza title must be more then 5 symbols')
            .max(10, 'Pizza title must be less then 20 symbols')
            .required('Pizza title is required'),
        size: Yup.string()
            .required('Pizza size is required'),
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
            size: '',
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

        validationSchema={pizzaValidationSchema}
    >
        {props => (
            <Form>
                <Stack spacing={2} direction="column">
                    <Typography variant="h6" component="h6">Create a Pizza</Typography>
                    <FormTextInput error={props.touched.name && !!props.errors.name}
                                   name="name"
                                   label="Pizza title"/>
                   {/* <FormTextInput error={props.touched.size && !!props.errors.size}
                                   name="size"
                                   label="Pizza size"/>*/}
                    <FormControl error={props.touched.size && !!props.errors.size} fullWidth>
                        <InputLabel id="size-label">Pizza size</InputLabel>
                        <Field
                            as={Select}
                            labelId="size-label"
                            id="size"
                            name="size"
                        >
                            <MenuItem value="L">L</MenuItem>
                            <MenuItem value="XL">XL</MenuItem>
                        </Field>
                    </FormControl>

                    <FormTextInput error={props.touched.description && !!props.errors.description}
                                   name="description"
                                   label="Pizza description"/>
                    <FormTextInput error={props.touched.quantity && !!props.errors.quantity}
                                   name="quantity"
                                   label="Pizza quantity"/>
                    <FormTextInput error={props.touched.price && !!props.errors.price}
                                   name="price"
                                   label="Prizza price"/>
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