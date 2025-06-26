import React, { useState } from "react";
import newAraivleDpImg from "../../../public/images/project-sailor-home-page008.jpg";

const BottomNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="hidden lg:block ">
      <div className=" py-2 ">
        <div className="flex items-center justify-center gap-6">
          <h3 className="text-[15px] font-semibold text-gray-700">
            SUMMER COLLECTION/25
          </h3>
          <div className="relative group   text-center cursor-pointer transition-all duration-200  border-orange-400 hover:border-[#91d36b]  text-white group">
            {/* Trigger */}
            <div className="relative group">
              {/* Trigger */}
              <h3 className="text-[15px] font-semibold text-gray-700 cursor-pointer">
                NEW ARRIVAL/25
              </h3>

              {/* Dropdown */}
              <div
                className={`absolute left-56 transform -translate-x-1/2 z-[1000] px-[10px] w-[100vw] top-full py-2 rounded-sm mt-[20px] bg-white text-gray-400 shadow-lg
    duration-300 flex flex-col items-start border-red-500 
    opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:translate-y-2 transition-all`}
              >
                <div className="mx-auto w-full px-2 flex flex-col md:flex-row justify-between gap-6 items-start">
                  {/* Left image */}
                  <div className="max-w-[300px] w-full md:w-1/4 shrink-0">
                    <img className="w-full" src={newAraivleDpImg} alt="Left" />
                  </div>

                  {/* Grid content */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full md:w-2/4 text-[14px] text-gray-700">
                    <div>
                      <h4 className="font-semibold mb-2">MEN</h4>
                      <ul className="space-y-1">
                        <li>PANJABI</li>
                        <li>CLASSIC</li>
                        <li>FUSION</li>
                        <li>KABLI SUIT</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">WOMEN</h4>
                      <ul className="space-y-1">
                        <li>KURTI</li>
                        <li>LONG KURTI</li>
                        <li>SALWAR SUIT</li>
                        <li>GOWN</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">FOOTWEAR</h4>
                      <ul className="space-y-1">
                        <li>CASUAL SHOE</li>
                        <li>FASHION LOAFER</li>
                        <li>SANDAL</li>
                        <li>FASHION SNEAKER</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">KIDS</h4>
                      <ul className="space-y-1">
                        <li>NEWBORN</li>
                        <li>BOY'S COLLECTION</li>
                        <li>GIRL'S COLLECTION</li>
                      </ul>
                    </div>
                  </div>

                  {/* Right image */}
                  <div className="w-full md:w-1/4 flex gap-1 shrink-0">
                    <img className="w-1/2" src={newAraivleDpImg} alt="Right" />
                    <img className="w-1/2" src={newAraivleDpImg} alt="Right" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* new araivle dropdowen end */}
          <h3 className="text-[15px] font-semibold text-gray-700">MEN</h3>
          <h3 className="text-[15px] font-semibold text-gray-700">WOMEN</h3>
          <h3 className="text-[15px] font-semibold text-gray-700">KID'S</h3>
          <h3 className="text-[15px] font-semibold text-gray-700">NEWBORN</h3>
          <h3 className="text-[15px] font-semibold text-gray-700">FOOTWEAR</h3>
          <h3 className="text-[15px] font-semibold text-gray-700">
            ACCESSORIES
          </h3>
        </div>
      </div>
    </div>
  );
};

export default BottomNav;
