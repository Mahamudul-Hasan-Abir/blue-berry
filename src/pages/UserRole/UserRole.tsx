import { useGetUsersRoleQuery } from "../../redux/api/adminApi";

type User = {
  _id: string;
  name: string;
  role: string;
  image: string;
};
const UserRole = () => {
  const { data } = useGetUsersRoleQuery("");

  const appUsers = data?.data;

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-16 py-3">
              <span className="sr-only">Image</span>
            </th>
            <th scope="col" className="px-6 py-3">
              User Name
            </th>
            <th scope="col" className="px-6 py-3">
              Role
            </th>
            <th scope="col" className="px-6 py-3">
              Make Admin
            </th>
            <th scope="col" className="px-6 py-3">
              Make User
            </th>
          </tr>
        </thead>
        <tbody>
          {appUsers?.map((user: User) => (
            <tr
              key={user._id}
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
            >
              <td className="p-4">
                <img
                  src={user.image}
                  className="w-16 md:w-32 max-w-full max-h-full"
                  alt="photo"
                />
              </td>
              <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                {user.name}
              </td>
              <td className="px-6 py-4">
                <div className="flex items-center">
                  <p>{user.role}</p>
                </div>
              </td>
              <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                <p>Admin</p>
              </td>
              <td className="px-6 py-4">
                <button className="font-medium text-red-600 dark:text-red-500 hover:underline">
                  <p>User</p>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserRole;
