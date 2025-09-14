import { Controller, type Control, type FieldError } from "react-hook-form";
import './CustomInput.css'
import type { FormValues } from "../models";

interface Props {
    name: keyof FormValues;
    control: Control<FormValues>;
    label: string;
    type?: React.HTMLInputTypeAttribute;
    error?: FieldError;
    placeholder?: string;
}

const InputForm = ({ name, control, label, type, error }: Props) => {
    return (
        <div className="form-group">
          <label htmlFor={name}>{label}</label>
          <Controller name={name} control={control} defaultValue="" render={({ field }) => (
            <input id={name} type={type} {...field} className={`form-control ${error? "is-invalid" : ""}`} placeholder={label} />
          )} />
           
          {error && <span className="error">{error.message}</span>}
        </div> 
    )
}
 
export default InputForm