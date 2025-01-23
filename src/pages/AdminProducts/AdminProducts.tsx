import { HiOutlineSquares2X2 } from "react-icons/hi2";

import { FaChevronDown } from "react-icons/fa";

import ProductCard, { TCard } from "../../components/ProductCard/ProductCard";
import { useGetProductsQuery } from "../../redux/api/prodictApi";

// const cardData = [
//   {
//     image: product1,
//     category: "Chocos",
//     ratting: "4",
//     name: "Mixed Fruits Chocolates Pack",
//     price: "25",
//     quantity: "20",
//   },
//   {
//     image: product2,
//     category: "juice",
//     ratting: "4",
//     name: "Organic Apple juice Pack",
//     price: "25",
//     quantity: "20",
//   },
//   {
//     image: product3,
//     category: "Chocos",
//     ratting: "4",
//     name: "Mixed Almond nuts juice pack",
//     price: "25",
//     quantity: "20",
//   },
//   {
//     image: product4,
//     category: "Chocos",
//     ratting: "4",
//     name: "Fresh Mango Slice Juice",
//     price: "25",
//     quantity: "20",
//   },
//   {
//     image: product5,
//     category: "Chocos",
//     ratting: "4",
//     name: "Mixed Fruits Chocolates Pack",
//     price: "25",
//     quantity: "20",
//   },
//   {
//     image: product6,
//     category: "juice",
//     ratting: "4",
//     name: "Organic Apple juice Pack",
//     price: "25",
//     quantity: "20",
//   },
//   {
//     image: product7,
//     category: "Chocos",
//     ratting: "4",
//     name: "Mixed Almond nuts juice pack",
//     price: "25",
//     quantity: "20",
//   },
//   {
//     image: product8,
//     category: "Chocos",
//     ratting: "4",
//     name: "Fresh Mango Slice Juice",
//     price: "25",
//     quantity: "20",
//   },
//   {
//     image: product9,
//     category: "Chocos",
//     ratting: "4",
//     name: "Mixed Fruits Chocolates Pack",
//     price: "25",
//     quantity: "20",
//   },
//   {
//     image: product10,
//     category: "juice",
//     ratting: "4",
//     name: "Organic Apple juice Pack",
//     price: "25",
//     quantity: "20",
//   },
//   {
//     image: product11,
//     category: "Chocos",
//     ratting: "4",
//     name: "Mixed Almond nuts juice pack",
//     price: "25",
//     quantity: "20",
//   },
//   {
//     image: product12,
//     category: "Chocos",
//     ratting: "4",
//     name: "Fresh Mango Slice Juice",
//     price: "25",
//     quantity: "20",
//   },
//   {
//     image: product13,
//     category: "Chocos",
//     ratting: "4",
//     name: "Mixed Fruits Chocolates Pack",
//     price: "25",
//     quantity: "20",
//   },
//   {
//     image: product14,
//     category: "juice",
//     ratting: "4",
//     name: "Organic Apple juice Pack",
//     price: "25",
//     quantity: "20",
//   },
//   {
//     image: product15,
//     category: "Chocos",
//     ratting: "4",
//     name: "Mixed Almond nuts juice pack",
//     price: "25",
//     quantity: "20",
//   },
//   {
//     image: product16,
//     category: "Chocos",
//     ratting: "4",
//     name: "Fresh Mango Slice Juice",
//     price: "25",
//     quantity: "20",
//   },
// ];

const AdminProducts = () => {
  const { data } = useGetProductsQuery("");

  return (
    <div className=" grid grid-cols-12 gap-6 mt-5">
      {/* This is Product Section */}

      <div className="h-20 bg-[#f8f8fb] col-span-12 flex w-full justify-center items-center px-5 rounded-2xl border-[1px]">
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
      <div className="mt-5 col-span-12">
        <div className="gap-5 grid grid-cols-12">
          {data?.data?.map((card: TCard) => (
            <div className="col-span-12 mx-5 md:mx-0 md:col-span-4">
              <ProductCard key={card._id} data={card}></ProductCard>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminProducts;
