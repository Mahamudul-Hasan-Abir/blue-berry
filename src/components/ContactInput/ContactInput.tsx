import { Path, UseFormRegister, FieldValues } from "react-hook-form";

export type TContactInput<TFormData extends FieldValues> = {
  register: UseFormRegister<TFormData>;
  name: Path<TFormData>; // Ensures the name matches the fields of TFormData
  type: string;
  label: string;
  placeholder?: string;
  className?: string;
  required?: boolean;
};

const ContactInput = <TFormData extends FieldValues>({
  register,
  name,
  type,
  label,
  placeholder = "",
  className = "",
  required = false,
}: TContactInput<TFormData>) => {
  return (
    <div className="w-full">
      <label className="block text-[14px] font-poppins font-medium mb-2">
        {label}
      </label>
      <input
        {...register(name, { required })}
        type={type}
        placeholder={placeholder}
        className={`p-3 w-full text-sm rounded-lg border-[1px] border-[#eee] outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all ${className}`}
      />
    </div>
  );
};

export default ContactInput;
