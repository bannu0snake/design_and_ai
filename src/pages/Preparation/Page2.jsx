import React from "react";
import Pin from "../../assets/images/pin.png";
import TimeLine from "../../assets/images/projectTimeline.png";
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
      <div className="basis-1/2 text-white text-[4rem]">THE PROCESS</div>
      <div className="w-[1118px] mt-8">
        <span className="text-white text-lg font-normal font-['Rubik'] leading-loose">
          As the project involved the design of the complete event, the timeline
          considering all the aspects such as infrastructure, programme,
          <br />
          food and design was formulated. The project was successfull only
          beacuse of the{" "}
        </span>
        <span className="text-white text-lg font-bold font-['Rubik'] leading-loose">
          collaborative effort
        </span>
        <span className="text-white text-lg font-normal font-['Rubik'] leading-loose">
          {" "}
          of all the members involved. <br />
          The process was{" "}
        </span>
        <span className="text-white text-lg font-bold font-['Rubik'] leading-loose">
          iterative
        </span>
        <span className="text-white text-lg font-normal font-['Rubik'] leading-loose">
          {" "}
          and had a rigorous{" "}
        </span>
        <span className="text-white text-lg font-bold font-['Rubik'] leading-loose">
          brainstorming
        </span>
        <span className="text-white text-lg font-normal font-['Rubik'] leading-loose">
          {" "}
          and{" "}
        </span>
        <span className="text-white text-lg font-bold font-['Rubik'] leading-loose">
          feedback
        </span>
        <span className="text-white text-lg font-normal font-['Rubik'] leading-loose">
          {" "}
          session involved after each step. The name of the conference was
          chosen as{" "}
        </span>
        <span className="text-white text-lg font-bold font-['Rubik'] leading-loose">
          “Hidden Layers”
        </span>
        <span className="text-white text-lg font-normal font-['Rubik'] leading-loose">
          {" "}
          which is a layer in between input layers and output layers, where
          artificial neurons take in a set of weighted inputs and produce an
          output through an activation function.{" "}
        </span>
      </div>

      <div className="w-[730px] text-white text-5xl font-bold font-bagoss leading-[64px] mt-[3rem]">
        Project Timeline
      </div>
      <img className="my-[3rem]" src={TimeLine} alt="" srcset="" />
    </div>
  );
};

export default Page2;
