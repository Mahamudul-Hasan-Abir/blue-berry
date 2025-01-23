import Container from "../../Layouts/Container/Container";
import { FaAngleDown } from "react-icons/fa";
import Navigator from "../../components/Navigator/Navigator";
import {
  useGetUserCartQuery,
  useRemoveProductFromCartMutation,
} from "../../redux/api/cartApi";
import { IoTrashOutline } from "react-icons/io5";
import { toast } from "sonner";
import { Link } from "react-router-dom";
import CartInput from "../../components/CartInput/CartInput";

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

type CartDataTable = {
  number: number;
  _id: string;
  product: Product;
};

const Cart = () => {
  const { data, error, isLoading } = useGetUserCartQuery("");
  const [removeProductFromCart, { isSuccess }] =
    useRemoveProductFromCartMutation();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Something went wrong. Please try again later.</p>;
  }

  const subTotal =
    data?.data?.reduce((total: number, products: Products) => {
      return total + parseFloat(products?.product?.price);
    }, 0) || 0;

  const total = subTotal + 20;
  const formattedSubTotal = subTotal ? subTotal.toFixed(2) : "0.00";
  const totalPrice = total.toFixed(2);

  const handleRemoveProductFromCart = async (productId: string) => {
    try {
      await removeProductFromCart({ productId }).unwrap();
      toast.success("Product removed from cart");
    } catch (error) {
      toast("ProductId Missing");
    }
  };

  if (isSuccess) {
    toast.success("Product removed from cart successfully!");
  }

  const children = {
    page: "Cart",
    pageName: "Cart Page",
  };

  return (
    <div>
      <Navigator page={children.page} pageName={children.pageName}></Navigator>
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mt-20">
          {/* Sidebar */}
          <div className="col-span-1 md:col-span-3 p-5 rounded-3xl border-[1px]">
            <div>
              <h1 className="text-18px font-bold">Summary</h1>
              <div>
                <p className="font-semibold">Country</p>
                <div className="dropdown dropdown-bottom">
                  <div
                    tabIndex={0}
                    role="button"
                    className="border-[1px] py-3 text-center rounded-xl bg-white m-1 w-full flex justify-between px-3"
                  >
                    <p>Country</p>
                    <FaAngleDown className="mt-1" />
                  </div>
                </div>
              </div>
              {/* Additional inputs */}
              <CartInput
                label="Zip/Postal Code"
                placeholder="Zip/Postal Code"
                type="text"
                className="rounded-xl"
              />
              {/* Summary Details */}
              <div className="mt-10">
                <div className="flex justify-between">
                  <p className="font-semibold">Sub-Total</p>
                  <p className="font-semibold">${formattedSubTotal}</p>
                </div>
                <div className="flex justify-between">
                  <p className="font-semibold">Delivery Charge</p>
                  <p className="font-semibold">$20.00</p>
                </div>
                <hr className="mt-5" />
                <div className="flex justify-between">
                  <p className="font-semibold">Total Price</p>
                  <p className="font-semibold">${totalPrice}</p>
                </div>
                <Link className="mx-auto" to="/checkout">
                  <button className="bg-primary mx-auto px-5 py-2 text-white rounded-xl">
                    Checkout
                  </button>
                </Link>
              </div>
            </div>
          </div>
          {/* Product Section */}
          <div className="col-span-1 md:col-span-9 border-[1px] rounded-2xl">
            <div className="overflow-x-auto rounded-xl">
              <table className="min-w-full">
                <thead>
                  <tr className="border-b">
                    <th className="p-4 text-left w-1/2">Product</th>
                    <th className="p-4 text-left w-1/4">Price</th>
                    <th className="hidden md:table-cell p-4 text-left w-1/6">
                      Quantity
                    </th>
                    <th className="hidden md:table-cell p-4 text-left w-1/6">
                      Total
                    </th>
                    <th className="hidden md:table-cell p-4 text-left w-1/6">
                      Remove
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {data?.data?.map((products: CartDataTable) => (
                    <tr
                      key={products._id}
                      className="border-b h-12 text-xl font-medium"
                    >
                      <td className="p-4 w-1/2 h-12">
                        <div className="flex justify-start gap-6">
                          <img
                            src={products.product.image}
                            className="size-20 border-[1px] rounded-xl"
                            alt={products.product.name}
                          />
                          <p className="text-xl pt-6">
                            {products.product.name}
                          </p>
                        </div>
                      </td>
                      <td className="p-4 w-1/4 h-12">
                        {products.product.price}
                      </td>
                      <td className="hidden md:table-cell p-4 w-1/6 h-12">
                        {products.number}
                      </td>
                      <td className="hidden md:table-cell p-4 w-1/6 h-12">
                        {/* Calculate total */}
                        {parseFloat(products.product.price) * products.number}
                      </td>
                      <td className="hidden md:table-cell p-4 w-1/6 h-12">
                        <IoTrashOutline
                          onClick={() =>
                            handleRemoveProductFromCart(products.product._id)
                          }
                          className="text-red-500 cursor-pointer"
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Cart;
