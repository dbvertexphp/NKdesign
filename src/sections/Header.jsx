import { useState } from "react";
import { FaXmark, FaBars } from "react-icons/fa6";
import { Link } from "react-scroll";
import NK_Logo from "/src/assets/NK Logo.jpg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navItems = [
    { link: "Home", path: "hero" },
    { link: "About", path: "about" },
    { link: "Services", path: "services" },
    { link: "Projects", path: "projects" },
    { link: "Contact", path: "contact" },
  ];

  // Function to handle redirection to Google Location for NK Design
  const handleReachUs = () => {
    window.location.href = "https://www.google.com/maps/dir//Nk+design+and+construction,+Pali+bus+stand+road,+near+bawarchi+restaurant,+Ushapuri,+Sumerpur,+Rajasthan+306902/@25.1570214,73.0727325,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x3942ed8db5fb9b67:0x4914b1dbe2d142ee!2m2!1d73.0727325!2d25.1570214!3e0?entry=ttu&g_ep=EgoyMDI1MDMxOS4yIKXMDSoASAFQAw%3D%3D"; // NK Design Google Location
  };

  return (
    <nav
      style={{ padding: "15px 30px" }}
      className="w-full flex justify-between items-center gap-1 lg:px-16 px-6 py-4 sticky top-0 z-50 bg-white"
    >
      {/* Logo */}
      <h1 className="text-black md:text-3xl text-2xl font-bold font-rubik flex items-center gap-3">
        <img src={NK_Logo} alt="project image" className="h-[80px] w-auto" />
        <div className="flex flex-col">
          <span>
            <span className="text-red-500 italic">Design &</span>
          </span>
          <span> Construction</span>
        </div>
      </h1>

      {/* Desktop Navigation (Hidden below 768px) */}
      <ul className="hidden lg:flex justify-center items-center gap-6 ml-auto">
        {navItems.map(({ link, path }) => (
          <Link
            key={path}
            className="text-black uppercase font-bold cursor-pointer p-3 rounded-full hover:bg-red-500 hover:text-white text-[15px]"
            style={{ padding: "15px 20px" }}
            to={path}
            spy={true}
            offset={-100}
            smooth={true}
          >
            {link}
          </Link>
        ))}
      </ul>

      {/* "REACH US" Button (Visible only on screens > 1024px) */}
      <button
        onClick={handleReachUs}
        className="bg-red-500 hover:bg-black hover:text-white text-white px-10 py-3 rounded-full font-semibold transform hover:scale-105 transition-transform duration-300 cursor-pointer hidden lg:block"
        style={{ padding: "12px 40px" }}
      >
        REACH US
      </button>

      {/* Mobile Hamburger Icon (Visible below 1024px) */}
      <div
        className="lg:hidden flex justify-between items-center mt-3"
        onClick={toggleMenu}
      >
        {isMenuOpen ? (
          <FaXmark className="text-red-500 text-3xl cursor-pointer" />
        ) : (
          <FaBars className="text-red-500 text-3xl cursor-pointer" />
        )}
      </div>

      {/* Mobile Menu (Hidden by default) */}
      <div
        className={`${
          isMenuOpen ? "flex" : "hidden"
        } w-full h-fit bg-red-500 p-4 absolute top-[100px] left-0 lg:hidden`}
      >
        <ul
          className="flex flex-col items-center gap-4 w-full"
          style={{ padding: "12px 40px" }}
        >
          {navItems.map(({ link, path }) => (
            <Link
              key={path}
              className="text-white uppercase font-semibold cursor-pointer p-3 rounded-full hover:bg-black hover:text-white text-[15px]"
              style={{ padding: "12px 40px" }}
              to={path}
              spy={true}
              offset={-100}
              smooth={true}
              onClick={closeMenu} // Close menu on click
            >
              {link}
            </Link>
          ))}
          <button
            onClick={handleReachUs}
            className="text-white uppercase font-semibold cursor-pointer p-3 rounded-full hover:bg-black hover:text-white text-[15px]"
            style={{ padding: "12px 40px" }}
          >
            REACH US
          </button>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
