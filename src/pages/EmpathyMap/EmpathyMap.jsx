import React from "react";
import BgImage from "../../assets/images/bgimage.png";

const EmpathyMap = () => {
  return (
    <div className="w-full reative">
      <div
        className="relative z-20 flex flex-col items-center pt-16"
        style={{
          backgroundImage: `url(${BgImage})`,
          width: "100%",
          height: "400px",
          fontSize: "50px",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="text-center text-white text-5xl font-bold font-bagoss leading-[64px]">
          Empathy Map
        </div>
        <div className="text-center w-[50%] text-white text-base font-normal font-inter leading-relaxed">
          An empathy map is a collaborative visualization used to articulate
          what we know about a particular type of user. It helps to synthesize
          research data to understand how people make decisions.
        </div>
      </div>
    </div>
  );
};

export default EmpathyMap;
