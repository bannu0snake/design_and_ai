import React from "react";
import SmallTitle from "../components/LandingSection/SmallTitle";
import Laptop from "../assets/svgs/laptop.svg";
import classes from "./Landing.module.css";
const Landing = () => {
  return (
    <div className="p-[7rem]">
      <SmallTitle />
      <div className={classes["landing-text-parent"]}>
        <div className="mt-20 w-[41rem]">
          <div className="text-[4rem]/[1.25rem] font-bold text-white mb-2">
            DESIGN AND AI
          </div>
          <br />
          <div className="text-white text-[2rem]/[1.25rem]">CONFERENCE</div>
          <br />
          <div className="text-white text-[1.5rem]/[2.4rem] font-rubik">
            The project is a joint research initiative of five leading <br />{" "}
            German art and design schools that aims at sustainably anchoring the
            teaching of AI topics in the entire field of <br /> design. The
            event gathered a diverse group of experts to collectively discuss
            and learn about artificial <br /> intelligence in design.
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
