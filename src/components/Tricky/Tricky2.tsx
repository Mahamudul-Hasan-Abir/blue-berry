import Slider from "react-slick";
import review from "../../assets/Tricky/1 (1).jpg";
import review2 from "../../assets/Tricky/2 (1).jpg";
import review3 from "../../assets/Tricky/3 (1).jpg";

const Tricky2 = () => {
  const cardData = [
    {
      image: review,
      name: "isabulla Oliver",
      title: "Team Leader",
      review:
        "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been .",
    },
    {
      image: review2,
      name: "isabulla Oliver",
      title: "Team Leader",
      review:
        "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been .",
    },
    {
      image: review3,
      name: "isabulla Oliver",
      title: "Team Leader",
      review:
        "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been .",
    },
  ];
  const settings = {
    dots: false, // No dots for the carousel
    infinite: true,
    speed: 500, // Transition speed (in milliseconds)
    slidesToShow: 1, // Show 4 cards at a time
    slidesToScroll: 1, // Scroll 1 card at a time
    autoplay: true,
    autoplaySpeed: 3000, // Auto slide every 3 minutes (in milliseconds)
    arrows: false, // No arrows
    pauseOnHover: false,
  };
  return (
    <div className="">
      {/* Here is the Carusal */}
      <div className="container mx-36 mt-8">
        <Slider {...settings}>
          {cardData.map((card, index) => (
            <div key={index} className="p-4">
              <div
                className={`shadow-md w-full rounded-lg p-6 flex justify-center items-center gap-5`}
              >
                <div>
                  <img
                    src={card.image}
                    alt={card.name}
                    className="size-56 object-cover rounded-md mb-4"
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
  );
};

export default Tricky2;
