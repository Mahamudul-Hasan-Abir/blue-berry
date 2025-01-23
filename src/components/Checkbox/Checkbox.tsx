import { TChekbox } from "../../Types/randomTypes";

const Checkbox = ({ register, name }: TChekbox) => {
  const options = [
    "250g",
    "500g",
    "1kg",
    "2kg",
    "5kg",
    "250ml",
    "500ml",
    "1l",
    "2l",
    "5l",
  ];

  return (
    <div className="col-span-2 lg:col-span-1">
      <label className="block text-[14px] font-poppins font-medium">
        Quantity
      </label>
      <div className="grid grid-cols-3 border-[1px] p-5 rounded-lg border-[#eee] mt-2 h-full lg:h-56">
        {options.map((value) => (
          <label key={value} className="mr-4">
            <input
              {...register?.(name)}
              type="checkbox"
              value={value}
              className="mr-2 rounded-full"
            />
            {value}
          </label>
        ))}
      </div>
    </div>
  );
};

export default Checkbox;
