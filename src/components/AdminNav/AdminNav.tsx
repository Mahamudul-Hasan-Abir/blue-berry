import logo from "../../assets/Logo/logo.png";
import { clearCredentials } from "../../redux/features/authSlice";
import { useAppDispatch } from "../../redux/hook";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
const AdminNav = () => {
  const navigate = useNavigate();

  const dispatch = useAppDispatch();
  const handleLogOut = () => {
    dispatch(clearCredentials());
    toast.success("Loggedout successfully", { duration: 2000 });
    navigate("/login");
  };
  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900 border-b-[1px]">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a
          href="http://localhost:5173/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img src={logo} />
        </a>
        <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <div className=" hidden md:flex space-x-8 items-center">
            <div className="relative group">
              <FaUserCircle className="size-7 text-primary"></FaUserCircle>
              <div className="absolute z-10 hidden group-hover:block bg-white shadow-lg py-2 w-40 rounded-md">
                <button
                  onClick={handleLogOut}
                  className="block px-4 py-2 text-gray-700 hover:text-primary"
                >
                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default AdminNav;
