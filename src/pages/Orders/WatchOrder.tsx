import { IoTrashOutline } from "react-icons/io5";
import Container from "../../Layouts/Container/Container";
import { useGetUserOrdersQuery } from "../../redux/api/orderApi";

type Orders = {
  _id: string;
  totalPrice: number;
  status: string;
};

const WatchOrder = () => {
  const { data } = useGetUserOrdersQuery("");

  return (
    <Container>
      <div className="relative mt-10 overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full  text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Order Id
              </th>
              <th scope="col" className="px-6 py-3">
                Total Price
              </th>
              <th scope="col" className="px-6 py-3">
                status
              </th>
              <th scope="col" className="px-6 py-3">
                Delete
              </th>
            </tr>
          </thead>
          <tbody>
            {data?.data?.map((orders: Orders) => (
              <tr
                key={orders._id}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                  {orders._id}
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center">{orders.totalPrice}</div>
                </td>

                <td
                  className={`px-6 py-4 font-semibold ${
                    orders.status === "pending"
                      ? "text-yellow-300"
                      : orders.status === "delivered"
                      ? "text-green-500"
                      : orders.status === "canceled"
                      ? "text-red-500"
                      : "text-gray-900" // Default text color
                  }`}
                >
                  {orders.status}
                </td>
                <td className="px-6 py-4">
                  <button className="font-medium text-red-600 dark:text-red-500 hover:underline">
                    <IoTrashOutline />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Container>
  );
};

export default WatchOrder;
