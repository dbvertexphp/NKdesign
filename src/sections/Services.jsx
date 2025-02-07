import { motion } from "framer-motion";
import { slideUpVariants, zoomInVariants } from "./animation";
import { allservices } from "../export";
import { useState } from "react";

const Services = () => {
	// Track expanded item index (null means none are expanded)
	const [expandedIndex, setExpandedIndex] = useState(null);
	const maxLength = 100; 

	const toggleReadMore = (index) => {
		setExpandedIndex(expandedIndex === index ? null : index); // Toggle only clicked item
	};

	return (
		<div id="services" className="w-full bg-white">
			<motion.div
				initial="hidden"
				whileInView="visible"
				variants={slideUpVariants}
				className="services-container lg:w-[80%] w-[90%] m-auto flex flex-col justify-between items-center gap-6"
			>
				<motion.h1 variants={slideUpVariants} className="text-red-500 text-2xl">
					SPECIAL OFFER
				</motion.h1>

				<motion.h1
					variants={slideUpVariants}
					className="text-black uppercase text-[40px] font-bold text-center"
				>
					OUR BEST SERVICES
				</motion.h1>
				<motion.div variants={slideUpVariants} className="w-[120px] h-[6px] bg-red-500"></motion.div>

				{/* Services List */}
				<motion.div
					initial="hidden"
					whileInView="visible"
					variants={zoomInVariants}
					className="w-full grid lg:grid-cols-3 grid-cols-1 justify-center items-start gap-[20px] mt-[30px]"
				>
					{allservices.map((item, index) => {
						const isExpanded = expandedIndex === index; // Check if this one is open

						return (
							<motion.div
								variants={zoomInVariants}
								className="flex flex-col justify-center items-start gap-5 p-8 rounded-lg shadow-md"
								key={index}
							>
								<div className="flex gap-5 items-start" style={{ padding:"10px" }}>
									<img
										src={item.icon}
										alt="icon"
										className="w-[70px] border-2 border-red-500 hover:bg-red-500 rounded-lg p-2"
									/>
									<div className="flex flex-col">
										<h1 className="text-xl font-bold text-black">{item.title}</h1>
										<p className="text-[18px]">
											{isExpanded ? item.about : `${item.about.substring(0, maxLength)}...`}
										</p>
										{item.about.length > maxLength && (
											<button
												onClick={() => toggleReadMore(index)}
												className="text-blue-700 hover:underline mt-2"
											>
												{isExpanded ? "Read Less" : "Read More"}
											</button>
										)}
									</div>
								</div>
							</motion.div>
						);
					})}
				</motion.div>
			</motion.div>
		</div>
	);
};

export default Services;
