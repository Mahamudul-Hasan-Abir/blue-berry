import Navigator from "../../components/Navigator/Navigator";

import Container from "../../Layouts/Container/Container";
import Demo from "../../components/Demo/Demo";
import TeamCarusal from "../../components/TeamCarusal/TeamCarusal";
const AboutUs = () => {
  return (
    <div className="mx-3">
      <Navigator pageName="About Us Page" page="About Us"></Navigator>
      <Container>
        <div>
          <div className="md:grid lg:grid-cols-2">
            {/* Image Part */}
            <div className="flex justify-center items-center mt-10 mx-3">
              <img
                src="https://res.cloudinary.com/dnfqhy8di/image/upload/v1736070562/aboutus_nwzl15.png"
                alt=""
              />
            </div>
            {/* Text part */}
            <div>
              <div className="mt-10">
                <h1 className="text-2xl font-bold text-center mb-2">
                  About The <span className="text-primary">Blue Berry</span>
                </h1>
                <p className="text-xl font-bold text-center">
                  Farm-fresh Goodness,just a click Away.
                </p>
                <p className="mt-2">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Reprehenderit, rem! Et obcaecati rem nulla, aut assumenda unde
                  minima earum distinctio porro excepturi veritatis officiis
                  dolorem quod. sapiente amet rerum beatae dignissimos aperiam
                  id quae quia velit. Ab optio doloribus hic quas sit corporis
                  numquam. <br /> <br />
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Reprehenderit, rem! Et obcaecati rem nulla, aut assumenda unde
                  minima earum distinctio porro excepturi veritatis officiis
                  dolorem quod. sapiente amet rerum beatae dignissimos aperiam
                  id quae quia velit. Ab optio doloribus hic quas sit corporis
                  numquam
                </p>
              </div>

              {/* Show off Section */}
              <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-[#f8f8fb] text-center p-5 rounded-2xl border-[1px]">
                  <p className="text-4xl font-bold ">200k+</p>
                  <p className="text-lighttext">vendors</p>
                </div>
                <div className="bg-[#f8f8fb] text-center p-5 rounded-2xl border-[1px]">
                  <p className="text-4xl font-bold ">654k+</p>
                  <p className="text-lighttext">Sales</p>
                </div>
                <div className="bg-[#f8f8fb] text-center p-5 rounded-2xl border-[1px]">
                  <p className="text-4xl font-bold ">587k+</p>
                  <p className="text-lighttext">Customers</p>
                </div>
              </div>
            </div>
          </div>

          {/* Our Services */}

          <div>
            {/* Header */}
            <div className="mt-10">
              <h1 className="text-2xl font-bold text-center mb-2">
                Our <span className="text-primary">Service</span>
              </h1>
              <p className="text-lighttext text-center">
                Customer service should not be a department.It Should be the
                entire company.
              </p>
            </div>
          </div>

          {/* Demo */}
          <div className="mt-10">
            <Demo></Demo>
          </div>

          {/* Our Team */}

          <div className="mt-20">
            <div>
              <h1 className="text-2xl text-center font-bold">
                Our <span className="text-primary">Team</span>
              </h1>
              <p className="text-center">Meet out expert team members</p>
            </div>
            <TeamCarusal></TeamCarusal>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AboutUs;
