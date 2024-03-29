import React from "react";

const StepCell = ({ title, desc }) => {
  return (
    <div className="flex flex-col">
      <div className="flex items-center flex-nowrap">
        <div className="w-[1.5rem] h-[1.5rem]">
          <div className="w-[1.5rem] h-[1.5rem] rounded-full bg-yellow-300"></div>
        </div>
        <div className="w-full border-b-[1px] border-dashed border-yellow-300 mx-[1.5rem]" />
      </div>
      <div className="mt-[1rem]">
        <div className="text-white font-semibold font-rubik text-xl leading-[30px]">
          {title}
        </div>
        <div className="text-white text-base font-rubik font-light leading-relaxed">
          {desc}
        </div>
      </div>
    </div>
  );
};

export default StepCell;
