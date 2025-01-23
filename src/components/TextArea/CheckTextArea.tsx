import { UseFormRegister, FieldValues, Path } from "react-hook-form";

export type TTextArea<TFormData extends FieldValues> = {
  register: UseFormRegister<TFormData>;
  name: Path<TFormData>; // Ensures the name matches a valid field in TFormData
  label: string;
  placeholder?: string;
  className?: string;
  layout?: string;
  req?: boolean;
  rows?: number;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

const CheckTextArea = <TFormData extends FieldValues>({
  register,
  name,
  label,
  placeholder = "",
  className = "",
  layout = "",
  req = false,
  rows = 4,
  value,
  onChange,
}: TTextArea<TFormData>) => {
  return (
    <div className={layout}>
      <label className="block text-[14px] font-medium">{label}</label>
      <textarea
        {...register(name)}
        className={`p-3 w-full text-sm rounded-lg mt-2 ring-0 border-[1px] outline-none font-normal text-[#686e7d] border-[#eee] leading-6 resize-none ${className}`}
        placeholder={placeholder}
        required={req}
        rows={rows}
        value={value} // Controlled component value
        onChange={onChange} // Allow external onChange if needed
      />
    </div>
  );
};

export default CheckTextArea;
