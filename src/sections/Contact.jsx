import { motion } from "framer-motion";
import { slideUpVariants, zoomInVariants } from "./animation";

const Contact = () => {
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
						initial="hidden"
						whileInView="visible"
						variants={zoomInVariants}
						className="flex flex-col justify-center items-start gap-4 w-full"
					>
						<input
							type="text"
							placeholder="Enter Your Fullname"
							className="border-[2px] border-black text-black rounded-lg w-full"
							style={{ padding: "15px 20px" }}
						/>

						<input
							type="email"
							placeholder="Enter Your Email"
							className="border-[2px] border-black text-black rounded-lg w-full"
							style={{ padding: "15px 20px" }}
						/>

						<input
							type="number"
							placeholder="Enter Your Number"
							className="border-[2px] border-black text-black rounded-lg w-full"
							style={{ padding: "15px 20px" }}
						/>

						<textarea
							name=""
							placeholder="Enter Your Message"
							id=""
							rows="4"
							className="border-[2px] border-black text-black rounded-lg w-full"
							style={{ padding: "15px 20px" }}
						/>
						<motion.button
							variants={zoomInVariants}
							className="bg-red-500 hover:bg-black hover:text-white text-white font-bold rounded-lg w-full"
							style={{ padding: "15px 30px" }} // Increased padding
						>
							SUBMIT
						</motion.button>
					</motion.form>
				</motion.div>
			</div>
		</div>
	);
};

export default Contact;
