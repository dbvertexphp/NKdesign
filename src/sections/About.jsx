import { motion } from "framer-motion";
import { slideUpVariants, zoomInVariants } from "./animation";

const About = () => {
  return (
    <div
      className="lg:w-[80%] about-container w-[90%] py-[60px] flex lg:flex-row flex-col justify-between items-center gap-[50px] mt-[60px] mb-[60px]"
      id="about"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={slideUpVariants}
        className="lg:w-[60%] w-full flex flex-col justify-center items-start gap-6"
      >
        <motion.h1 variants={slideUpVariants} className="text-red-500 text-2xl">
          WELCOME TO
        </motion.h1>

        <motion.h1 variants={slideUpVariants} className="text-white uppercase text-[40px] font-bold">
          NK Design Interior website
        </motion.h1>
        <div className="w-[120px] h-[6px] bg-red-500"></div>
        <p className="text-3xl italic text-gray-50 mt-[60px]">
          Welcome to Nkdesign, the renowned destination for customized Building design and construction solutions.
        </p>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={slideUpVariants}
        className="lg:w-[40%] w-full flex flex-col justify-center items-start gap-6"
      >
        <p className="text-white text-lg text-justify">
          We’re experts in Design And Construction both Building indoor and outdoor Landscape areas, making sure every space
          not only looks stunning but also works perfectly for you. Whether you’re dreaming of a luxurious home or an efficient
          office space, our team of experienced professionals will bring your vision to life. Our team delivers personalized
          design solutions, stylish home, villa spacious bedrooms, and lively living areas—all designed to enhance your daily
          living.
          <br />
          <br />
          Contact us today for an Interior design and Building construction that goes beyond aesthetics, ensuring your space
          not just beautiful but feels right too.
        </p>
        <motion.button
          variants={zoomInVariants}
          className="bg-red-500 hover:bg-white hover:text-black px-6 py-3 rounded-xl text-white font-bold transition-all shadow-md w-[200px] h-[55px] flex items-center justify-center whitespace-nowrap"
        >
          READ MORE
        </motion.button>
      </motion.div>
    </div>
  );
};

export default About;
