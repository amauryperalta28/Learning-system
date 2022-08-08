import { useField } from "formik";

export type Props = {
    label: string;
    id: string;
    name: string;
    placeholder?: string;
}

export const TextInput = ({label, ...props}:Props) => {
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
        type="text"
        className={`form-control ${meta.touched && meta.error && 'is-invalid'}`}
        aria-describedby="title"
        {...field}
        {...props}
      />
    </div>
  </div>
  )
}
