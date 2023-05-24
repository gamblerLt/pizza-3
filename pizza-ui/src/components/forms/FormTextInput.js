import {FormControl, FormHelperText, TextField} from "@mui/material";
import {ErrorMessage, Field} from "formik";

const FormTextInput = ({error, name, label = 'Type something here'}) => (
    <FormControl error={error}>
        <Field id={name}
               name={name}
               as={TextField}
               label={label}
               variant="outlined"
               error={error}/>
        <ErrorMessage name={name}
                      component={FormHelperText}/>
    </FormControl>
);


export default FormTextInput;