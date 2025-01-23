import { useForm } from "react-hook-form";
import ContactInput from "../../components/ContactInput/ContactInput";

import Navigator from "../../components/Navigator/Navigator";
import Container from "../../Layouts/Container/Container";
import { toast } from "sonner";

const ContactUs = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = () => {
    toast("Form Data");
  };

  return (
    <div>
      <Navigator page="Contact Us" pageName="Contact Us Page"></Navigator>

      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <form
            className="border-[1px] mt-20 border-[#eee] rounded-2xl mx-5"
            onSubmit={handleSubmit(onSubmit)}
          >
            {/* Header */}
            <div className="text-center mt-10">
              <h1 className="text-[25px] font-bold">
                Get In <span className="text-primary">Touch</span>
              </h1>
              <p className="text-[14px] my-2 mx-2">
                Please select a topic below related to your inquiry. If you
                don't find what you need, fill out our contact form.
              </p>
            </div>
            {/* Form inputs */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mx-10 mt-10">
              <ContactInput
                register={register}
                name="firstName"
                type="text"
                label="First Name"
                placeholder="Enter your first name"
                required={true}
                className="col-span-2 md:col-span-1"
              />
              <ContactInput
                register={register}
                name="lastName"
                type="text"
                label="Last Name"
                placeholder="Enter your last name"
                required={true}
                className="col-span-2 md:col-span-1"
              />
              <ContactInput
                register={register}
                name="email"
                type="email"
                label="Email"
                placeholder="Enter your email"
                required={true}
                className="col-span-2 md:col-span-1"
              />
              <ContactInput
                register={register}
                name="phoneNumber"
                type="text"
                label="Phone Number"
                placeholder="Enter your phone number"
                required={true}
                className="col-span-2 md:col-span-1"
              />

              <div className="col-span-2">
                <label className="block text-[14px] font-medium">
                  Leave Your Message
                </label>
                <textarea
                  className={`p-3 h-36 md:h-48 col-span-1 w-full text-sm rounded-lg mt-2 ring-0 border-[1px] outline-none font-normal text-[#686e7d] border-[#eee] leading-6 resize-none  `}
                  // Allow external onChange if needed
                />
              </div>
            </div>
            <div className="my-10 flex justify-center items-center">
              <button
                type="submit"
                className="px-3 bg-primary text-white text-l font-semibold rounded-lg py-2 "
              >
                Submit
              </button>
            </div>
          </form>
          <div className="border-[1px] mt-20 border-[#eee] rounded-2xl mx-5 flex justify-center items-center">
            <div className="flex justify-center items-center">
              <img
                src="https://res.cloudinary.com/dnfqhy8di/image/upload/v1736070954/map_x0dxgf.png"
                alt="Map"
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ContactUs;
