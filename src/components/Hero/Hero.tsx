import { Link } from "react-router-dom";
import { motion } from "motion/react";
const intro = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 3,
      staggerChildren: 1,
    },
  },
};
const introChildren = {
  hidden: { opacity: 0, y: -200 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};
const bird = {
  initial: { y: 0 },
  animate: {
    y: 10,
    transition: {
      y: {
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
      },
    },
  },
};
const Hero = () => {
  return (
    <div className=" bg-gray-100  grid grid-cols-1 md:grid-cols-2 ">
      {/* Left Text Section */}
      <motion.div
        variants={intro}
        initial="hidden"
        animate="visible"
        className="flex justify-center text-center md:text-start items-center  md:col-span-1 col-span-1"
      >
        <div className="flex gap-10 items-center md:items-start flex-col  ">
          <motion.p
            variants={introChildren}
            className="md:text-4xl text-3xl font-normal text-gray-400"
          >
            Flat 30% Off
          </motion.p>
          <motion.h1
            variants={introChildren}
            className="text-5xl text-secondary md:text-7xl"
          >
            Explore <span className="text-primary">healthy</span>
            <br /> & Fresh Fruits
          </motion.h1>
          <Link to="/products">
            <motion.button
              variants={introChildren}
              className="px-6 py-4 w-36 text-[#3d4750] rounded-lg font-semibold border-[#3d4750] border-[1px]"
            >
              Shop Now
            </motion.button>
          </Link>
        </div>
      </motion.div>
      {/* Right Image Section */}
      <div className="md:col-span-1 col-span-1">
        <motion.img
          variants={bird}
          initial="initial"
          animate="animate"
          src="https://res.cloudinary.com/dnfqhy8di/image/upload/v1736342063/hero-1_isrggd.png"
          className="md:mt-10"
          alt=""
        />
      </div>
    </div>
  );
};

export default Hero;
