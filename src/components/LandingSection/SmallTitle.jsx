import React from "react";

const SmallTitle = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-row gap-3">
        <div className="w-6 h-6 rounded-full bg-white"></div>
        <div className="w-6 h-6 rounded-full bg-white"></div>
        <div className="w-6 h-6 rounded-full bg-[#E1E65C]"></div>
        <div className="w-6 h-6 rounded-full bg-[#E1E65C]"></div>
        <div className="w-6 h-6 rounded-full bg-[#E1E65C]"></div>
      </div>
      <div className="text-white text-[24px]/[20px] font-semibold w-fit">
        EXPERIENCE DESIGN
      </div>
    </div>
  );
};

export default SmallTitle;
