import { FaCopyright } from "react-icons/fa6";
import { Link } from "react-scroll";
import { FaArrowUp } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="bg-black text-white flex justify-center items-center  p-5" style={{ padding: "50px", marginTop: "-60px" }}>
        <FaCopyright className="fill-red-500 lg:size-8 size-8"/>
        <p className="text-lg text-center" style={{ marginLeft: "12px"}}>
          Copyright 2025, NKDesign Interior, All Rights Reserved
        </p>
      </div>
      <div
        id="icon-box"
        className="bg-red-500 text-black p-3 rounded-full hover:bg-black hover:text-white cursor-pointer fixed lg:bottom-6 right-6 bottom-6"
		style={{ padding: "12px"}} >
        <Link to="hero" spy={true} offset={-100} smooth={true}>
          <FaArrowUp className="size-6" />
        </Link>
      </div>
    </>
  );
};

export default Footer;
