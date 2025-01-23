import photo4 from "../../assets/products/4.jpg";
import photo5 from "../../assets/products/5.jpg";
import photo6 from "../../assets/products/6.jpg";
import { IoStar } from "react-icons/io5";
const Test = () => {
  const products = [
    {
      img: photo4,
      name: "Sunflower Oil Bottle",
      price: "8",
    },
    {
      img: photo5,
      name: "Peanut Butter Jar",
      price: "5",
    },
    {
      img: photo6,
      name: "Pistachios 250g",
      price: "25",
    },
  ];
  return (
    <div className="grid grid-cols-1 gap-5">
      {/* card for checkout */}
      {products.map((product) => (
        <div className="border-[1px] flex gap-5 p-5 rounded-2xl bg-[#f8f8fb]">
          <div className="border-[1px] rounded-2xl">
            <img className="size-24" src={product.img} alt="" />
          </div>
          <div>
            <h1 className="text-lg font-semibold">{product.name}</h1>
            <div className="flex">
              <IoStar className="text-primary" />
              <IoStar className="text-primary" />
              <IoStar className="text-primary" />
              <IoStar className="text-primary" />
              <IoStar />
            </div>
            <p>{product.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Test;
