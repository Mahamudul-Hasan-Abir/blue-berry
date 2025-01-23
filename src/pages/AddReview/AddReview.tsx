import { useState } from "react";
import Container from "../../Layouts/Container/Container";
import { useGetProductDetailsQuery } from "../../redux/api/productDetailsApi";
import { useParams } from "react-router-dom";
import { useAddReviewToProductMutation } from "../../redux/api/reviewApi";

const AddReview = () => {
  const { id } = useParams();
  const [rating, setRating] = useState(0); // Current rating
  const [hover, setHover] = useState(0);
  const [comment, setComment] = useState("");
  const { data } = useGetProductDetailsQuery(id!);
  const [addReviewToProduct] = useAddReviewToProductMutation();
  const handleAddReview = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await addReviewToProduct({
        productId: id,
        review: { rating, comment },
      }).unwrap();
      alert("reviw submitted successfully");
      setRating(0);
      setComment("");
    } catch (error) {
      console.error("Error Sibmitting Review", error);
    }
  };
  return (
    <Container>
      <div className="flex flex-col justify-center">
        <img
          src={data?.data.image}
          className="rounded-2xl md:w-[40%] md:flex md:mx-auto h-96 mx-10 mt-10 mb-2"
          alt=""
        />
        <h1 className="mx-auto text-xl font-semibold">{data?.data.name}</h1>
      </div>
      <div>
        <form onSubmit={handleAddReview}>
          <div className="flex gap-4 mt-5 ms-10 justify-center">
            <p className="text-lg ">Ratting:</p>
            <div className="flex space-x-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  className={`text-2xl focus:outline-none ${
                    (hover || rating) >= star ? "text-primary" : "text-gray-300"
                  }`}
                  onClick={() => setRating(star)}
                  onMouseEnter={() => setHover(star)}
                  onMouseLeave={() => setHover(0)}
                >
                  ★
                </button>
              ))}
            </div>
          </div>
          <div>
            <textarea
              onChange={(e) => setComment(e.target.value)}
              name="comment"
              className="border-[1px] md:w-[95%] border-gray-300 rounded-lg w-80 h-36 mx-10 mt-5"
            ></textarea>
          </div>
          <button className="bg-primary md:flex md:mx-auto text-xl text-white px-10 py-3 rounded-xl mx-10 mt-5">
            Submit
          </button>
        </form>
      </div>
    </Container>
  );
};

export default AddReview;
