import React, { useState } from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed w-full bg-gray-800 text-white shadow-lg z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-2xl font-bold">
          My Portfolio
        </div>
        <div className="block lg:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
            </svg>
          </button>
        </div>
        <ul className={`flex flex-col lg:flex-row lg:items-center lg:space-x-6 ${isOpen ? 'block' : 'hidden'} lg:flex`}>
          <li>
            <Link to="about" smooth={true} duration={500} activeClass="text-yellow-500" className="block py-2 lg:py-0 hover:text-yellow-500 transition duration-300 cursor-pointer">About</Link>
          </li>
          <li>
            <Link to="achievements" smooth={true} duration={500} activeClass="text-yellow-500" className="block py-2 lg:py-0 hover:text-yellow-500 transition duration-300 cursor-pointer">Achievements</Link>
          </li>
          <li>
            <Link to="projects" smooth={true} duration={500} activeClass="text-yellow-500" className="block py-2 lg:py-0 hover:text-yellow-500 transition duration-300 cursor-pointer">Projects</Link>
          </li>
          <li>
            <Link to="techstacks" smooth={true} duration={500} activeClass="text-yellow-500" className="block py-2 lg:py-0 hover:text-yellow-500 transition duration-300 cursor-pointer">Tech Stacks</Link>
          </li>
          <li>
            <Link to="codingprofiles" smooth={true} duration={500} activeClass="text-yellow-500" className="block py-2 lg:py-0 hover:text-yellow-500 transition duration-300 cursor-pointer">Coding Profiles</Link>
          </li>
          <li>
            <Link to="contactme" smooth={true} duration={500} activeClass="text-yellow-500" className="block py-2 lg:py-0 hover:text-yellow-500 transition duration-300 cursor-pointer">Contact Me</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

