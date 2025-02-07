import { motion } from "framer-motion";
import { slideUpVariants, zoomInVariants } from "./animation";
import { planning } from "../export";
import { useState } from "react";

const Working = () => {
	// Track which item is expanded (null means none are expanded)
	const [expandedIndex, setExpandedIndex] = useState(null);
	const maxLength = 100;

	const toggleReadMore = (index) => {
		setExpandedIndex(expandedIndex === index ? null : index); // Toggle only clicked item
	};

	return (
		<div id="working" className="w-full bg-white">
			<motion.div
				initial="hidden"
				whileInView="visible"
				variants={slideUpVariants}
				className="services-container lg:w-[80%] w-[90%] m-auto flex flex-col justify-between items-center gap-6"
			>
				<motion.h1
					variants={slideUpVariants}
					className="text-red-500 text-2xl"
				>
					STEP BY STEP
				</motion.h1>

				<motion.h1
					variants={slideUpVariants}
					className="text-black uppercase text-[40px] font-bold text-center"
				>
					HOW IT'S WORKING
				</motion.h1>

				<motion.div
					variants={slideUpVariants}
					className="w-[120px] h-[6px] bg-red-500"
				></motion.div>

				{/* Planning Section */}
				<motion.div
					initial="hidden"
					whileInView="visible"
					variants={zoomInVariants}
					className="w-full grid lg:grid-cols-4 grid-cols-1 justify-center items-start gap-[20px] mt-[30px]"
				>
					{planning.map((item, index) => {
						const isExpanded = expandedIndex === index; // Check if this one is open

						return (
							<div
								key={index}
								className="flex flex-col justify-center items-center gap-5 border-2 border-red-500 rounded-md p-6 shadow-md"
								style={{ padding: "15px" }}
							>
								<div>
									<item.icon className="size-[80px] bg-red-500 hover:bg-black hover:fill-white p-4 rounded-full cursor-pointer" />
								</div>
								<h1 className="text-2xl font-bold uppercase">{item.title}</h1>
								<p className="text-[20px] text-center text-gray-600">
									{isExpanded
										? item.about
										: `${item.about.substring(0, maxLength)}...`}
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
						);
					})}
				</motion.div>
			</motion.div>
		</div>
	);
};

export default Working;
