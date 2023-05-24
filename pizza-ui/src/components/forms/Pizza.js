import {ErrorMessage, Field, Form, Formik} from "formik";
import {CircularProgress, Stack, TextField} from "@mui/material";
import * as Yup from 'yup';

const productValidationSchema = Yup.object().shape(
    {
        name: Yup.string()
            .min(5, 'Name must be more then 5 symbols')
            .max(10, 'Name must be less then 10 symbols')
            .required(),

        category: Yup.string()
            .min(5, 'Kategorija must be more then 5 symbols')
            .max(10, 'Kategorija must be less then 10 symbols')
            .required()
    }
)
const Pizza = () => (

    <Formik
        initialValues={{
            title: '',
            category: ''
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
                    <Field id="name"
                           name="name"
                           as={TextField}
                           label="Product name"
                           variant="outlined"/>
                    <ErrorMessage name="name" component="div"/>

                    <Field id="category"
                           name="category"
                           as={TextField}
                           label="Category"
                           variant="outlined"/>
                    <ErrorMessage name="category" component="div"/>
                </Stack>
                {
                    props.isSubmitting ? <CircularProgress/> : <button type="submit">Submit</button>
                }
            </Form>
        )
        }
    </Formik>

)
export default Pizza;