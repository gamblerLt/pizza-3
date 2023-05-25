import {Formik, Form, Field} from 'formik';
import {Stack, Typography, CircularProgress, Button, FormControl, InputLabel, Select, MenuItem} from "@mui/material";
import * as Yup from 'yup';
import FormTextInput from "./FormTextInput";

const orderValidationSchema = Yup.object().shape(
    {
    name: Yup.string()
    .required('Pizza title is required'),
    size: Yup.string()
    .required('Pizza size is required'),
    quantity: Yup.number()
    .required('Quantity is required')
}
)
const Order = () => (
    <Formik initialValues={{
        name: '',
        size: '',
        quantity: ''
    }}

    onSubmit={(values, helpers) => {
        console.log('values', values);
        console.log('helper', helpers);

        setTimeout(() => {
            helpers.setSubmitting(false);
            helpers.resetForm();
        }, 5000);
    }}
            validationSchema={orderValidationSchema}
            >
        {props => (
            <Form>
                <Stack spacing={2} direction="column">

                    <Typography variant="h6" component="h6">Make an Order</Typography>

                   {<FormTextInput error={props.touched.name && !!props.errors.name} name="name" label="Pizza title"/>}

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
                   {/* <FormTextInput error={props.touched.quantity && !!props.errors.quantity} name="quantity" label="Pizza quantity"/>*/}
                    <FormControl error={props.touched.quantity && !!props.errors.quantity} fullWidth>
                        <InputLabel id="quantity-label">Pizza quantity</InputLabel>
                        <Field
                            as={Select}
                            labelId="quantity-label"
                            id="quantity"
                            name="quantity"
                        >
                            <MenuItem value="1">1</MenuItem>
                            <MenuItem value="2">2</MenuItem>
                            <MenuItem value="3">3</MenuItem>
                            <MenuItem value="4">4</MenuItem>
                            <MenuItem value="5">5</MenuItem>
                        </Field>
                    </FormControl>

                </Stack>
                <Typography sx={{textAlign: 'right', mt: 2}}>
                    {
                        props.isSubmitting ? <CircularProgress/> : <Button variant="outlined" type="submit">Order now!</Button>
                    }
                </Typography>
            </Form>
        )}


    </Formik>
)
export default Order;