import React from "react";
import SmallTitle from "../components/LandingSection/SmallTitle";
import Laptop from "../assets/svgs/laptop.svg";
import classes from "./Landing.module.css";
const Landing = () => {
  return (
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
            German art and design schools that aims at sustainably anchoring the
            teaching of AI topics in the entire field of <br /> design. The
            event gathered a diverse group of experts to collectively discuss
            and learn about artificial <br /> intelligence in design.
          </div>
          <div className="mt-[79px]">
            <div className="text-white text-[1.5rem]/[2.4rem] font-rubik">
              Role
            </div>
            <div className="w-64 h-[54px] p-2 bg-gradient-to-l from-yellow-300 to-slate-300 rounded-lg flex-col justify-start items-start gap-2.5 inline-flex mt-[1.5rem]">
              <div className="w-60 text-center text-black text-2xl font-normal font-['Rubik'] leading-[38.40px]">
                UI/UX Designer
              </div>
            </div>
          </div>
        </div>
        <div className={classes["landing-image"]}>
          <img src={Laptop} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Landing;
