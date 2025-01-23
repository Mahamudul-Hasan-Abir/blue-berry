import { FaRegEye, FaStar } from "react-icons/fa";
import Container from "../../Layouts/Container/Container";
import ProductReview from "../../components/ProductReview/ProductReview";
import { useGetProductDetailsQuery } from "../../redux/api/productDetailsApi";
import { useNavigate, useParams } from "react-router-dom";
import { useAddProductToCartMutation } from "../../redux/api/cartApi";
import { useState } from "react";
import { toast } from "sonner";
const ProductDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const { data } = useGetProductDetailsQuery(id!);

  const [addProductToCart, { isLoading: isAdding }] =
    useAddProductToCartMutation();
  const product = data?.data;
  const reviews = data?.data.reviews;

  const [number, setNumber] = useState(1);

  const handleIncrease = () => setNumber((prev) => prev + 1);
  const handleDecrease = () => setNumber((prev) => (prev > 1 ? prev - 1 : 1));

  const handleReviewNavigate = () => {
    navigate(`/add-review/${product?._id}`);
  };
  const handleAddToCart = async () => {
    try {
      if (!id) {
        toast("Product Id is Missing");
        return;
      }
      const response = await addProductToCart({
        productId: id,
        number: number,
      }).unwrap();
      console.log("Product added to cart successfully", response);
      toast("Product added to cart successfully");
    } catch (error) {
      console.error("Failed to add product to cart", error);
    }
  };

  return (
    <Container>
      <div>
        {/* Product Image */}
        <div className="grid grid-cols-1 md:grid-cols-2 ">
          <div className="m-3 border-[1px] rounded-2xl">
            <img src={product?.image} className="rounded-2xl" alt="" />
          </div>
          <div className="md:mt-5">
            {/* Product details part */}
            <div>
              <div>
                <h1 className="text-2xl font-bold ms-3">{product?.name}</h1>
              </div>
              <div className="flex gap-2 ms-3 my-5">
                <div className="flex gap-1 mt-1">
                  <FaStar className="text-primary " />
                  <FaStar className="text-primary " />
                  <FaStar className="text-primary " />
                  <FaStar className="text-primary " />
                  <FaStar className="text-primary " />
                </div>
                <p>|</p>
                <div>
                  <p className="text-primary"></p>
                </div>
              </div>
              <div className="ms-3 my-5">
                <p>{product?.description}</p>
              </div>
              <div>
                <h1 className="text-2xl font-bold ms-3">{product?.price}$</h1>
              </div>
            </div>
            {/* Product weights */}
            <div>
              {/* Quantity */}
              <div className="flex gap-2 ms-3 my-2">
                {Array.isArray(product?.quantity) &&
                product.quantity.length > 0 ? (
                  product.quantity.map((q: string, index: number) => (
                    <button
                      key={index}
                      className="hover:bg-primary bg-white border-[1px] text-gray-500 hover:text-white px-3 py-2 rounded-lg"
                    >
                      {q}
                    </button>
                  ))
                ) : (
                  <p className="text-gray-500">No weight options available</p>
                )}
              </div>
              <div className="flex gap-1 my-5 ms-3">
                <div className="border-[1px] p-1 flex gap-4 rounded-xl text-gray-400">
                  <p className="mt-[4px]" onClick={handleIncrease}>
                    +
                  </p>
                  <p className="mt-[4px]" onClick={handleDecrease}>
                    {number}
                  </p>
                  <p className="mt-[4px]">-</p>
                </div>

                <div>
                  <button
                    onClick={handleAddToCart}
                    disabled={isAdding}
                    className="bg-primary px-5 py-2 text-white rounded-xl"
                  >
                    Add To Cart
                  </button>
                </div>
                <button
                  onClick={handleReviewNavigate}
                  disabled={isAdding}
                  className="bg-primary px-5 py-2 text-white rounded-xl"
                >
                  Give Review
                </button>
                <div className="border-[1px] p-1 px-3 flex justify-center items-center rounded-lg">
                  <FaRegEye className="text-gray-400" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          {/* Reviews */}
          <h1 className="text-primary text-2xl font-bold text-center">
            Reviews
          </h1>
          <div className="border-[1px] rounded-2xl m-5">
            <ProductReview reviews={reviews}></ProductReview>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ProductDetails;
