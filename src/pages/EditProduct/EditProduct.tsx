import { HiOutlineSquares2X2 } from "react-icons/hi2";

import { FaChevronDown, FaStar } from "react-icons/fa";

import product1 from "../../assets/products/1.jpg";
import product2 from "../../assets/products/2.jpg";
import product3 from "../../assets/products/3.jpg";
import product4 from "../../assets/products/4.jpg";
import product5 from "../../assets/products/5.jpg";
import product6 from "../../assets/products/6.jpg";
import product7 from "../../assets/products/7.jpg";
import product8 from "../../assets/products/8.jpg";
import product9 from "../../assets/products/9.jpg";
import product10 from "../../assets/products/10.jpg";
import product11 from "../../assets/products/11.jpg";
import product12 from "../../assets/products/12.jpg";
import product13 from "../../assets/products/13.jpg";
import product14 from "../../assets/products/14.jpg";
import product15 from "../../assets/products/15.jpg";
import product16 from "../../assets/products/16.jpg";

import { SlStar } from "react-icons/sl";

const cardcard = [
  {
    _id: 1,
    image: product1,
    category: "Chocos",
    ratting: "4",
    name: "Mixed Fruits Chocolates Pack",
    price: "25",
    quantity: "20",
  },
  {
    _id: 2,
    image: product2,
    category: "juice",
    ratting: "4",
    name: "Organic Apple juice Pack",
    price: "25",
    quantity: "20",
  },
  {
    image: product3,
    category: "Chocos",
    ratting: "4",
    name: "Mixed Almond nuts juice pack",
    price: "25",
    quantity: "20",
  },
  {
    _id: 3,
    image: product4,
    category: "Chocos",
    ratting: "4",
    name: "Fresh Mango Slice Juice",
    price: "25",
    quantity: "20",
  },
  {
    _id: 4,
    image: product5,
    category: "Chocos",
    ratting: "4",
    name: "Mixed Fruits Chocolates Pack",
    price: "25",
    quantity: "20",
  },
  {
    _id: 5,
    image: product6,
    category: "juice",
    ratting: "4",
    name: "Organic Apple juice Pack",
    price: "25",
    quantity: "20",
  },
  {
    _id: 6,
    image: product7,
    category: "Chocos",
    ratting: "4",
    name: "Mixed Almond nuts juice pack",
    price: "25",
    quantity: "20",
  },
  {
    _id: 7,
    image: product8,
    category: "Chocos",
    ratting: "4",
    name: "Fresh Mango Slice Juice",
    price: "25",
    quantity: "20",
  },
  {
    _id: 8,
    image: product9,
    category: "Chocos",
    ratting: "4",
    name: "Mixed Fruits Chocolates Pack",
    price: "25",
    quantity: "20",
  },
  {
    _id: 9,
    image: product10,
    category: "juice",
    ratting: "4",
    name: "Organic Apple juice Pack",
    price: "25",
    quantity: "20",
  },
  {
    _id: 10,
    image: product11,
    category: "Chocos",
    ratting: "4",
    name: "Mixed Almond nuts juice pack",
    price: "25",
    quantity: "20",
  },
  {
    _id: 11,
    image: product12,
    category: "Chocos",
    ratting: "4",
    name: "Fresh Mango Slice Juice",
    price: "25",
    quantity: "20",
  },
  {
    _id: 12,
    image: product13,
    category: "Chocos",
    ratting: "4",
    name: "Mixed Fruits Chocolates Pack",
    price: "25",
    quantity: "20",
  },
  {
    image: product14,
    category: "juice",
    ratting: "4",
    name: "Organic Apple juice Pack",
    price: "25",
    quantity: "20",
  },
  {
    _id: 13,
    image: product15,
    category: "Chocos",
    ratting: "4",
    name: "Mixed Almond nuts juice pack",
    price: "25",
    quantity: "20",
  },
  {
    _id: 14,
    image: product16,
    category: "Chocos",
    ratting: "4",
    name: "Fresh Mango Slice Juice",
    price: "25",
    quantity: "20",
  },
];

const EditProduct = () => {
  return (
    <div className=" grid grid-cols-12 gap-6 mt-5">
      {/* This is Product Section */}
      <div className="col-span-12">
        <div className="h-20 bg-[#f8f8fb] flex w-full justify-center items-center px-5 rounded-2xl border-[1px]">
          <div className=" flex justify-between w-full">
            <div className="size-12 bg-primary text-white flex justify-center items-center rounded-[12px]">
              <HiOutlineSquares2X2 className="size-9"></HiOutlineSquares2X2>
            </div>
            <div className="flex gap-2 items-center">
              <p className="text-[18px ] semi-bold">Sort By</p>
              <FaChevronDown />
            </div>
          </div>
        </div>
        {/* Product Card Section */}
        <div className="mt-5">
          <div className="grid grid-cols-3 gap-5">
            {cardcard.map((card) => (
              <div
                key={card._id}
                className=" h-[421px] w-full border-[1px] rounded-[25px]"
              >
                <div className=" border-b-[1px] ">
                  <img
                    src={card.image}
                    className="h-[304px] w-full overflow-hidden rounded-t-[24px]"
                    alt=""
                  />
                </div>
                <div className="">
                  <div className="flex justify-between m-5">
                    <p className="text-[13px]">{card.category}</p>
                    <div className="flex justify-between">
                      <FaStar className="text-primary"></FaStar>
                      <FaStar className="text-primary"></FaStar>
                      <FaStar className="text-primary"></FaStar>
                      <FaStar className="text-primary"></FaStar>
                      <SlStar></SlStar>
                    </div>
                  </div>
                  <div className="mx-5">
                    <h1 className="text-[15px] font-semibold">{card.name}</h1>
                  </div>
                  <div className="flex justify-between mx-5">
                    <p className="font-bold text-[16px]">${card.price}</p>
                    <p className="text-[14px]">{card.quantity}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProduct;
