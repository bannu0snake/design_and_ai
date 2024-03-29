import React, { useState } from "react";
import SmallTitle from "../../components/LandingSection/SmallTitle";
import Laptop from "../../assets/svgs/laptop.svg";
import classes from "./Landing.module.css";
const Landing = () => {
  const [btnTxt, setBtnTxt] = useState("UI/UX Designer");
  return (
    <div className="relative">
      <div className="absolute right-0 top-0 rounded-full bg-amber-400 opacity-20 w-[25.375rem] h-[25.375rem] blur-2xl"></div>
      <div className="p-[7rem] relative">
        <SmallTitle />

        <div className={classes["landing-text-parent"]}>
          <div className="mt-20 w-[41rem]">
            <div className="text-[4rem]/[1.25rem] font-bold text-white mb-2 font-rubik">
              DESIGN AND AI
            </div>
            <br />
            <div className="text-white text-[2rem]/[1.25rem] font-rubik">
              CONFERENCE
            </div>
            <br />
            <div className="text-white text-[1.5rem]/[2.4rem] font-rubik">
              The project is a joint research initiative of five leading <br />{" "}
              German art and design schools that aims at sustainably anchoring
              the teaching of AI topics in the entire field of <br /> design.
              The event gathered a diverse group of experts to collectively
              discuss and learn about artificial <br /> intelligence in design.
            </div>
            <div className="mt-[79px]">
              <div className="text-white text-[1.5rem]/[2.4rem] font-rubik">
                Role
              </div>
              <div className="w-64 h-[54px] p-2 bg-gradient-to-l hover:to-60%  from-yellow-300 to-slate-300 rounded-lg flex-col justify-start items-start gap-2.5 inline-flex mt-[1.5rem]">
                <div
                  className="w-60 text-center text-black text-2xl font-normal font-['Rubik'] leading-[38.40px]"
                  onMouseOver={() => {
                    setBtnTxt("UX Focussed");
                  }}
                  onMouseLeave={() => {
                    setBtnTxt("UI/UX Designer");
                  }}
                >
                  {btnTxt}
                </div>
              </div>
            </div>
          </div>
          <div className={`${classes["landing-image"]} hidden lg:block`}>
            <img src={Laptop} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
