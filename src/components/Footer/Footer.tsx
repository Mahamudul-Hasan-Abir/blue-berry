import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaLinkedin,
} from "react-icons/fa";

import { FaSquareXTwitter } from "react-icons/fa6";
import { IoLocationOutline, IoMailUnreadOutline } from "react-icons/io5";
import { BsWhatsapp } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="w-full max-w-7xl md:mx-auto bg-white ">
      <div className=" grid sm:grid-cols-1 lg:grid-cols-12 gap-6 mt-20">
        {/* Side 1 */}
        <div className="col-span-3 ps-14 lg:ps-0">
          <img
            src="https://res.cloudinary.com/dnfqhy8di/image/upload/v1736070154/logo_nbbh2f.png"
            alt=""
          />
          <p className="text-[14px] text-[#686e7d] mt-4 hover:text-primary">
            BlueBerry is the biggest market of grocery <br /> products. Get your
            daily needs from our <br /> store.
          </p>
          <div className="flex gap-2 mt-4">
            <img
              src="https://res.cloudinary.com/dnfqhy8di/image/upload/v1736070398/android_e7ve8o.png"
              className="h-[42px] rounded-lg"
              alt=""
            />
            <img
              src="https://res.cloudinary.com/dnfqhy8di/image/upload/v1736070400/apple_ropwzg.png"
              className="h-[42px] rounded-lg"
              alt=""
            />
          </div>
        </div>
        {/* side 2 three line */}
        <div className=" col-span-6 grid grid-cols-3 gap-5">
          <div>
            <div className="h-[37px] border-b-[1px] ">
              <h1 className="text-[18px] font-bold ">Category</h1>
            </div>

            <p className="text-[14px] text-[#686e7d] mt-2 hover:text-primary">
              Dairy & Milk
            </p>
            <p className="text-[14px] text-[#686e7d] mt-2 hover:text-primary">
              Snack & Spice
            </p>
            <p className="text-[14px] text-[#686e7d] mt-2 hover:text-primary">
              Fast Food
            </p>
            <p className="text-[14px] text-[#686e7d] mt-2 hover:text-primary">
              juice & Drink
            </p>
            <p className="text-[14px] text-[#686e7d] mt-2 hover:text-primary">
              Bakery
            </p>
            <p className="text-[14px] text-[#686e7d] mt-2 hover:text-primary">
              Seafood
            </p>
          </div>

          <div>
            <div className="h-[37px] border-b-[1px] ">
              <h1 className="text-[18px] font-bold ">Company</h1>
            </div>
            <p className="text-[14px] text-[#686e7d] mt-2 hover:text-primary">
              About Us
            </p>
            <p className="text-[14px] text-[#686e7d] mt-2 hover:text-primary">
              Delivery
            </p>
            <p className="text-[14px] text-[#686e7d] mt-2 hover:text-primary">
              Legal Notice
            </p>
            <p className="text-[14px] text-[#686e7d] mt-2 hover:text-primary">
              Terms & conditions
            </p>
            <p className="text-[14px] text-[#686e7d] mt-2 hover:text-primary">
              Secure payment
            </p>
            <p className="text-[14px] text-[#686e7d] mt-2 hover:text-primary">
              Contact us
            </p>
          </div>

          <div>
            <div className="h-[37px] border-b-[1px] ">
              <h1 className="text-[18px] font-bold ">Account</h1>
            </div>
            <p className="text-[14px] text-[#686e7d] mt-2 hover:text-primary">
              Sign In
            </p>
            <p className="text-[14px] text-[#686e7d] mt-2 hover:text-primary">
              View Cart
            </p>
            <p className="text-[14px] text-[#686e7d] mt-2 hover:text-primary">
              Return Policy
            </p>
            <p className="text-[14px] text-[#686e7d] mt-2 hover:text-primary">
              Become a Vendor
            </p>
            <p className="text-[14px] text-[#686e7d] mt-2 hover:text-primary">
              Affiliate Program
            </p>
            <p className="text-[14px] text-[#686e7d] mt-2 hover:text-primary">
              Payments
            </p>
          </div>
        </div>

        {/* 3rd Div */}
        <div className=" col-span-3 ps-20 lg:ps-0">
          <div className="h-[37px] border-b-[1px] ">
            <h1 className="text-[18px] font-bold ">Contact</h1>
          </div>
          <div className="flex items-center gap-3">
            <IoLocationOutline className="size-6" />
            <p className="text-[14px] text-[#686e7d] mt-2 hover:text-primary">
              House No-10, North Madartake, Shobujbag, Basabo, Dhaka-1214.
            </p>
          </div>
          <div className="my-3 flex items-center gap-3">
            <BsWhatsapp className="size-4" />

            <p className="text-[14px] text-[#686e7d] mt-2 hover:text-primary">
              +8801864271415
            </p>
          </div>
          <div className="flex items-center gap-3">
            <IoMailUnreadOutline className="size-4" />
            <p className="text-[14px] text-[#686e7d] mt-2 hover:text-primary">
              mhabir10@gmail.com
            </p>
          </div>
          <div className="flex gap-3 mt-3">
            <FaFacebookSquare className="size-6" />
            <FaInstagramSquare className="size-6" />
            <FaSquareXTwitter className="size-6" />
            <FaLinkedin className="size-6" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
