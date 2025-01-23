import OutlineButton from "../Buttons/OutlineButton/OutlineButton";
const Banner = () => {
  return (
    <div className="h-[420px] relative lg:h-[650px] w-full mt-10 mb-0 lg:mt-20 lg:mb-20 ">
      <img
        src="https://res.cloudinary.com/dnfqhy8di/image/upload/v1736068727/banner_ku4lel.jpg"
        className="lg:h-full  h-[400px] w-full"
        alt=""
      />

      <div className="lg:absolute bg-white bottom-[-1px] z-10 left-[60%] rounded-t-3xl w-[370px] h-[280px]  hidden lg:flex justify-center items-center">
        <div className="px-5">
          <p className="text-[20px] font-semibold text-primary">25% Off</p>
          <h1 className="text-[40px] text-[#3d4750] font-bold">
            Fresh & Organic vegetables
          </h1>
          <OutlineButton></OutlineButton>
        </div>
        <div className="relative w-full h-auto">
          <img
            src="https://res.cloudinary.com/dnfqhy8di/image/upload/v1736068258/left-shape_oqb9wa.png"
            className="w-[50px] h-[30px] absolute  right-[318%] top-[110px]"
            alt="Left Shape"
          />
          <img
            src="https://res.cloudinary.com/dnfqhy8di/image/upload/v1736068838/right-shape_anqs5s.png"
            className="w-[50px] h-[30px] absolute  left-[99%] top-[110px]"
            alt="Right Shape"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
