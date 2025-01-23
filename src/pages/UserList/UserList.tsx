import { TbTrash } from "react-icons/tb";
import { useGetAllUsersQuery } from "../../redux/api/adminApi";

interface AUser {
  profileImage: string;
  name: string;
  email: string;
  address: string;
  phone: string;
}

const UserList = () => {
  const { data } = useGetAllUsersQuery("");

  const users = data?.data;
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-16 py-3">
              <span className="sr-only">Image</span>
            </th>
            <th scope="col" className="px-6 py-3">
              Email
            </th>
            <th scope="col" className="px-6 py-3">
              Address
            </th>
            <th scope="col" className="px-6 py-3">
              Phone
            </th>
            <th scope="col" className="px-6 py-3">
              Delete User
            </th>
          </tr>
        </thead>
        <tbody>
          {users?.map((user: AUser) => (
            <tr
              key={user.email}
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
            >
              <td className="p-4">
                <img
                  src={user.profileImage}
                  className="w-16 rounded-3xl"
                  alt={user.name}
                />
                <p className="mt-3">{user.name}</p>
              </td>
              <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                {user.email}
              </td>
              <td className="px-6 py-4">
                <div className="flex items-center">{user.address}</div>
              </td>
              <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                {user.phone}
              </td>
              <td className="px-6 py-4">
                <button className="font-medium text-red-600 dark:text-red-500 hover:underline">
                  <TbTrash className="size-5"></TbTrash>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
