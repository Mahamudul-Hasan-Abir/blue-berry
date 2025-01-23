const Demo = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mx-3">
      <div className="h-[274px]  border-[1px] rounded-3xl flex flex-col justify-center items-center">
        <img
          src="https://res.cloudinary.com/dnfqhy8di/image/upload/v1736068891/1_hltvvr.png"
          className="size-[100px] "
          alt=""
        />
        <div className=" gap-5 text-center mt-5">
          <h1 className="text-[18px] font-bold mt-5">Free Shipping</h1>
          <p className="text-gray-500">
            Free shipping on all Us order or <br /> above $200
          </p>
        </div>
      </div>

      <div className="h-[274px]  border-[1px] rounded-3xl flex flex-col justify-center items-center">
        <img
          src="https://res.cloudinary.com/dnfqhy8di/image/upload/v1736068892/2_1_a4djkt.png"
          className="size-[100px] "
          alt=""
        />
        <div className=" gap-5 text-center mt-5">
          <h1 className="text-[18px] font-bold mt-5">24x7 Support</h1>
          <p className="text-gray-500">
            Contact us 24 hours a day, 7 <br /> days a week
          </p>
        </div>
      </div>

      <div className="h-[274px]  border-[1px] rounded-3xl flex flex-col justify-center items-center">
        <img
          src="https://res.cloudinary.com/dnfqhy8di/image/upload/v1736068893/3_sza0cw.png"
          className="size-[100px] "
          alt=""
        />
        <div className=" gap-5 text-center mt-5">
          <h1 className="text-[18px] font-bold mt-5">30 Days Return</h1>
          <p className="text-gray-500">
            Simply return it within 30 days <br /> for an exchange
          </p>
        </div>
      </div>

      <div className="h-[274px]  border-[1px] rounded-3xl flex flex-col justify-center items-center">
        <img
          src="https://res.cloudinary.com/dnfqhy8di/image/upload/v1736068895/4_1_fkmnvk.png"
          className="size-[100px] "
          alt=""
        />
        <div className=" gap-5 text-center mt-5">
          <h1 className="text-[18px] font-bold mt-5">Payment Secure</h1>
          <p className="text-gray-500">
            Contact us 24 hours a day, 7 <br /> days a week
          </p>
        </div>
      </div>
    </div>
  );
};

export default Demo;
