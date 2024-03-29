import React from "react";
import Pin from "../../assets/images/pin.png";
import StepCell from "./StepCell";
import TimelineChart from "./TimelineChart";
const Page1 = () => {
  const text = "Testing -> Release";
  return (
    <div className="flex flex-col w-full px-[7rem] pb-24">
      <div className="flex flex-row items-center">
        <div>
          <img src={Pin} alt="" srcset="" />
        </div>
        <div className="font-montserrat text-[2rem] text-white font-normal">
          Preparation
        </div>
      </div>
      <div className="mt-[1rem] flex">
        <div className="basis-1/2 text-white text-[4rem]">THE PROCESS</div>
        <div className="flex gap-[2rem]">
          <div className="flex flex-col">
            <div className=" text-white text-sm font-black font-montserrat leading-[17px]">
              Design Flow
            </div>
            <ol className="text-white text-sm font-normal font-montserrat leading-normal">
              <li>Research & Ideation</li>
              <li>Design & Prototype</li>
              <li>Testing</li>
            </ol>
          </div>
          <div className="flex flex-col">
            <div className=" text-white text-sm font-black font-montserrat leading-[17px]">
              Development
            </div>
            <ol className="text-white text-sm font-normal font-montserrat leading-normal">
              <li>Code</li>
              <li>Testing</li>
              <li>Deployment</li>
            </ol>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-8">
        <StepCell
          title="Ideate"
          desc="Defining the scope, building a timeline, formation of teams within group, conducting research"
        />
        <StepCell
          title="Design"
          desc="After defining the needs and goals of speakers and attendees-designing website, posters, instagram posts, invitation cards"
        />
        <StepCell
          title="Develop"
          desc="Converting the designs into a live website"
        />
        <StepCell title="Deploy" desc="Launching the website to the audience" />
      </div>
      <div className="mt-[1.5rem]">
        <div className="w-full text-white text-5xl font-bold font-bagoss leading-[64px]">
          Design Timeline
        </div>
        <div className="w-[730px] text-white text-lg font-normal font-['Rubik'] leading-loose mb-[4rem]">
          I was a part of the design team which consited of three members
          including me and this was the timeline we followed-
        </div>
        <TimelineChart />
        <div className="grid grid-cols-3 gap-2 mt-8">
          <div className="col-span-">
            <div className="w-full p-[0.5rem] bg-zinc-600 rounded-lg text-white text-base font-semibold font-['Montserrat'] leading-[18px]">
              01 Ideation
            </div>
            <div className="mt-[1.5rem] text-white flex-col justify-start items-start gap-1.5 flex">
              <li className="text-zinc-100 text-sm font-normal font-['Montserrat']">
                Brainstorming
              </li>
              <li className="text-zinc-100 text-sm font-normal font-['Montserrat']">
                Crazy8
              </li>
              <li className="text-zinc-100 text-sm font-normal font-['Montserrat']">
                Research
              </li>
            </div>
          </div>
          <div className="col-span-1">
            <div className="w-full p-[0.5rem] bg-zinc-600 rounded-lg text-white text-base font-semibold font-['Montserrat'] leading-[18px]">
              02 Research and wireframe
            </div>
            <div className="mt-[1.5rem] text-white flex-col justify-start items-start gap-1.5 flex">
              <li className="text-zinc-100 text-sm font-normal font-['Montserrat']">
                Empathy Map
              </li>
              <li className="text-zinc-100 text-sm font-normal font-['Montserrat']">
                User journey
              </li>
              <li className="text-zinc-100 text-sm font-normal font-['Montserrat']">
                General Flow
              </li>
              <li className="text-zinc-100 text-sm font-normal font-['Montserrat']">
                Design trend Research
              </li>
              <li className="text-zinc-100 text-sm font-normal font-['Montserrat']">
                Low Fi testing (AB)
              </li>
            </div>
          </div>
          <div className="col-span-1">
            <div className="w-full p-[0.5rem] bg-zinc-600 rounded-lg text-white text-base font-semibold font-['Montserrat'] leading-[18px]">
              03 Hifi Design
            </div>
            <div className="mt-[1.5rem] text-white flex-col justify-start items-start gap-1.5 flex">
              <li className="text-zinc-100 text-sm font-normal font-['Montserrat']">
                Brand identity
              </li>
              <li className="text-zinc-100 text-sm font-normal font-['Montserrat']">
                Design Main Cases
              </li>
              <li className="text-zinc-100 text-sm font-normal font-['Montserrat']">
                Design UI documentation
              </li>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-2 mt-24">
          <div className="col-span-1">
            <div className="w-full p-[0.5rem] bg-zinc-600 rounded-lg text-white text-base font-semibold font-['Montserrat'] leading-[18px]">
              04 Prototype and Testing (UT)
            </div>
            <div className="mt-[1.5rem] text-white flex-col justify-start items-start gap-1.5 flex">
              <li className="text-zinc-100 text-sm font-normal font-['Montserrat']">
                General Prototype
              </li>
              <li className="text-zinc-100 text-sm font-normal font-['Montserrat']">
                Usability Testing
              </li>
              <li className="text-zinc-100 text-sm font-normal font-['Montserrat']">
                Gather Feedback
              </li>
              <li className="text-zinc-100 text-sm font-normal font-['Montserrat']">
                Design Revision
              </li>
            </div>
          </div>
          <div className="col-span-1">
            <div className="w-full p-[0.5rem] bg-zinc-600 rounded-lg text-white text-base font-semibold font-['Montserrat'] leading-[18px]">
              05 Development
            </div>
            <div className="mt-[1.5rem] text-white flex-col justify-start items-start gap-1.5 flex">
              <li className="text-zinc-100 text-sm font-normal font-['Montserrat']">
                Handoff to developer
              </li>
              <li className="text-zinc-100 text-sm font-normal font-['Montserrat']">
                Translate from UI to code
              </li>
              <li className="text-zinc-100 text-sm font-normal font-['Montserrat']">
                Unit Testing
              </li>
              <li className="text-zinc-100 text-sm font-normal font-['Montserrat']">
                Gather Feedback
              </li>
              <li className="text-zinc-100 text-sm font-normal font-['Montserrat']">
                Layout Revision after feedback
              </li>
              <li className="text-zinc-100 text-sm font-normal font-['Montserrat']">
                Ready to test
              </li>
            </div>
          </div>
          <div className="col-span-1">
            <div className="w-full p-[0.5rem] bg-zinc-600 rounded-lg text-white text-base font-semibold font-['Montserrat'] leading-[18px]">
              {text}
            </div>
            <div className="mt-[1.5rem] text-white flex-col justify-start items-start gap-1.5 flex">
              <li className="text-zinc-100 text-sm font-normal font-['Montserrat']">
                Revision to developer
              </li>
              <li className="text-zinc-100 text-sm font-normal font-['Montserrat']">
                General Testing
              </li>
              <li className="text-zinc-100 text-sm font-normal font-['Montserrat']">
                Release Website
              </li>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page1;
