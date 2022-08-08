import React from 'react'

export type Props = {
    label: string;
    id: string;
    name: string;
    placeholder?: string;
}

export const TextArea = ({label, id, name, placeholder = ''}:Props) => {
  return (
    <div className="row g-3 align-items-center mt-3">
    <div className="col-3">
      <label
        className="col-form-label"
        style={{ fontSize: '20px', fontWeight: 'bold' }}
        htmlFor={id}
      >
        {label}
      </label>
    </div>
    <div className="col-4">
      <textarea
        id={id}
        name={name}
        className="form-control"
        aria-describedby={name}
        placeholder={placeholder}
      />
    </div>
  </div>
  )
}