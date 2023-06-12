import {FormControl, FormHelperText, TextField} from "@mui/material";
import {ErrorMessage, Field} from "formik";

const FormTextInput = ({error, name, label = 'Kazkas', ...props}) => (
    <FormControl error={error}
                 fullWidth>
        <Field id={name}
               name={name}
               as={TextField}
               label={label}
               variant="outlined"
               error={error}
               {...props}
        />
        <ErrorMessage name={name}
                      component={FormHelperText}/>
    </FormControl>
);


export default FormTextInput;