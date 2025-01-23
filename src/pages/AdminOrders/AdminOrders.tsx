import { TbTrash } from "react-icons/tb";
import { useGetAllUsersOrdersForAdminQuery } from "../../redux/api/orderApi";
type Orders = {
  _id: string;
  user: {
    name: string;
    email: string;
  };
  products: [];
  totalPrice: number;
  status: string;
};

const AdminOrders = () => {
  const { data } = useGetAllUsersOrdersForAdminQuery("");

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Order ID
            </th>
            <th scope="col" className="px-6 py-3">
              User
            </th>
            <th scope="col" className="px-6 py-3">
              User Email
            </th>
            <th scope="col" className="px-6 py-3">
              Status
            </th>
            <th scope="col" className="px-6 py-3">
              Delete Order
            </th>
          </tr>
        </thead>
        <tbody>
          {/* {users?.map((user: AUser) => ( */}
          {data?.data?.map((orders: Orders) => (
            <tr
              key={orders?._id}
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
            >
              <td className="p-4">
                <img className="w-16 rounded-3xl" />
                <p className="mt-3">{orders._id}</p>
              </td>
              <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                {orders?.user?.name || "No User"}
              </td>
              <td className="px-6 py-4">
                <div className="flex items-center">{orders?.user?.email}</div>
              </td>
              <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                {orders?.status}
              </td>
              <td className="px-6 py-4">
                <button className="font-medium text-red-600 dark:text-red-500 hover:underline">
                  <TbTrash className="size-5"></TbTrash>
                </button>
              </td>
            </tr>
          ))}

          {/* ))} */}
        </tbody>
      </table>
    </div>
  );
};

export default AdminOrders;
