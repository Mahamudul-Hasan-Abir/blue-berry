import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const cardData = [
  {
    image:
      "https://res.cloudinary.com/dnfqhy8di/image/upload/v1736070630/team1_gzafou.jpg",
    title: "Maria Margert",
    description: "Co-Founder",
  },
  {
    image:
      "https://res.cloudinary.com/dnfqhy8di/image/upload/v1736070631/team2_zbqfme.jpg",
    title: "Mario Bisop",
    description: "CEO",
  },
  {
    image:
      "https://res.cloudinary.com/dnfqhy8di/image/upload/v1736070633/team3_umpbv5.jpg",
    title: "Elena Wilson",
    description: "Manager",
  },
  {
    image:
      "https://res.cloudinary.com/dnfqhy8di/image/upload/v1736070635/team4_qogbvg.jpg",
    title: "Juiat Hilson",
    description: "Team Leader",
  },
];

const TeamCarusal = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Default number of slides to show
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1024, // For tablet or smaller screens
        settings: {
          slidesToShow: 2, // Show 2 images on tablets
        },
      },
      {
        breakpoint: 640, // For mobile screens
        settings: {
          slidesToShow: 1, // Show 1 image on phones
        },
      },
    ],
  };

  return (
    <div className="container mx-auto mt-8">
      <Slider {...settings}>
        {cardData.map((card, index) => (
          <div key={index} className="p-12 md:p-4">
            <div className="h-[320px] w-[250px] rounded-lg flex justify-center items-center flex-col">
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-80 object-cover rounded-md mb-4"
              />
              <h2 className="text-[18px] font-bold mb-2">{card.title}</h2>
              <p className="text-gray-600 text-[13px]">{card.description}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TeamCarusal;
