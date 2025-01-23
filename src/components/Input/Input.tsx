import { Path, UseFormRegister, FieldValues } from "react-hook-form";

export type TInput<TFormData extends FieldValues> = {
  register: UseFormRegister<TFormData>;
  type: string;
  className?: string;
  label: string;
  placeholder?: string;
  layout?: string;
  req?: boolean;
  name: Path<TFormData>; // Ensures the name matches the fields of TFormData
  value?: string | number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input = <TFormData extends FieldValues>({
  register,
  type,
  className = "",
  label,
  placeholder,
  layout = "",
  req = false,
  name,
  value,
  onChange,
}: TInput<TFormData>) => {
  return (
    <div className={`${layout}`}>
      <label className="block text-[14px] font-poppins font-medium">
        {label}
      </label>
      <input
        {...register(name)}
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

export default Input;
