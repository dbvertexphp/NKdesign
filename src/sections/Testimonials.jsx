import { motion } from "framer-motion";
import { slideUpVariants } from "./animation";

const Testimonials = () => {

  // Function to handle redirecting to the review section
  const handleReview = () => {
    // This URL will redirect to the review section where users can see reviews.
    window.location.href = "https://www.google.com/maps/place/Nk+design+and+construction/@25.1570214,73.0727325,17z/data=!4m8!3m7!1s0x3942ed8db5fb9b67:0x4914b1dbe2d142ee!8m2!3d25.1570214!4d73.0727325!9m1!1b1!16s%2Fg%2F11kbsr2gm8?entry=ttu&g_ep=EgoyMDI1MDIxNy4wIKXMDSoASAFQAw%3D%3D";
  };
  const handlefeedback = () => {
    // This URL will redirect to the review section where users can either give a review.
    window.location.href = "https://www.google.com/maps/place/Nk+design+and+construction/@25.1570214,73.0727325,17z/data=!4m8!3m7!1s0x3942ed8db5fb9b67:0x4914b1dbe2d142ee!8m2!3d25.1570214!4d73.0727325!9m1!1b1!16s%2Fg%2F11kbsr2gm8?entry=ttu&g_ep=EgoyMDI1MDIxNy4wIKXMDSoASAFQAw%3D%3D";
  };
  return (
    <div id="clients" className="w-full flex flex-col lg:flex-row">

      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={slideUpVariants}
        className="services-container lg:w-[80%] w-[90%] m-auto flex flex-col justify-between items-center gap-6"
      >
	  <motion.h1
	  variants={slideUpVariants}
	  className="text-white uppercase text-[40px] font-bold text-center"
	>
	 PLEASE SEE OUR REVIEWS
	</motion.h1>

       

        <motion.div
          variants={slideUpVariants}
          className="w-[120px] h-[6px] bg-red-500"
        ></motion.div>

        {/* Button to handle both see and give review */}
        <div className="mt-[30px]">
          <button
            onClick={handleReview}
            className="p-4 bg-red-500 text-white rounded-md font-bold text-[20px] hover:bg-black hover:text-white"
            style={{ padding: "20px 40px", cursor: "pointer" }}
          >
            Reviews
          </button>
        </div>
      </motion.div>
	  <motion.div
        initial="hidden"
        whileInView="visible"
        variants={slideUpVariants}
        className="services-container lg:w-[80%] w-[90%] m-auto flex flex-col justify-between items-center gap-6"
      >
	  <motion.h1
	  variants={slideUpVariants}
	  className="text-white uppercase text-[40px] font-bold text-center"
	>
	YOUR VALUABLE FEEDBACK
	</motion.h1>

       

        <motion.div
          variants={slideUpVariants}
          className="w-[120px] h-[6px] bg-red-500"
        ></motion.div>

        {/* Button to handle both see and give review */}
        <div className="mt-[30px]">
          <button
            onClick={handlefeedback}
            className="p-4 bg-red-500 text-white rounded-md font-bold text-[20px] hover:bg-black hover:text-white"
            style={{ padding: "20px 40px", cursor: "pointer" }}
          >
            Feedback
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default Testimonials;
