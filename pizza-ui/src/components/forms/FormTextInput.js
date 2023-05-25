import {FormControl, FormHelperText, TextField} from "@mui/material";
import {ErrorMessage, Field} from "formik";

const FormTextInput = ({error, name, label = 'Type something here', type = 'text'}) => (
    <FormControl error={error}>
        <Field id={name}
               name={name}
               as={TextField}
               label={label}
               variant="outlined"
               error={error}
               type={type}
        />
        <ErrorMessage name={name}
                      component={FormHelperText}/>
    </FormControl>
);


export default FormTextInput;