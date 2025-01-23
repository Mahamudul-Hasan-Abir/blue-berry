import { FaStar } from "react-icons/fa";
import Slider from "react-slick";

type Review = {
  _id: string;
  user: string;
  rating: number;
  comment: string;
};

const ProductReview = ({ reviews }: { reviews: Review[] }) => {
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
    <div className="m-5">
      <div>
        <Slider {...settings}>
          {reviews?.map((review) => (
            <div key={review._id}>
              <div className="mt-3">
                <div className="flex gap-1 mt-3">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <FaStar
                      key={index}
                      className={
                        index < review.rating ? "text-primary" : "text-gray-300"
                      }
                    />
                  ))}
                </div>
              </div>
              <div className="mt-3">
                <p>{review.comment}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ProductReview;
