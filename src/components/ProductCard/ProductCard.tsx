import { FaStar } from "react-icons/fa";
import { SlStar } from "react-icons/sl";
import { useNavigate } from "react-router-dom";
import { Review } from "../../Types/randomTypes";

export interface TCard {
  _id: string;
  image: string;
  name: string;
  description?: string;
  price: string;
  quantity: string[];
  category: string;
  review?: Review[];
  rating?: number;
}

const ProductCard = ({ data }: { data: TCard }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/product/${data?._id}`);
  };
  return (
    <div
      onClick={handleCardClick}
      className=" h-[421px] w-full border-[1px] rounded-[25px]"
    >
      <div className=" border-b-[1px] ">
        <img
          src={data.image}
          className="h-[304px] w-full overflow-hidden rounded-t-[24px]"
          alt=""
        />
      </div>
      <div className="">
        <div className="flex justify-between m-5">
          <p className="text-[13px]">{data.category}</p>
          <div className="flex justify-between">
            <FaStar className="text-primary"></FaStar>
            <FaStar className="text-primary"></FaStar>
            <FaStar className="text-primary"></FaStar>
            <FaStar className="text-primary"></FaStar>
            <SlStar></SlStar>
          </div>
        </div>
        <div className="mx-5">
          <h1 className="text-[15px] font-semibold">{data.name}</h1>
        </div>
        <div className="flex justify-between mx-5">
          <p className="font-bold text-[16px]">${data.price}</p>
          <p className="text-[14px]">{data.quantity}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
