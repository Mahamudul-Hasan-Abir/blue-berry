import { HiOutlineSquares2X2 } from "react-icons/hi2";
import Container from "../../Layouts/Container/Container";
import PriceClider from "../priceClider/PriceClider";
import { FaChevronDown } from "react-icons/fa";

import ProductCard from "../ProductCard/ProductCard";
import { useGetProductsQuery } from "../../redux/api/prodictApi";
import { TProduct } from "../../Types/randomTypes";

const AllProducts = () => {
  const { data, error, isLoading } = useGetProductsQuery("");
  const products = data?.data;
  return (
    <Container>
      <div className=" grid grid-cols-12 gap-6 mt-5">
        {/* This is Sidebar */}
        <div className="bg-[#f8f8fb] hidden md:block md:col-span-3 p-10 rounded-3xl border-[1px]">
          <div>
            <div className="h-10  ">
              <h1 className="text-18px font-bold">Category</h1>
            </div>
            <div className="flex gap-2 my-2">
              <input
                className="size-5 accent-primary rounded-2xl"
                type="checkbox"
              ></input>
              <p className="text-[15px] text-[#777777] ">Clothes</p>
            </div>
            <div className="flex gap-2 my-2">
              <input
                className="size-5 accent-primary rounded-2xl"
                type="checkbox"
              ></input>
              <p className="text-[15px] text-[#777777] ">Bags</p>
            </div>
            <div className="flex gap-2 my-2">
              <input
                className="size-5 accent-primary rounded-2xl"
                type="checkbox"
              ></input>
              <p className="text-[15px] text-[#777777] ">Shoes</p>
            </div>
            <div className="flex gap-2 my-2">
              <input
                className="size-5 accent-primary rounded-2xl"
                type="checkbox"
              ></input>
              <p className="text-[15px] text-[#777777] ">Electrics</p>
            </div>
            <div className="flex gap-2 my-2">
              <input
                className="size-5 accent-primary rounded-2xl"
                type="checkbox"
              ></input>
              <p className="text-[15px] text-[#777777] ">Phone</p>
            </div>
            <div className="flex gap-2 my-2">
              <input
                className="size-5 accent-primary rounded-2xl"
                type="checkbox"
              ></input>
              <p className="text-[15px] text-[#777777] ">Watch</p>
            </div>
          </div>
          <hr />
          <div className="mt-10">
            <div className="h-5">
              <h1 className="text-18px font-bold">Price</h1>
            </div>
            <PriceClider></PriceClider>
          </div>
        </div>

        {/* This is Product Section */}
        <div className="col-span-12 md:col-span-9 mx-4 md:mx-0">
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
            {isLoading && <p>Loading Products...</p>}
            {error && <p>Failed to load product.</p>}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {products?.map((product: TProduct, index: number) => (
                <ProductCard key={index} data={product}></ProductCard>
              ))}
              {/* {cardData.map((card, index) => (
                <ProductCard key={index} data={card}></ProductCard>
              ))} */}
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default AllProducts;
// <Link to={`/product/${product._id}`}> // </Link>
