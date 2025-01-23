import { FaRegUser } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { IoSearch } from "react-icons/io5";

import Vegitables from "../Buttons/Dropdowns/Vegitables";
import Container from "../../Layouts/Container/Container";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import {
  clearCredentials,
  selectCurrentUser,
} from "../../redux/features/authSlice";
import { toast } from "sonner";

const NavBar = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectCurrentUser);
  const handleLogOut = () => {
    dispatch(clearCredentials());
    navigate("/");
    toast.success("Loggedout successfully", { duration: 2000 });
  };
  return (
    <Container>
      <div className="grid grid-cols-1 lg:grid-cols-12 h-12 lg:gap-0 gap-2 my-5 ">
        {/* Logo part */}
        <div className="col-span-1 lg:col-span-2 ">
          <Link to="/">
            <img
              src="https://res.cloudinary.com/dnfqhy8di/image/upload/v1736070154/logo_nbbh2f.png"
              className="w-32 lg:w-30 md:w-30"
            />
          </Link>
        </div>
        {/* Search input part */}
        <div className="col-span-1 lg:col-span-5 flex items-center ">
          {/* total bar  */}
          <div className=" w-full h-[36px] border-[1px] border-[#eeeeee] rounded-md grid grid-cols-12">
            <div className="col-span-3 flex items-center justify-center">
              {/* Button */}
              {/* <p className=" text-gray-400 text-xl">Products</p> */}
              <Vegitables></Vegitables>
            </div>
            {/* search input */}
            <div className=" col-span-8 border-l-[1px] border-[#eeeeee] flex items-center">
              <input
                type="text"
                className=" w-full h-[26px] text-[14px] mx-2 text-gray-400 font-semibold border-none focus:outline-none"
              />
            </div>
            {/* search logo */}
            <div className="col-span-1 flex justify-center items-center ">
              <IoSearch className="w-5 h-5 text-gray-600" />
            </div>
          </div>
        </div>
        {/* Utils part */}
        <div className=" col-span-1 lg:col-span-5 flex justify-center lg:justify-end ">
          <div className=" w-[124px] grid grid-cols-4 ">
            <div className=" col-span-1 flex justify-center items-center">
              <FaRegUser className="size-full text-primary"></FaRegUser>
            </div>
            <div className=" col-span-3 p-1">
              <div className="">
                <p className="text-xs">Account</p>
              </div>

              {user ? (
                <div className=" hidden md:flex space-x-8 items-center">
                  <div className="relative group">
                    <button
                      onClick={handleLogOut}
                      className="text-[#3d4750] hover:text-primary font-semibold flex items-center gap-2"
                    >
                      Logout
                    </button>
                    <div className="absolute z-10 hidden group-hover:block bg-white shadow-lg py-2 w-40 rounded-md">
                      <Link to="/checkout">
                        <a
                          href="#"
                          className="block px-4 py-2 text-gray-700 hover:text-primary"
                        >
                          Checkout
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              ) : (
                <div className=" hidden md:flex space-x-8 items-center">
                  <div className="relative group">
                    <button className="text-[#3d4750] hover:text-primary font-semibold flex items-center gap-2">
                      Login
                    </button>
                    <div className="absolute z-10 hidden group-hover:block bg-white shadow-lg py-2 w-40 rounded-md">
                      <Link
                        className="block px-4 py-2 text-gray-700 hover:text-primary"
                        to="/register"
                      >
                        Register
                      </Link>
                      <Link
                        className="block px-4 py-2 text-gray-700 hover:text-primary"
                        to="/login"
                      >
                        Login
                      </Link>
                      <Link
                        to="/checkout"
                        className="block px-4 py-2 text-gray-700 hover:text-primary"
                      >
                        Checkout
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className=" w-[124px] grid grid-cols-4 ">
            <div className=" col-span-1 flex justify-center items-center">
              <FaRegStar className="size-full text-primary"></FaRegStar>
            </div>
            <div className=" col-span-3 p-1">
              <div className="">
                <p className="text-xs">3 itemst</p>
              </div>
              <Link to="/orders">
                <div className="">
                  <p className="font-semibold">Orders</p>
                </div>
              </Link>
            </div>
          </div>

          <div className=" w-[124px] grid grid-cols-4 ">
            <div className=" col-span-1 flex justify-center items-center">
              <AiOutlineShoppingCart className="size-full text-primary"></AiOutlineShoppingCart>
            </div>
            <div className=" col-span-3 p-1">
              <div className="">
                <p className="text-xs">4 items</p>
              </div>
              <Link to="/cart">
                <div className="">
                  <p className="font-semibold">Cart</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default NavBar;
