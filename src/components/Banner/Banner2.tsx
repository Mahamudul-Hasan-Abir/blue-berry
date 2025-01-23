import banner from "../../assets/Banner/banner.jpg";
import angle2 from "../../assets/Category/left-shape.png";
import angle3 from "../../assets/Category/right-shape.png";
import OutlineButton from "../Buttons/OutlineButton/OutlineButton";
const Banner = () => {
  return (
    <div className="h-[420px] lg:h-[650px] w-full mt-10 mb-0 lg:mt-20 lg:mb-20 ">
      <img src={banner} className="lg:h-full h-[400px] w-full" alt="" />
      <img
        src={angle2}
        className="relative left-[770px] bottom-[30px] "
        alt=""
      />
      <img
        src={angle3}
        className="relative left-[1170px] bottom-[60px] "
        alt=""
      />
      <div className="lg:relative bottom-[278px] z-10 left-[800px] rounded-t-3xl w-[370px] h-[218px] bg-white hidden lg:flex justify-center items-center">
        <div className="px-5">
          <p className="text-[20px] font-semibold text-primary">25% Off</p>
          <h1 className="text-[40px] text-[#3d4750] font-bold">
            Fresh & Organic vegetables
          </h1>
          <OutlineButton></OutlineButton>
        </div>
      </div>
    </div>
  );
};

export default Banner;
