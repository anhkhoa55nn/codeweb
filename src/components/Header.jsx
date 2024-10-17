import { useState } from "react";
import { close, logo, menu } from "../assets";

const navLinks = [
  {
    id: "#home",
    title: "Home",
  },
  {
    id: "#about",
    title: "About",
  },
  {
    id: "#tokenomics",
    title: "Tokenomics",
  }
];

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-10/12 m-auto mt-5 border-2 border-black flex justify-between items-center py-4 px-8 bg-[#f7eedd] rounded-lg shadow-md">
      {/* Logo Section */}
      <div className="flex items-center">
        <img src={logo} alt="Labubu" className="w-[50px] h-[50px] object-cover rounded-full" />
        <span className="ml-4 font-bold text-xl tracking-widest text-black">
          $LABUBU
        </span>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden sm:flex flex-1 justify-end items-center space-x-8 text-black font-semibold">
        {navLinks.map((nav) => (
          <li key={nav.id}>
            <a href={nav.id} className="hover:text-gray-700 transition duration-300">
              {nav.title}
            </a>
          </li>
        ))}
      </ul>

      {/* Mobile Menu Button */}
      <div className="sm:hidden flex items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain text-white"
          onClick={() => setToggle(!toggle)}
        />
      </div>

      {/* Mobile Menu */}
      <div className={`${toggle ? "flex" : "hidden"} p-6 bg-black absolute top-16 right-0 mx-4 my-2 min-w-[140px] rounded-lg z-10`}>
        <ul className="list-none flex flex-col items-start">
          {navLinks.map((nav, index) => (
            <li key={nav.id} className={`font-poppins font-medium text-white text-[16px] ${index !== navLinks.length - 1 ? "mb-4" : "mb-0"}`}>
              <a href={nav.id} onClick={() => setToggle(false)}>
                {nav.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
