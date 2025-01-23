import axios from "axios";
import Checkbox from "../../components/Checkbox/Checkbox";
import ImageUpload from "../../components/ImageUpload/ImageUpload";
import Input from "../../components/Input/Input";
import TextArea from "../../components/TextArea/TextArea";

import { SubmitHandler, useForm } from "react-hook-form";
import { useAppSelector } from "../../redux/hook";
import { useCurrentToken } from "../../redux/features/authSlice";
import { toast } from "sonner";

export type TProductData = {
  name: string;
  price: number;
  description: string;
  quantity: number;
  category: string;
  image?: File;
};

const AddProduct = () => {
  const token = useAppSelector(useCurrentToken);
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<TProductData>();

  const onSubmit: SubmitHandler<TProductData> = async (data) => {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("price", data.price.toString());
    formData.append("description", data.description);
    formData.append("quantity", data.quantity.toString());
    formData.append("category", data.category);

    if (data.image) {
      formData.append("image", data.image);
    }

    try {
      const response = await axios.post(
        "https://blue-berry-server.vercel.app/api/product",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      toast.success("Product added successfully");
      console.log("Product added successfully:", response.data);
      reset();
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        // Handle Axios-specific error
        console.error(
          "Error adding product:",
          error.response?.data || error.message
        );
        toast.error(
          error.response?.data?.message || "Couldn't add the product"
        );
      } else {
        // Handle generic error
        console.error("Unexpected error:", error);
        toast.error("An unexpected error occurred.");
      }
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="border-[1px] mt-20 border-[#eee] rounded-2xl"
    >
      {/* Header */}
      <div className="text-center my-10">
        <h1 className="text-[25px] font-bold">Add Product</h1>
      </div>
      {/* Form inputs */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mx-10">
        <Input
          placeholder="Enter product name"
          type="text"
          label="Product Name"
          req={true}
          layout="col-span-2 lg:col-span-1"
          name="name"
          register={register}
        ></Input>
        <Input
          placeholder="Enter products price"
          type="number"
          label="Product Price"
          req={true}
          layout="col-span-2 lg:col-span-1"
          name="price"
          register={register}
        ></Input>
        <TextArea
          layout="col-span-2 lg:col-span-1"
          label="Description"
          placeholder="Write details of the product"
          req={true}
          className="h-56"
          name="description"
          register={register}
        ></TextArea>
        <Checkbox name="quantity" register={register}></Checkbox>

        {/* </div> */}
        <div className="col-span-2 lg:col-span-1">
          {/* Radio Buttons for Category */}
          <div>
            <label className="block text-[14px] font-poppins font-medium">
              Category
            </label>
            <div className="grid grid-cols-3 h-full lg:h-56 mt-2 border-[1px] p-5 rounded-lg border-[#eee]">
              {[
                "Vegetables",
                "Fruits",
                "Dairy Products",
                "Beverages",
                "Bakery & Confectionery",
                "Meat & Poultry",
                "Seafood",
                "Grains & Pulses",
                "Snacks & Sweets",
                "Spices & Condiments",
              ].map((category) => (
                <label key={category} className="mr-4">
                  <input
                    {...register("category", {
                      required: "Category is required",
                    })}
                    type="radio"
                    value={category}
                    className="mr-2"
                  />
                  {category}
                </label>
              ))}
            </div>
          </div>
        </div>
        <ImageUpload
          name="image"
          register={register}
          setValue={setValue}
        ></ImageUpload>
        {errors.price && (
          <p className="text-red-500 text-sm">{errors.price.message}</p>
        )}
        {/* Other fields with similar validation */}
      </div>
      <div className="my-10 flex justify-center items-center">
        <button
          type="submit"
          className="px-3 bg-primary text-white text-l font-semibold rounded-lg py-2 "
        >
          Register
        </button>
      </div>
    </form>
  );
};

export default AddProduct;
