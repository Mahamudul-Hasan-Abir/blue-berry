type CartInputProps = {
  label: string;
  placeholder: string;
  type: string;
  className?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const CartInput: React.FC<CartInputProps> = ({
  label,
  placeholder,
  type,
  className = "",
  value,
  onChange,
}) => {
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`p-3 w-full rounded-lg border border-gray-300 text-gray-800 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent ${className}`}
      />
    </div>
  );
};

export default CartInput;
