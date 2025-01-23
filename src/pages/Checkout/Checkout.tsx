import { FaStar } from "react-icons/fa";
import Navigator from "../../components/Navigator/Navigator";

import Container from "../../Layouts/Container/Container";
import { useGetUserCartQuery } from "../../redux/api/cartApi";

import { SlStar } from "react-icons/sl";
import { useAddUsersOrderMutation } from "../../redux/api/orderApi";
import { useEffect, useState } from "react";
import { toast } from "sonner";

type Review = {
  userId: string;
  rating: number;
  comment: string;
  _id: string;
};

type Product = {
  category: string;
  description: string;
  image?: string;
  name: string;
  price: string;
  quantity: string[];
  reviews: Review[];
  _id: string;
};
type Products = {
  number: number;
  product: Product;
  _id: string;
};
const Checkout = () => {
  const { data } = useGetUserCartQuery("");

  const [createOrder] = useAddUsersOrderMutation();
  const subTotal =
    data?.data?.reduce((total: number, product: Products) => {
      return total + Number(product?.product?.price) * product?.number;
    }, 0) || 0;

  const total = subTotal + 20;

  const totalPrice = total.toFixed(2);

  const [orderDetails, setOrderDetails] = useState({
    products: [] as { productId: string; quantity: number }[],
  });
  useEffect(() => {
    if (data?.data) {
      const products = data.data.map((product: Products) => ({
        productId: product?.product?._id,
        quantity: Number(product?.number),
      }));
      setOrderDetails((prevDetails) => ({
        ...prevDetails,
        products,
      }));
    }
  }, [data]);

  const handleCheckOut = async () => {
    try {
      const res = await createOrder(orderDetails).unwrap();
      if (res?.success) {
        toast.success("Order Placed Successfully");
      } else {
        toast.error("Order creating failed", res?.message);
      }
    } catch (error) {
      console.error("Error creating order", error);
      toast.error("An error occurred while placing the order");
    }
  };
  const children = {
    page: "Check Out",
    pageName: "Check Out Page",
  };
  return (
    <div>
      <Navigator page={children.page} pageName={children.pageName}></Navigator>
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mt-20">
          {/* Sidebar */}
          <div className="col-span-1 md:col-span-3 p-5 rounded-3xl border-[1px] md:h-96">
            <div>
              {/* Summary Details */}
              <div className="mt-10">
                <div className="flex justify-between">
                  <p className="font-semibold">Sub-Total</p>
                  <p className="font-semibold">{subTotal}</p>
                </div>
                <div className="flex justify-between">
                  <p className="font-semibold">Delivery Charge</p>
                  <p className="font-semibold">$20.00</p>
                </div>
                <hr className="mt-5" />
                <div className="flex justify-between">
                  <p className="font-semibold">Total Price </p>
                  <p className="font-semibold">{totalPrice}</p>
                </div>

                <button
                  onClick={handleCheckOut}
                  className="bg-primary mx-auto px-5 py-2 text-white rounded-xl mt-10"
                >
                  Checkout
                </button>
              </div>
            </div>
          </div>
          {/* Product Section */}
          <div className="col-span-1 md:col-span-9 border-[1px] rounded-2xl">
            <div className="overflow-x-auto rounded-xl grid md:grid-cols-3 grid-cols-1 gap-3 m-5">
              {/* Cart will be here */}

              {data?.data?.map((product: Products) => (
                <div
                  key={product._id}
                  className=" h-[421px] w-full border-[1px] rounded-[25px] "
                >
                  <div className=" border-b-[1px] ">
                    <img
                      src={product.product.image}
                      className="h-[304px] w-full overflow-hidden rounded-t-[24px]"
                      alt=""
                    />
                  </div>
                  <div className="">
                    <div className="flex justify-between m-5">
                      <p className="text-[13px]">{product.product.category}</p>
                      <div className="flex justify-between">
                        <FaStar className="text-primary"></FaStar>
                        <FaStar className="text-primary"></FaStar>
                        <FaStar className="text-primary"></FaStar>
                        <FaStar className="text-primary"></FaStar>
                        <SlStar></SlStar>
                      </div>
                    </div>
                    <div className="mx-5">
                      <h1 className="text-[15px] font-semibold">
                        {product.product.name}
                      </h1>
                    </div>
                    <div className="flex justify-between mx-5">
                      <p className="font-bold text-[16px]">
                        ${product.product.price}
                      </p>
                      <p className="text-[14px]">
                        <span className="text-xl font-semibold">Quanity:</span>
                        {product.number}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Checkout;
