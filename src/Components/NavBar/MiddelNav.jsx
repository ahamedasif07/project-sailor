import React from "react";
import SailorLogo from "../SailorLogo/SailorLogo";
import { CiSearch } from "react-icons/ci";

const MiddelNav = () => {
  return (
    <div>
      <div className="px-4 md:px-[100px] lg:px-[150px]">
        <SailorLogo />
        <div>
          {/* Search Bar and Dropdown */}
          <div className="flex items-center  bg-[#F6F7F8] rounded-full w-full max-w-md relative overflow-visible z-[10000]">
            <input
              type="text"
              placeholder="Search "
              className="py-2 px-4 w-full outline-none text-[14px]"
            />

            {/* Dropdown Wrapper */}
            <div className="relative w-[450px]">
              <select className="w-full bg-[#F6F7F8] border-l focus:outline-none focus:ring-0 text-gray-900 py-2 px-3 border-white cursor-pointer absolute z-[10010] bottom-[-18px]">
                <option className="text-gray-900" value="latest-collection">
                  categories
                </option>
                <option className="text-gray-900" value="latest-collection">
                  Latest Collection/25
                </option>
                <option className="text-gray-900" value="summer-collection">
                  SUMMER COLLECTION/25
                </option>
                <option className="text-gray-900" value="boishakh-collection">
                  BOISHAKH COLLECTION/2025
                </option>
                <option className="text-gray-900" value="new-arrival">
                  NEW ARRIVAL/25
                </option>
                <option className="text-gray-900" value="men">
                  MEN
                </option>
                <option className="text-gray-900" value="women">
                  WOMEN
                </option>
                <option className="text-gray-900" value="kids">
                  KID'S
                </option>
                <option className="text-gray-900" value="newborn">
                  NEWBORN
                </option>
                <option className="text-gray-900" value="footwear">
                  FOOTWEAR
                </option>
                <option className="text-gray-900" value="accessories">
                  ACCESSORIES
                </option>
                <option className="text-gray-900" value="spring-2025">
                  SPRING 2025
                </option>
                <option className="text-gray-900" value="festive-spotlight">
                  FESTIVE SPOT LIGHT
                </option>
                <option className="text-gray-900" value="king-collection">
                  KING COLLECTION
                </option>
              </select>
            </div>

            <button className=" py-[10px] text-[19px] px-3 border-l border-white rounded-r-full">
              <CiSearch />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiddelNav;
