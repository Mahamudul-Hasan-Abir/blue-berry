import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const cardData = [
  {
    image:
      "https://res.cloudinary.com/dnfqhy8di/image/upload/v1736069026/1_1_djjnkx.jpg",
    name: "isabulla Oliver",
    title: "Team Leader",
    review:
      "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been .",
  },
  {
    image:
      "https://res.cloudinary.com/dnfqhy8di/image/upload/v1736069027/2_1_sf4wol.jpg",
    name: "isabulla Oliver",
    title: "Team Leader",
    review:
      "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been .",
  },
  {
    image:
      "https://res.cloudinary.com/dnfqhy8di/image/upload/v1736069028/3_1_tu1poo.jpg",
    name: "isabulla Oliver",
    title: "Team Leader",
    review:
      "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been .",
  },
];
const Tricky = () => {
  const settings = {
    dots: false, // No dots for the carousel
    infinite: true,
    speed: 1000, // Transition speed (in milliseconds)
    slidesToShow: 1, // Show 4 cards at a time
    slidesToScroll: 1, // Scroll 1 card at a time
    autoplay: true,
    autoplaySpeed: 2000, // Auto slide every 3 minutes (in milliseconds)
    arrows: false, // No arrows
    pauseOnHover: false,
  };
  return (
    <div className="my-20">
      {/* Backgournd */}
      <div className="hidden relative md:h-[500px] tricky:flex justify-center items-center">
        <img
          className="absolute left-20 top-10 transform -rotate-[15deg] rounded-3xl"
          src="https://res.cloudinary.com/dnfqhy8di/image/upload/v1736069030/img-1_cvgtkh.png"
          alt=""
        />
        <h1 className="text-6xl hidden custom:block transform -rotate-90 font-londrina absolute top-56 left-28 text-[#dcddde]">
          Testimonials
        </h1>
        <img
          className="absolute rotate-[30deg] rounded-3xl top-96 left-20 blur-sm"
          src="https://res.cloudinary.com/dnfqhy8di/image/upload/v1736069031/img-2_echgpg.png"
          alt=""
        />
        <img
          className="absolute -rotate-[30deg] rounded-3xl top-10 left-[55%] blur-sm"
          src="https://res.cloudinary.com/dnfqhy8di/image/upload/v1736069032/img-3_zezpwe.png"
          alt=""
        />
        <img
          className="absolute rounded-3xl top-40 left-[70%] rotate-[30deg]"
          src="https://res.cloudinary.com/dnfqhy8di/image/upload/v1736069034/img-4_egelqj.png"
          alt=""
        />
        <img
          className="absolute rounded-3xl top-36 left-[85%] blur-sm"
          src="https://res.cloudinary.com/dnfqhy8di/image/upload/v1736069035/img-5_zqlla3.png"
          alt=""
        />
        <img
          className="absolute rounded-3xl -rotate-[25deg] top-96 left-[80%]"
          src="https://res.cloudinary.com/dnfqhy8di/image/upload/v1736069036/img-6_uzedim.png"
          alt=""
        />

        {/* Here is the Carusal */}

        {/* Here is the Carusal */}
        <div className="container w-[60%] mx-auto mt-20">
          <Slider {...settings}>
            {cardData.map((card, index) => (
              <div key={index} className="p-4">
                <div
                  className={`w-full rounded-lg p-6 flex justify-center items-center gap-5`}
                >
                  <div>
                    <img
                      src={card.image}
                      alt={card.name}
                      className="w-72 object-cover rounded-3xl mb-4 "
                    />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold mb-2">{card.title}</h2>
                    <p className="text-gray-600 text-sm">({card.title})</p>
                    <div className="border-[1px] p-5 my-5 rounded-3xl">
                      <p className="text-gray-600 text-base ">{card.review}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Tricky;
