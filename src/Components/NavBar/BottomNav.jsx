import React, { useState } from "react";
import newAraivleDpImg from "../../../public/images/project-sailor-home-page008.jpg";

const BottomNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className=" ">
      <div className=" py-2 ">
        <div className="flex items-center justify-center gap-6">
          <h3 className="text-[15px] font-semibold text-gray-700">
            SUMMER COLLECTION/25
          </h3>
          <div className="relative group w-fit">
            {/* Trigger */}
            <h3
              onClick={() => setIsOpen(!isOpen)}
              className="text-[15px] font-semibold text-gray-700 cursor-pointer"
            >
              NEW ARRIVAL/25
            </h3>

            {/* Dropdown content */}
            <div
              className={`absolute ${
                isOpen ? "block" : "hidden"
              } -left-[538px] top-full w-screen mt-2 bg-white shadow-lg    z-50  px-1 border-2 border-red-500`}
            >
              <div className="max-w-[1440px] mx-auto px-2  flex justify-between gap-6 items-start ">
                {/* Left image */}
                <div className="max-w-[300px] shrink-0">
                  <img className="w-full" src={newAraivleDpImg} alt="Left" />
                </div>

                {/* Grid content */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-[14px] text-gray-700 flex-1 md:-[300px] lg:w-[500px]">
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
                <div className="max-w-[300px] flex gap-1 shrink-0">
                  <img className="w-1/2" src={newAraivleDpImg} alt="Right" />
                  <img className="w-1/2" src={newAraivleDpImg} alt="Right" />
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
