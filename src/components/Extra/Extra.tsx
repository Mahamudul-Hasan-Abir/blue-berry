import { useEffect, useRef, useState } from "react";
import Container from "../../Layouts/Container/Container";
import OutlineButton from "../Buttons/OutlineButton/OutlineButton";
import { motion, useScroll, useTransform } from "framer-motion";

const Extra = () => {
  const [isMobile, setIsMobile] = useState(false);

  const componentRef1 = useRef<HTMLDivElement>(null); // Ref for the first card
  const componentRef2 = useRef<HTMLDivElement>(null); // Ref for the second card

  const { scrollYProgress: scrollYProgress1 } = useScroll({
    target: componentRef1,
    offset: ["0 1", "1 1"],
  });

  const { scrollYProgress: scrollYProgress2 } = useScroll({
    target: componentRef2,
    offset: ["0 1", "1 1"],
  });

  const xValuesLeft = useTransform(scrollYProgress1, [0, 1], [-50, 0]); // From left
  const xValuesRight = useTransform(scrollYProgress2, [0, 1], [50, 0]); // From right

  // Check if the screen size is mobile
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust breakpoint as needed
    };

    checkIsMobile(); // Initial check
    window.addEventListener("resize", checkIsMobile); // Listen for resize events

    return () => {
      window.removeEventListener("resize", checkIsMobile); // Clean up listener
    };
  }, []);

  return (
    <Container>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-20">
        {/* First Card - From Left */}
        <motion.div
          style={!isMobile ? { x: xValuesLeft } : undefined} // Disable animation on mobile
          ref={componentRef1}
          className="bg-[#f4dab4] h-[310px] w-full rounded-3xl col-span-1 flex justify-evenly"
        >
          <div className="flex justify-center items-center">
            <img
              src="https://res.cloudinary.com/dnfqhy8di/image/upload/v1736068647/two_d3pj9b.png"
              className="w-[280px]"
              alt=""
            />
          </div>
          <div className="items-center my-auto">
            <h1 className="text-[31px] font-bold ">Tasty Snack & Fast food</h1>
            <p className="text-[16px] text-[#686e7d] py-5 ">
              The flavour of something special
            </p>
            <OutlineButton></OutlineButton>
          </div>
        </motion.div>

        {/* Second Card - From Right */}
        <motion.div
          style={!isMobile ? { x: xValuesRight } : undefined} // Disable animation on mobile
          ref={componentRef2}
          className="bg-[#ffc6ce] h-[310px] w-full rounded-3xl col-span-1 flex justify-evenly"
        >
          <div className="flex justify-center items-center">
            <img
              src="https://res.cloudinary.com/dnfqhy8di/image/upload/v1736068652/one_eooxzs.png"
              className="w-[280px]"
              alt=""
            />
          </div>
          <div className="items-center my-auto">
            <h1 className="text-[31px] font-bold ">
              Fresh Fruits & Vegetables
            </h1>
            <p className="text-[16px] text-[#686e7d] py-5 ">
              A healthy meal for every one
            </p>
            <OutlineButton></OutlineButton>
          </div>
        </motion.div>
      </div>
    </Container>
  );
};

export default Extra;
