import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { slideUpVariants, zoomInVariants } from "./animation";
import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL;

const Hero = () => {
  const [heroImage, setHeroImage] = useState(null);
  const [backgroundImage, setBackgroundImage] = useState(null);
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    axios
      .get(`${BASE_URL}/api/get/hero`)
      .then((response) => {
        setHeroImage(response.data.image.filepath);
      })
      .catch((error) => {
        console.error("Error fetching hero image:", error);
      });

    axios
      .get(`${BASE_URL}/api/get/background`)
      .then((response) => {
        setBackgroundImage(response.data.image.filepath);
      })
      .catch((error) => {
        console.error("Error fetching background image:", error);
      });
  }, []);

  const handleReachUs = () => {
    window.location.href = "https://www.google.com/maps/dir/...";
  };

  return (
    <div
      id="hero"
      className="bg-black w-full lg:h-[700px] h-fit mx-auto pt-[60px] lg:pt-[0px] lg:px-[150px] px-[20px] lg:px-[30px] flex justify-between items-center lg:flex-row flex-col lg:gap-5 gap-[50px] bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={slideUpVariants}
        className="lg:w-[60%] w-full flex flex-col justify-center items-start lg:gap-8 gap-4"
        style={{ padding: "30px" }}
      >
        <motion.h1 variants={slideUpVariants} className="text-red-500 text-2xl">
          WE ARE BUILDERS
        </motion.h1>
        <motion.h1
          variants={slideUpVariants}
          className="text-white uppercase text-[50px] font-bold"
        >
          we will build your dream
        </motion.h1>
        <div className="w-[120px] h-[6px] bg-red-500"></div>
        <p className="text-white text-[20px]">
          Interior: simply means the inside part of something, like the inside
          of a building, including the walls, floors, furniture, lighting, and
          decor.
        </p>
        {showMore && (
          <p className="text-white text-[20px]">
            Interior design and construction are two integral aspects of
            creating functional and aesthetically pleasing spaces. While
            construction focuses on the structural integrity and durability of a
            building.
          </p>
        )}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={zoomInVariants}
          className="flex flex-wrap justify-center items-center gap-5 md:flex-nowrap"
        >
          <motion.button
            onClick={() => setShowMore(!showMore)}
            variants={zoomInVariants}
            whileHover={{ scale: 1.05 }}
            className="bg-red-500 hover:bg-white hover:text-black px-6 py-3 rounded-xl text-white font-bold transition-all shadow-md w-full md:w-[200px] h-[55px] flex items-center justify-center whitespace-nowrap"
          >
            {showMore ? "SHOW LESS" : "READ MORE"}
          </motion.button>
          <motion.button
            onClick={handleReachUs}
            variants={zoomInVariants}
            whileHover={{ scale: 1.05 }}
            className="border-white hover:border-red-500 hover:text-red-500 border-2 px-6 py-3 rounded-xl text-white font-bold transition-all w-full md:w-[200px] h-[55px] flex items-center justify-center whitespace-nowrap"
          >
            REACH US
          </motion.button>
        </motion.div>
      </motion.div>
      <div
        className="lg:w-[40%] w-full flex justify-center lg:justify-end items-center"
        style={{ padding: "0 30px" }}
      >
        {heroImage && (
          <motion.img
            initial="hidden"
            whileInView="visible"
            variants={zoomInVariants}
            src={heroImage}
            alt="hero image"
            className="lg:h-[600px] h-[300px] lg:mb-[-100px]"
          />
        )}
      </div>
    </div>
  );
};

export default Hero;
