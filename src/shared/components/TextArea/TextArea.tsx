import { useField } from 'formik';
import React from 'react'

export type Props = {
    label: string;
    id: string;
    name: string;
    placeholder?: string;
}

export const TextArea = ({label, ...props}:Props) => {
    const [field, meta] = useField(props);
    
  return (
    <div className="row g-3 align-items-center mt-3">
    <div className="col-3">
      <label
        className="col-form-label"
        style={{ fontSize: '20px', fontWeight: 'bold' }}
        htmlFor={props.id}
      >
        {label}
      </label>
    </div>
    <div className="col-4">
      <textarea
        className={`form-control ${meta.touched && meta.error && 'is-invalid'}`}
        aria-describedby={props.name}
        {...field}
        {...props}
      />
    </div>
  </div>
  )
}