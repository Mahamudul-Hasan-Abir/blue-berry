import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const cardData = [
  {
    image:
      "https://res.cloudinary.com/dnfqhy8di/image/upload/v1736068102/1_i8u7c6.svg",
    title: "Vegetable",
    description: "15 items",
    background: "bg-[#fbf9e4]",
  },
  {
    image:
      "https://res.cloudinary.com/dnfqhy8di/image/upload/v1736068103/4_nnhcex.svg",
    title: "Fruits",
    description: "08 items",
    background: "bg-[#fef1f1]",
  },
  {
    image:
      "https://res.cloudinary.com/dnfqhy8di/image/upload/v1736068103/3_hcemse.svg",
    title: "Cold Drinks",
    description: "25 items",
    background: "bg-[#e1fcf2]",
  },
  {
    image:
      "https://res.cloudinary.com/dnfqhy8di/image/upload/v1736068103/2_n0vxhz.svg",
    title: "Bakery",
    description: "30 items",
    background: "bg-[#f3f1fe]",
  },
  {
    image:
      "https://res.cloudinary.com/dnfqhy8di/image/upload/v1736068102/1_i8u7c6.svg",
    title: "Vegetable",
    description: "15 items",
    background: "bg-[#fbf9e4]",
  },
  {
    image:
      "https://res.cloudinary.com/dnfqhy8di/image/upload/v1736068103/2_n0vxhz.svg",
    title: "Fruits",
    description: "08 items",
    background: "bg-[#fef1f1]",
  },
  {
    image:
      "https://res.cloudinary.com/dnfqhy8di/image/upload/v1736068103/3_hcemse.svg",
    title: "Cold Drinks",
    description: "25 items",
    background: "bg-[#e1fcf2]",
  },
  {
    image:
      "https://res.cloudinary.com/dnfqhy8di/image/upload/v1736068103/4_nnhcex.svg",
    title: "Bakery",
    description: "30 items",
    background: "bg-[#f3f1fe]",
  },
];
const Carusal = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    pauseOnHover: false,
  };
  return (
    <div className="container mx-auto mt-8">
      <Slider {...settings}>
        {cardData.map((card, index) => (
          <div key={index} className="p-4">
            <div
              className={`${card.background} h-[200px] w-[200px] shadow-md rounded-lg p-6 flex justify-center items-center flex-col`}
            >
              <img
                src={card.image}
                alt={card.title}
                className="w-[70px] h-[70px] object-cover rounded-md mb-4"
              />
              <h2 className="text-[16px] font-bold mb-2">{card.title}</h2>
              <p className="text-gray-600 text-[13px]">{card.description}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carusal;
