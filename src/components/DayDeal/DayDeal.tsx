import { FaStar } from "react-icons/fa";
import Container from "../../Layouts/Container/Container";
import { motion, useScroll, useTransform } from "motion/react";

import { SlStar } from "react-icons/sl";
import { useRef } from "react";

const cardData = [
  {
    _id: 1,
    image:
      "https://res.cloudinary.com/dnfqhy8di/image/upload/v1736068446/p1_mfqrd4.jpg",
    category: "Chocos",
    ratting: "4",
    name: "Mixed Fruits Chocolates Pack",
    price: "25",
    quantity: "20",
  },
  {
    _id: 2,
    image:
      "https://res.cloudinary.com/dnfqhy8di/image/upload/v1736068457/p2_ql9vk1.jpg",
    category: "juice",
    ratting: "4",
    name: "Organic Apple juice Pack",
    price: "25",
    quantity: "20",
  },
  {
    _id: 3,
    image:
      "https://res.cloudinary.com/dnfqhy8di/image/upload/v1736068458/p4_vpndgq.jpg",
    category: "Chocos",
    ratting: "4",
    name: "Mixed Almond nuts juice pack",
    price: "25",
    quantity: "20",
  },
  {
    _id: 4,
    image:
      "https://res.cloudinary.com/dnfqhy8di/image/upload/v1736068458/p3_gwysqz.jpg",
    category: "Chocos",
    ratting: "4",
    name: "Fresh Mango Slice Juice",
    price: "25",
    quantity: "20",
  },
];

const DayDeal = () => {
  const componentRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: componentRef,
    offset: ["0 1", "1 1"],
  });

  // Check if the device is mobile
  const isMobile = window.matchMedia("(max-width: 768px)").matches;

  const opacityValues = useTransform(
    scrollYProgress,
    [0, 1],
    isMobile ? [1, 1] : [0.1, 1]
  );

  const scaleValues = useTransform(
    scrollYProgress,
    [0, 1],
    isMobile ? [1, 1] : [0.8, 1]
  );
  const scaleProductValues = useTransform(
    scrollYProgress,
    [0, 1],
    isMobile ? [1, 1] : [0.5, 1]
  );

  return (
    <Container>
      <motion.div className="m-5 lg:mt-[-200px]">
        <motion.div style={{ scale: scaleValues }} ref={componentRef}>
          <h1 className="text-3xl">
            Deal Of The <span className="text-primary font-bold">Day</span>
          </h1>
          <p className="my-3">Don't wait. The time will never be just right.</p>
        </motion.div>
        {/* Cart */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {cardData.map((data) => (
            <motion.div
              ref={componentRef}
              style={{
                opacity: opacityValues,
                scale: scaleProductValues,
              }}
              key={data._id}
              className=" h-[421px] w-full border-[1px] rounded-[25px]"
            >
              <div className="border-b-[1px]">
                <img
                  src={data.image}
                  className="h-[304px] w-full overflow-hidden rounded-t-[24px]"
                  alt=""
                />
              </div>
              <div>
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
            </motion.div>
          ))}
        </div>
      </motion.div>
    </Container>
  );
};

export default DayDeal;
