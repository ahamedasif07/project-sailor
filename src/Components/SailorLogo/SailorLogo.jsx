import React from "react";
import "./SailorLogo.css";

const SailorLogo = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-white">
      <svg
        viewBox="0 0 600 150"
        className="w-[320px] md:w-[450px]"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Main text */}
        <text
          x="55%"
          y="50%"
          dominantBaseline="middle"
          textAnchor="middle"
          className="sailor-animate"
        >
          Saılor
        </text>

        {/* Triangle near 'i' */}
        <g transform="translate(28, 19)">
          <polygon points="285,28 293,10 296,28" className="triangle-animate" />
        </g>
      </svg>
    </div>
  );
};

export default SailorLogo;
