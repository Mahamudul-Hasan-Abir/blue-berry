import { useState } from "react";

const PriceClider = () => {
  const [price, setPrice] = useState([130, 500]);
  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPrice = parseInt(e.target.value, 10);
    setPrice([newPrice, price[1]]);
  };
  return (
    <div className="p-4">
      {/* Displaying the price range */}
      <div className="bg-white rounded-lg h-12 py-2 text-center mb-4 ">
        <span className="text-xl font-semibold">{`$${price[0]} - $${price[1]}`}</span>
      </div>

      {/* Slider */}
      <div className="relative flex items-center">
        <input
          type="range"
          min="0"
          max="500"
          value={price[0]}
          onChange={handleSliderChange}
          className="w-full h-1 bg-black rounded-full appearance-none focus:outline-none slider-thumb"
        />
        <div
          className="absolute left-0 h-1 bg-indigo-500 rounded-full"
          style={{ width: `${(price[0] / 500) * 100}%` }}
        />
      </div>
    </div>
  );
};

export default PriceClider;
