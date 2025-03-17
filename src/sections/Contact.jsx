import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { motion } from "framer-motion";
import { slideUpVariants, zoomInVariants } from "./animation";

const BASE_URL = import.meta.env.VITE_BASE_URL;

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await axios.post(`${BASE_URL}/api/inquiries`, formData);

      // Show SweetAlert2 success message
      Swal.fire({
        icon: "success",
        title: "Message Sent!",
        text: res.data.message,
        confirmButtonColor: "#d33",
      });

      setFormData({ fullName: "", email: "", phoneNumber: "", message: "" }); // Clear form after submission
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Failed to send message. Try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div id="contact" className="bg-white w-full">
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
          <motion.h1
            variants={slideUpVariants}
            className="text-red-500 text-2xl"
          >
            CONTACT US
          </motion.h1>

          <motion.h1
            variants={slideUpVariants}
            className="text-black uppercase text-[40px] font-bold"
          >
            REACH US FOR ANY QUERY
          </motion.h1>
          <div className="w-[120px] h-[6px] bg-red-500"></div>
          <p className="text-3xl italic text-gray-600 mt-[60px]">
            Welcome to Nkdesign, the renowned destination for customized
            Building design and construction solutions.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={slideUpVariants}
          className="lg:w-[40%] w-full flex flex-col justify-center items-start gap-6"
        >
          <motion.form
            onSubmit={handleSubmit}
            initial="hidden"
            whileInView="visible"
            variants={zoomInVariants}
            className="flex flex-col justify-center items-start gap-4 w-full"
          >
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Enter Your Fullname"
              className="border-[2px] border-black text-black rounded-lg w-full"
              style={{ padding: "15px 20px" }}
              required
            />

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter Your Email"
              className="border-[2px] border-black text-black rounded-lg w-full"
              style={{ padding: "15px 20px" }}
              required
            />

            <input
              type="number"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              placeholder="Enter Your Number"
              className="border-[2px] border-black text-black rounded-lg w-full"
              style={{ padding: "15px 20px" }}
              required
            />

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Enter Your Message"
              rows="4"
              className="border-[2px] border-black text-black rounded-lg w-full"
              style={{ padding: "15px 20px" }}
              required
            />

            <motion.button
              variants={zoomInVariants}
              type="submit"
              className="bg-red-500 hover:bg-black hover:text-white text-white font-bold rounded-lg w-full"
              style={{ padding: "15px 30px" }}
              disabled={loading}
            >
              {loading ? "Sending..." : "SUBMIT"}
            </motion.button>
          </motion.form>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
