import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { slideUpVariants, zoomInVariants } from "./animation";
import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL;

const Portfolio = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showAll, setShowAll] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    axios
      .get(`${BASE_URL}/api/get/project`)
      .then((response) => {
        setProjects(response.data?.images || []);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching project images:", error);
        setError("Failed to load projects. Please try again.");
        setLoading(false);
      });
  }, []);

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      variants={slideUpVariants}
      style={{
        width: "100%",
        textAlign: "center",
        padding: "40px 0",
        color: "white",
      }}
    >
      <motion.h1
        style={{ color: "red", fontSize: "24px", marginBottom: "20px" }}
        variants={slideUpVariants}
      >
        PORTFOLIO
      </motion.h1>
      <motion.h1
        variants={slideUpVariants}
        style={{
          fontSize: "40px",
          fontWeight: "bold",
          textTransform: "uppercase",
          marginBottom: "20px",
        }}
      >
        OUR BEST PROJECTS
      </motion.h1>
      <motion.div
        style={{
          width: "120px",
          height: "6px",
          backgroundColor: "red",
          margin: "auto",
          marginBottom: "50px",
        }}
        variants={slideUpVariants}
      ></motion.div>

      {loading && <p>Loading projects...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {!loading && projects.length > 0 && (
        <>
          {/* Responsive Image Grid */}
          <motion.div
            className="grid-container"
            initial="hidden"
            whileInView="visible"
            variants={zoomInVariants}
          >
            <AnimatePresence>
              {projects
                .slice(0, showAll ? projects.length : 8) // Show only 8 images initially
                .map((project, index) => (
                  <motion.img
                    key={project._id || index}
                    src={project.filepath}
                    alt="Project Image"
                    className="grid-image"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.5 }}
                    whileHover={{ scale: 1.05 }}
                    onClick={() => setSelectedImage(project.filepath)}
                  />
                ))}
            </AnimatePresence>
          </motion.div>

          {/* View More Button */}
          {projects.length > 8 && (
            <motion.button
              onClick={() => setShowAll(!showAll)}
              className="view-more-btn"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {showAll ? "View Less" : "View More"}
            </motion.button>
          )}
        </>
      )}

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            onClick={() => setSelectedImage(null)}
            className="image-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="modal-content"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ duration: 0.3 }}
            >
              <img src={selectedImage} alt="Large View" className="modal-image" />
              <motion.button
                onClick={() => setSelectedImage(null)}
                className="close-btn"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                ✖
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CSS Styles */}
      <style>
        {`
          .grid-container {
            display: grid;
            grid-template-columns: repeat(4, 1fr); /* Default: 4 columns */
            gap: 20px;
            margin-top: 20px;
            justify-content: center;
            max-width: 1200px;
            margin: auto;
          }

          .grid-image {
            height: 250px;
            width: 100%;
            object-fit: cover;
            border-radius: 10px;
            box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
            cursor: pointer;
          }

          .view-more-btn {
            margin-top: 20px;
            padding: 10px 20px;
            background-color: red;
            color: white;
            border: none;
            border-radius: 5px;
            font-size: 16px;
            cursor: pointer;
            transition: background 0.3s;
          }

          .view-more-btn:hover {
            background-color: darkred;
          }

          .image-modal {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.8);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 1000;
          }

          .modal-content {
            position: relative;
          }

          .modal-image {
            max-width: 90vw;
            max-height: 80vh;
            border-radius: 10px;
            box-shadow: 0px 4px 10px rgba(255, 255, 255, 0.3);
          }

          .close-btn {
            position: absolute;
            top: -10px;
            right: -10px;
            background-color: white;
            color: black;
            border: none;
            border-radius: 50%;
            padding: 5px 10px;
            font-size: 20px;
            cursor: pointer;
          }

          /* Responsive Grid */
          @media (max-width: 1024px) {
            .grid-container {
              grid-template-columns: repeat(2, 1fr); /* 2 columns */
            }
          }

          @media (max-width: 600px) {
            .grid-container {
              grid-template-columns: repeat(1, 1fr); /* 1 column */
            }
          }
        `}
      </style>
    </motion.div>
  );
};

export default Portfolio;
