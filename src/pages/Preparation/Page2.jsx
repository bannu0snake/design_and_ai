import React from "react";
import Pin from "../../assets/images/pin.png";

const Page2 = () => {
  return (
    <div className="flex flex-col w-full px-[7rem] pb-2">
      <div className="flex flex-row items-center">
        <div>
          <img src={Pin} alt="" srcset="" />
        </div>
        <div className="font-montserrat text-[2rem] text-white font-normal">
          Preparation
        </div>
      </div>
    </div>
  );
};

export default Page2;
