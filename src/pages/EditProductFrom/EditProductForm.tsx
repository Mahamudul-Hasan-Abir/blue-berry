import { toast } from "sonner";
import Upload from "../../components/Upload/Upload";
import { useForm } from "react-hook-form";

const EditProductForm = () => {
  const { register } = useForm();
  const handleFileChange = () => {
    toast("data");
  };
  return (
    <form className="border-[1px] mt-20 border-[#eee] rounded-2xl">
      {/* Header */}
      <div className="text-center my-10">
        <h1 className="text-[25px] font-bold">Add Product</h1>
      </div>
      {/* Form inputs */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mx-10">
        <div className="col-span-2 lg:col-span-1">
          {/* Radio Buttons for Category */}
          <div>
            <label className="block text-[14px] font-poppins font-medium">
              Category
            </label>
            <div className="grid grid-cols-3 h-full lg:h-56 mt-2 border-[1px] p-5 rounded-lg border-[#eee]">
              <label className="mr-4">
                <input
                  {...register("category", {
                    required: "Category is required",
                  })}
                  type="radio"
                  value="Vegetables"
                  className="mr-2"
                />
                Vegetables
              </label>
              <label className="mr-4">
                <input
                  {...register("category", {
                    required: "Category is required",
                  })}
                  type="radio"
                  value="Fruits"
                  className="mr-2"
                />
                Fruits
              </label>
              <label className="mr-4">
                <input
                  {...register("category", {
                    required: "Category is required",
                  })}
                  type="radio"
                  value="Dairy Products"
                  className="mr-2"
                />
                Dairy Products
              </label>
              <label className="mr-4">
                <input
                  {...register("category", {
                    required: "Category is required",
                  })}
                  type="radio"
                  value="Beverages"
                  className="mr-2"
                />
                Beverages
              </label>
              <label className="mr-4">
                <input
                  {...register("category", {
                    required: "Category is required",
                  })}
                  type="radio"
                  value="Bakery & Confectionery"
                  className="mr-2"
                />
                Bakery & Confectionery
              </label>
              <label className="mr-4">
                <input
                  {...register("category", {
                    required: "Category is required",
                  })}
                  type="radio"
                  value="Meat & Poultry"
                  className="mr-2"
                />
                Meat & Poultry
              </label>
              <label className="mr-4">
                <input
                  {...register("category", {
                    required: "Category is required",
                  })}
                  type="radio"
                  value="Seafood"
                  className="mr-2"
                />
                Seafood
              </label>
              <label className="mr-4">
                <input
                  {...register("category", {
                    required: "Category is required",
                  })}
                  type="radio"
                  value="Grains & Pulses"
                  className="mr-2"
                />
                Grains & Pulses
              </label>
              <label className="mr-4">
                <input
                  {...register("category", {
                    required: "Category is required",
                  })}
                  type="radio"
                  value="Snacks & Sweets"
                  className="mr-2"
                />
                Snacks & Sweets
              </label>
              <label className="mr-4">
                <input
                  {...register("category", {
                    required: "Category is required",
                  })}
                  type="radio"
                  value="Spices & Condiments"
                  className="mr-2"
                />
                Spices & Condiments
              </label>
            </div>
          </div>
        </div>

        <Upload onChange={handleFileChange}></Upload>
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

export default EditProductForm;
