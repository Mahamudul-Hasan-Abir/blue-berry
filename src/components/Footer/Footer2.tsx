const Footer2 = () => {
  return (
    <div className="hidden h-14 border-t-[1px] border-gray-200 lg:flex items-center justify-center ">
      <div className="flex justify-between mx-20 w-full">
        <p className="text-primary text-[15px] font-semibold">
          Copyright © 2024{" "}
          <span className="text-[18px] font-bold">BlueBerry </span>all rights
          reserved.
        </p>
        <img
          src="https://res.cloudinary.com/dnfqhy8di/image/upload/v1736070490/payment_xpexke.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Footer2;
