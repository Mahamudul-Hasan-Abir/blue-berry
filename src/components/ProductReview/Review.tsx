interface ReviewProps {
  userId: string;
  rating: number;
  comment: string;
  _id: string;
}
const Review: React.FC<ReviewProps> = (review) => {
  const { userId, rating, comment } = review;
  const stars = Array.from({ length: 5 }, (_, index) => (
    <span key={index}>
      {index < rating ? "★" : "☆"}{" "}
      {/* Filled star for rating or empty for remaining */}
    </span>
  ));

  return (
    <div className="p-4 border rounded shadow-md mb-4">
      <p className="text-sm text-gray-500">User ID: {userId}</p>
      <div className="text-primary text-lg">{stars}</div>
      <p className="text-gray-700 mt-2">{comment}</p>
    </div>
  );
};

export default Review;
