import Container from "../../Layouts/Container/Container";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const cardData = [
  {
    image:
      "https://res.cloudinary.com/dnfqhy8di/image/upload/v1736068103/2_n0vxhz.svg",
    title: "Vegetable",
    description: "15 items",
    background: "bg-[#fbf9e4]",
  },
  {
    image:
      "https://res.cloudinary.com/dnfqhy8di/image/upload/v1736068103/3_hcemse.svg",
    title: "Fruits",
    description: "08 items",
    background: "bg-[#fef1f1]",
  },
  {
    image:
      "https://res.cloudinary.com/dnfqhy8di/image/upload/v1736068103/4_nnhcex.svg",
    title: "Bakery",
    description: "30 items",
    background: "bg-[#f3f1fe]",
  },
  {
    image:
      "https://res.cloudinary.com/dnfqhy8di/image/upload/v1736068102/1_i8u7c6.svg",
    title: "Bakery",
    description: "30 items",
    background: "bg-[#e1fcf2]",
  },
];

const ExploreCatagories = () => {
  const settings = {
    dots: false, // No dots for the carousel
    infinite: true,
    speed: 500, // Transition speed (in milliseconds)
    slidesToShow: 4, // Show 4 cards at a time
    slidesToScroll: 1, // Scroll 1 card at a time
    autoplay: true,
    autoplaySpeed: 3000, // Auto slide every 3 minutes (in milliseconds)
    arrows: false, // No arrows
    pauseOnHover: false,
  };

  return (
    <Container>
      <div className="lg:grid grid-cols-0 lg:grid-cols-2 mt-10 lg:mt-0">
        {/* Image div */}
        <div className="hidden lg:block">
          <img
            src="https://res.cloudinary.com/dnfqhy8di/image/upload/v1736067972/category_1_asp8dv.jpg"
            className="size-[525px] m-20 rounded-3xl"
            alt=""
          />

          {/* Shape Bottom */}
          <img
            src="https://res.cloudinary.com/dnfqhy8di/image/upload/v1736068258/left-shape_oqb9wa.png"
            className="relative bottom-[100px] left-[390px] size-5"
            alt=""
          />

          {/* Shape top*/}
          <img
            src="https://res.cloudinary.com/dnfqhy8di/image/upload/v1736068258/left-shape_oqb9wa.png"
            className="relative bottom-[285px] left-[585px] size-5"
            alt=""
          />

          <div className="relative hidden lg:block z-10 left-[410px] bottom-[285px] bg-white w-full h-[165px] rounded-tl-3xl ">
            <div className="container  mx-auto ">
              <Slider {...settings}>
                {cardData.map((card, index) => (
                  <div key={index} className="p-4">
                    <div
                      className={`${card.background} h-36 w-full shadow-md rounded-lg p-6 flex justify-center items-center flex-col`}
                    >
                      <img
                        src={`${card.image}`}
                        alt={card.title}
                        className="w-[50px] h-[50px] object-cover rounded-md mb-4"
                      />
                      <h2 className="text-[16px] font-bold mb-2">
                        {card.title}
                      </h2>
                      <p className="text-gray-600 text-[13px]">
                        {card.description}
                      </p>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
        {/* Text Area */}
        <div>
          <p className="lg:block hidden text-9xl font-londrina text-[#dcddde] mt-16 ">
            Explore <br /> Categories
          </p>
        </div>
        {/* Carusal div */}
      </div>

      {/* extra div for mobile */}
      <div className="lg:hidden">
        <div>
          <h1 className="text-3xl text-center my-5 text-primary">
            Explore Categoris{" "}
          </h1>
        </div>
        <div className=" lg:hidden  z-10 left-[410px] bottom-[285px] bg-white w-full h-[165px] ">
          <div className="container  mx-auto ">
            <Slider {...settings}>
              {cardData.map((card, index) => (
                <div key={index} className="p-4">
                  <div
                    className={`${card.background} h-24 w-full shadow-md rounded-lg p-6 flex justify-center items-center flex-col`}
                  >
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full h-[50px] object-cover rounded-md mb-4"
                    />
                    <h2 className="text-xs font-bold mb-2">{card.title}</h2>
                    <p className="text-gray-600 text-[10px]">
                      {card.description}
                    </p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ExploreCatagories;
