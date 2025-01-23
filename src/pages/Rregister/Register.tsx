import { useForm, SubmitHandler } from "react-hook-form";
import { UserInfo } from "../../Types/randomTypes";
import Input from "../../components/Input/Input";
import Navigator from "../../components/Navigator/Navigator";
import Container from "../../Layouts/Container/Container";
import ImageUpload from "../../components/ImageUpload/ImageUpload";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<UserInfo>();

  const onSubmit: SubmitHandler<UserInfo> = async (data) => {
    const formData = new FormData();

    // Append all form fields, including file
    Object.entries(data).forEach(([key, value]) => {
      if (key === "profileImage" && value instanceof File) {
        formData.append(key, value); // Handle image file upload
      } else {
        formData.append(key, value as string);
      }
    });

    try {
      const response = await axios.post(
        "https://blue-berry-server.vercel.app/api/auth/register",
        formData
      );
      reset(); // Reset form fields
      console.log("User registered:", response.data);
      navigate("/login"); // Navigate to login page after successful registration
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error("Registration failed:", error.response?.data);
      } else {
        console.error("Unexpected error:", error);
      }
    }
  };

  return (
    <div>
      <Navigator pageName="Register Page" page="Register" />
      <Container>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="border-[1px] mt-20 border-[#eee] rounded-2xl"
        >
          <div className="text-center mt-10">
            <h1 className="text-[25px] font-bold">Register</h1>
            <p className="text-[14px] mt-2">
              Best place to buy and sell digital products
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mx-10">
            <Input
              register={register}
              placeholder="Enter your first name"
              type="text"
              label="First Name"
              req={true}
              layout="col-span-2 lg:col-span-1"
              name="firstName"
            />
            <Input
              register={register}
              placeholder="Enter your last name"
              type="text"
              label="Last Name"
              req={true}
              layout="col-span-2 lg:col-span-1"
              name="lastName"
            />
            <Input
              register={register}
              placeholder="Enter your email"
              type="email"
              label="Email"
              req={true}
              layout="col-span-2 lg:col-span-1"
              name="email"
            />
            <Input
              register={register}
              placeholder="Enter your password"
              type="password"
              label="Password"
              req={true}
              layout="col-span-2 lg:col-span-1"
              name="password"
            />
            <Input
              register={register}
              placeholder="Enter your present address"
              type="text"
              label="Address"
              req={true}
              layout="col-span-2 lg:col-span-1"
              name="address"
            />
            <Input
              register={register}
              placeholder="Enter your phone number"
              type="text"
              label="Phone Number"
              req={true}
              layout="col-span-2 lg:col-span-1"
              name="phone"
            />

            <div className="col-span-2 lg:col-span-1">
              <label className="block text-[14px] font-poppins font-medium">
                Role
              </label>
              <div className="flex mt-2">
                <label className="mr-4">
                  <input
                    {...register("role", { required: "Role is required" })}
                    type="radio"
                    value="user"
                    className="mr-2"
                  />
                  User
                </label>
                <label>
                  <input
                    {...register("role", { required: "Role is required" })}
                    type="radio"
                    value="admin"
                    className="mr-2"
                  />
                  Admin
                </label>
              </div>
              {errors.role && (
                <p className="text-red-500 text-sm">{errors.role.message}</p>
              )}
            </div>

            <div className="col-span-2 lg:col-span-1">
              <ImageUpload
                name="profileImage"
                register={register}
                setValue={setValue}
              />
              {errors.profileImage && (
                <p className="text-red-500 text-sm">
                  {errors.profileImage.message || "Invalid image upload"}
                </p>
              )}
            </div>
          </div>
          <div className="my-10 flex justify-center items-center">
            <button
              type="submit"
              className="px-3 bg-primary text-white text-l font-semibold rounded-lg py-2"
            >
              Register
            </button>
          </div>
        </form>
      </Container>
    </div>
  );
};

export default Register;
