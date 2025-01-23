import React from "react";

export type TEditProductInput = {
  label: string; // Label for the input field
  name: string; // Field name (used in form handling)
  type: string; // Input type (e.g., text, number, email)
  placeholder?: string; // Optional placeholder
  value?: string | number; // Current value of the field
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; // Change handler
  className?: string; // Optional custom class names
  required?: boolean; // Whether the field is required
};

const EditProductInput: React.FC<TEditProductInput> = ({
  label,
  name,
  type,
  placeholder = "",
  value,
  onChange,
  className = "",
  required = false,
}) => {
  return (
    <div className={`mb-4 ${className}`}>
      <label
        htmlFor={name}
        className="block text-sm font-medium text-gray-700 mb-1"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        className="p-2 w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
      />
    </div>
  );
};

export default EditProductInput;
