import { ErrorMessage, useField } from "formik";

export type Props = {
    label: string;
    id: string;
    name: string;
    placeholder?: string;
    min?: number;
    max?: number;
}

export const NumberInput = ({label, ...props}:Props) => {
  const [field, meta] = useField(props);
  return (
    <div className="row g-3 align-items-center mt-3">
    <div className="col-3">
      <label
        className="col-form-label "
        style={{ fontSize: '20px', fontWeight: 'bold' }}
        htmlFor={props.id}
      >
        {label}
      </label>
    </div>
    <div className="col-4">
      <input
        type="number"
        className={`form-control ${meta.touched && meta.error && 'is-invalid'}`}
        aria-describedby="title"
        {...field}
        {...props}
      />
    <ErrorMessage component="span" name={props.name} className="invalid-feedback" />
    </div>
  </div>
  )
}
