import React, { useState } from "react";
import {
  FaBars,
  FaTimes,
  FaSearch,
  FaAngleDown,
  FaAngleRight,
} from "react-icons/fa";

const ResponsiveNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showInput, setShowInput] = useState(false);
  const [showHtmlCss, setShowHtmlCss] = useState(false);
  const [showJs, setShowJs] = useState(false);
  const [showMore, setShowMore] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);
  const toggleSearch = () => setShowInput(!showInput);

  return (
    <div>
      <nav className="top-0 left-0 w-full bg-[#3E8DA8] shadow z-50">
        <div className="max-w-[1250px] mx-auto flex justify-center items-center px-6 py-3">
          {/* Menu Icon */}
          <FaBars
            onClick={toggleSidebar}
            className="text-white text-2xl md:hidden cursor-pointer"
          />

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-6  text-white font-medium items-center">
            <a href="#" className="hover:text-gray-200">
              HOME
            </a>

            {/* HTML & CSS Dropdown */}
            <div className="relative group">
              <div
                className="flex items-center gap-1 cursor-pointer"
                onClick={() => setShowHtmlCss(!showHtmlCss)}
              >
                <span>HTML & CSS</span>
                <FaAngleDown
                  className={`transition-transform ${
                    showHtmlCss ? "rotate-180" : ""
                  }`}
                />
              </div>
              {showHtmlCss && (
                <ul className="absolute inset-x-0 mx-auto max-w-[100vw] bg-[#3E8DA8] text-white mt-2 shadow rounded z-10">
                  <li className="px-4 py-2 hover:bg-[#357792]">
                    <a href="#">Web Design</a>
                  </li>
                  <li className="px-4 py-2 hover:bg-[#357792]">
                    <a href="#">Login Forms</a>
                  </li>
                  <li className="px-4 py-2 hover:bg-[#357792]">
                    <a href="#">Card Design</a>
                  </li>
                </ul>
              )}
            </div>

            {/* JavaScript Dropdown */}
            <div className="relative group">
              <div
                className="flex items-center gap-1 cursor-pointer"
                onClick={() => setShowJs(!showJs)}
              >
                <span>JAVASCRIPT</span>
                <FaAngleDown
                  className={`transition-transform ${
                    showJs ? "rotate-180" : ""
                  }`}
                />
              </div>
              {showJs && (
                <ul className="absolute bg-[#3E8DA8] text-white mt-2 shadow rounded z-10">
                  <li className="px-4 py-2 hover:bg-[#357792]">
                    <a href="#">Dynamic Clock</a>
                  </li>
                  <li className="px-4 py-2 hover:bg-[#357792]">
                    <a href="#">Form Validation</a>
                  </li>
                  <li className="px-4 py-2 hover:bg-[#357792]">
                    <a href="#">Card Slider</a>
                  </li>
                  <li className="px-4 py-2 hover:bg-[#357792]">
                    <a href="#">Complete Website</a>
                  </li>
                </ul>
              )}
            </div>

            <a href="#" className="hover:text-gray-200">
              ABOUT US
            </a>
            <a href="#" className="hover:text-gray-200">
              CONTACT US
            </a>
          </div>
        </div>

        {/* Mobile Sidebar */}
        {isOpen && (
          <div className="fixed md:hidden top-0 left-0 w-screen h-full bg-[#3E8DA8] p-5 z-[999] shadow-lg transition-all duration-500">
            <div className="flex justify-between items-center text-white mb-4">
              <span className="text-xl font-semibold">Logo</span>
              <FaTimes
                onClick={toggleSidebar}
                className="text-2xl cursor-pointer"
              />
            </div>
            <ul className="text-white space-y-3">
              <li>
                <a href="#">HOME</a>
              </li>

              {/* HTML & CSS mobile */}
              <li>
                <div
                  className="flex items-center justify-between cursor-pointer"
                  onClick={() => setShowHtmlCss(!showHtmlCss)}
                >
                  <span>HTML & CSS</span>
                  <FaAngleDown
                    className={`${showHtmlCss ? "rotate-180" : ""}`}
                  />
                </div>
                {showHtmlCss && (
                  <ul className="ml-4 mt-2 space-y-2">
                    <li>
                      <a href="#">Web Design</a>
                    </li>
                    <li>
                      <a href="#">Login Forms</a>
                    </li>
                    <li>
                      <a href="#">Card Design</a>
                    </li>
                    <li>
                      <div
                        className="flex items-center justify-between cursor-pointer"
                        onClick={() => setShowMore(!showMore)}
                      >
                        <span>More</span>
                        <FaAngleRight
                          className={`${showMore ? "rotate-90" : ""}`}
                        />
                      </div>
                      {showMore && (
                        <ul className="ml-4 mt-2 space-y-2">
                          <li>
                            <a href="#">Neumorphism</a>
                          </li>
                          <li>
                            <a href="#">Pre-loader</a>
                          </li>
                          <li>
                            <a href="#">Glassmorphism</a>
                          </li>
                        </ul>
                      )}
                    </li>
                  </ul>
                )}
              </li>

              {/* JS mobile */}
              <li>
                <div
                  className="flex items-center justify-between cursor-pointer"
                  onClick={() => setShowJs(!showJs)}
                >
                  <span>JAVASCRIPT</span>
                  <FaAngleDown className={`${showJs ? "rotate-180" : ""}`} />
                </div>
                {showJs && (
                  <ul className="ml-4 mt-2 w-screen space-y-2">
                    <li>
                      <a href="#">Dynamic Clock</a>
                    </li>
                    <li>
                      <a href="#">Form Validation</a>
                    </li>
                    <li>
                      <a href="#">Card Slider</a>
                    </li>
                    <li>
                      <a href="#">Complete Website</a>
                    </li>
                  </ul>
                )}
              </li>

              <li>
                <a href="#">ABOUT US</a>
              </li>
              <li>
                <a href="#">CONTACT US</a>
              </li>
            </ul>
          </div>
        )}
      </nav>
      s
    </div>
  );
};

export default ResponsiveNavbar;
