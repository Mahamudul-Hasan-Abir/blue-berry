import React, { ChangeEvent } from "react";

interface ReduxInputProps {
  type: string; // HTML input type
  className?: string; // Optional className for styling
  label: string; // Input label
  placeholder?: string; // Optional placeholder text
  layout?: string; // Optional layout classes
  req?: boolean; // Required attribute for the input
  value: string | number; // Controlled value
  onChange: (e: ChangeEvent<HTMLInputElement>) => void; // onChange handler
}

const ReduxInput: React.FC<ReduxInputProps> = ({
  type,
  className = "",
  label,
  placeholder = "",
  layout = "",
  req = false,
  value,
  onChange,
}) => {
  return (
    <div className={layout}>
      <label className="block text-[14px] font-poppins font-medium">
        {label}
      </label>
      <input
        type={type}
        className={`p-3 w-full text-sm rounded-lg mt-2 ring-0 border-[1px] outline-none font-normal text-[#686e7d] border-[#eee] leading-6 ${className}`}
        placeholder={placeholder}
        required={req}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default ReduxInput;
