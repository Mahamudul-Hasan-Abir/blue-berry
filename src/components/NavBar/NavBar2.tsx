import { useState } from "react";
import { FaRegCircle } from "react-icons/fa6";
import { HiOutlineSquares2X2 } from "react-icons/hi2";
import { MdOutlineVerifiedUser } from "react-icons/md";
import { Link } from "react-router-dom";

const NavBar2 = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Toggle the mobile menu
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  return (
    <div className=" border-t border-b h-14 border-gray-200 px-2  mt-24 lg:mt-0">
      <div className="max-w-7xl mx-auto h-full flex justify-between md:grid md:grid-cols-12  ">
        {/* Logo */}
        <div className="col-span-1  flex justify-center items-center">
          <div className="w-10 h-10 border-[1px] border-gray-200 flex justify-center items-center rounded-md">
            <HiOutlineSquares2X2 className="w-8 h-8 text-primary"></HiOutlineSquares2X2>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="col-span-5 flex justify-between">
          {/* Home */}
          <div className=" hidden md:flex space-x-8 items-center ">
            <div className="relative group">
              <Link to="/">
                <button className="text-[#3d4750] hover:text-primary font-semibold flex items-center gap-2">
                  Home
                </button>
              </Link>
            </div>
          </div>
          {/* Products */}
          <div className=" hidden md:flex space-x-8 items-center ">
            <div className="relative group">
              <Link to="/products">
                <button className="text-[#3d4750] hover:text-primary font-semibold flex items-center gap-2">
                  Products
                </button>
              </Link>
            </div>
          </div>

          {/* Catagory */}

          <div className=" hidden md:flex space-x-8 items-center">
            <div className="relative group">
              <button className="text-[#3d4750] hover:text-primary font-semibold flex items-center gap-2">
                Categories
                <span>
                  <FaRegCircle className="w-2 h-2 mt-[5px]"></FaRegCircle>
                </span>
              </button>
              <div className="absolute z-10 hidden group-hover:block bg-white shadow-lg py-2 w-80 rounded-md">
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-700 hover:text-primary"
                >
                  Vegitable
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-700 hover:text-primary"
                >
                  Vegitable
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-700 hover:text-primary"
                >
                  Vegitable
                </a>
              </div>
            </div>
          </div>
          {/* Pages */}

          <div className=" hidden md:flex space-x-8 items-center">
            <div className="relative group">
              <button className="text-[#3d4750] hover:text-primary font-semibold flex items-center gap-2">
                Pages
                <span>
                  <FaRegCircle className="w-2 h-2 mt-[5px]"></FaRegCircle>
                </span>
              </button>
              <div className="absolute z-10 hidden group-hover:block bg-white shadow-lg py-2 w-80 rounded-md">
                <Link
                  className="block px-4 py-2 text-gray-700 hover:text-primary"
                  to="/about-us"
                >
                  About Us
                </Link>
                <Link
                  className="block px-4 py-2 text-gray-700 hover:text-primary"
                  to="/cart"
                >
                  Cart
                </Link>
                <Link
                  className="block px-4 py-2 text-gray-700 hover:text-primary"
                  to="/contact-us"
                >
                  Contact Us
                </Link>
                <Link
                  className="block px-4 py-2 text-gray-700 hover:text-primary"
                  to="/checkout"
                >
                  Checkout
                </Link>

                <Link
                  className="block px-4 py-2 text-gray-700 hover:text-primary"
                  to="/faq"
                >
                  FAQ
                </Link>
              </div>
            </div>
          </div>

          {/* Offers */}

          <div className=" hidden md:flex space-x-8 items-center">
            <div className="relative group">
              <button className="text-[#3d4750] hover:text-primary font-semibold flex items-center gap-2">
                <span>
                  <MdOutlineVerifiedUser className="w-5 h-5 text-blue-500 mt-[5px]"></MdOutlineVerifiedUser>
                </span>
                Offers
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden ">
          <button
            onClick={toggleMobileMenu}
            className="text-primary"
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-8 w-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-8 w-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu - Breadcrumb style */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-black border-[10px] mt-2">
          <a
            href="#"
            className="block px-4 py-2  hover:text-primary text-black"
          >
            Menu 1 / Option 1
          </a>
          <a href="#" className="block px-4 py-2 text-black hover:text-primary">
            Menu 1 / Option 2
          </a>
        </div>
      )}
    </div>
  );
};

export default NavBar2;
