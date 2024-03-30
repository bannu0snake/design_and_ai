import React from "react";
import BgImage from "../../assets/images/bgimage.png";
import Quote from "../../assets/svgs/Quote Mark.svg";
import bulb from "../../assets/svgs/roles/el_idea.svg";
import Group from "../../assets/svgs/roles/Group.svg";
import Group1 from "../../assets/svgs/roles/Group1.svg";
import Group2 from "../../assets/svgs/roles/Group2.svg";
import Vector from "../../assets/svgs/roles/Vector.svg";
import Laptop from "../../assets/svgs/roles/bi_laptop-fill.svg";
const MyRole = () => {
  return (
    <div className="w-full pb-[6rem]">
      <div className="px-[7rem] mt-8 py-8">
        <div className="flex flex-col justify-center items-center">
          <div className="text-center text-white text-5xl font-bold font-bagoss leading-[64px]">
            My Role
          </div>
          <div className="w-[730px] text-center">
            <span className="text-white text-lg font-normal font-inter leading-loose">
              As a User experience designer, I made sure that the{" "}
            </span>
            <span className="text-white text-lg font-bold font-inter leading-loose">
              overall experience for the user
            </span>
            <span className="text-white text-lg font-normal font-inter leading-loose">
              {" "}
              from registeration to taking part in the conference was smooth and
              user friendly.{" "}
            </span>
          </div>
          <div className="grid grid-cols-3 gap-[1.5rem]">
            <div className="rounded-lg flex-col justify-start items-center gap-6 inline-flex">
              <div className="w-8 h-8 px-[0.45px] justify-center items-center inline-flex">
                <div className="h-8 relative"></div>
              </div>
              <div className="flex-col justify-start items-center gap-2 flex">
                <img className="mb-4" src={Group2} alt="" srcset="" />
                <div className="text-center text-white text-2xl font-semibold font-rubik leading-loose">
                  Research
                </div>
                <div className="text-center text-white text-base font-light font-rubik leading-relaxed">
                  Desk study was done to identify the needs, requirements and
                  benchmarking other conferences
                </div>
              </div>
            </div>
            <div className="rounded-lg flex-col justify-start items-center gap-6 inline-flex">
              <div className="w-8 h-8 px-[0.45px] justify-center items-center inline-flex">
                <div className="h-8 relative"></div>
              </div>
              <div className="flex-col justify-start items-center gap-2 flex">
                <img className="mb-4" src={bulb} alt="" srcset="" />
                <div className="text-center text-white text-2xl font-semibold font-rubik leading-loose">
                  Ideation
                </div>
                <div className="text-center text-white text-base font-light font-rubik leading-relaxed">
                  Defining scope, building a timeline, design thinking,
                  brainstorming etc.
                </div>
              </div>
            </div>
            <div className="rounded-lg flex-col justify-start items-center gap-6 inline-flex">
              <div className="w-8 h-8 px-[0.45px] justify-center items-center inline-flex">
                <div className="h-8 relative"></div>
              </div>
              <div className="flex-col justify-start items-center gap-2 flex">
                <img className="mb-4" src={Group} alt="" srcset="" />
                <div className="text-center text-white text-2xl font-semibold font-rubik leading-loose">
                  Provide Assets
                </div>
                <div className="text-center text-white text-base font-light font-rubik leading-relaxed">
                  Ensure assets contained in the UI are usable and provided in
                  multiple sizes.
                </div>
              </div>
            </div>
            <div className="rounded-lg flex-col justify-start items-center gap-6 inline-flex">
              <div className="w-8 h-8 px-[0.45px] justify-center items-center inline-flex">
                <div className="h-8 relative"></div>
              </div>
              <div className="flex-col justify-start items-center gap-2 flex">
                <img className="mb-4" src={Laptop} alt="" srcset="" />
                <div className="text-center text-white text-2xl font-semibold font-rubik leading-loose">
                  User Interface and Experience
                </div>
                <div className="text-center text-white text-base font-light font-rubik leading-relaxed">
                  Ensure assets contained in the UI are usable and provided in
                  multiple sizes.
                </div>
              </div>
            </div>
            <div className="rounded-lg flex-col justify-start items-center gap-6 inline-flex">
              <div className="w-8 h-8 px-[0.45px] justify-center items-center inline-flex">
                <div className="h-8 relative"></div>
              </div>
              <div className="flex-col justify-start items-center gap-2 flex">
                <img className="mb-4" src={Vector} alt="" srcset="" />
                <div className="text-center text-white text-2xl font-semibold font-rubik leading-loose">
                  Information Architecture and User Flow
                </div>
                <div className="text-center text-white text-base font-light font-rubik leading-relaxed">
                  To make sure any task can be completed efficiently and
                  effortlessly.
                </div>
              </div>
            </div>
            <div className="rounded-lg flex-col justify-start items-center gap-6 inline-flex">
              <div className="w-8 h-8 px-[0.45px] justify-center items-center inline-flex">
                <div className="h-8 relative"></div>
              </div>
              <div className="flex-col justify-start items-center gap-2 flex">
                <img className="mb-4" src={Group1} alt="" srcset="" />
                <div className="text-center text-white text-2xl font-semibold font-rubik leading-loose">
                  User testing
                </div>
                <div className="text-center text-white text-base font-light font-rubik leading-relaxed">
                  User testing using UT and AB testing, so that the website and
                  the social media assets can be well received by the user.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="reative">
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
            Design Strategy
          </div>
          <div className="text-center w-[50%] text-white text-base font-normal font-inter leading-relaxed">
            A design strategy shows the value your service will bring to people
            and describes this value to a goal. It also describes about the
            steps you will take to achieve the goal.
          </div>
        </div>
        <div className="flex justify-around mt-[-360px] gap-[3rem] mx-[2rem]">
          <div className="bg-[#383838] h-fit">
            <div className="text-white text-[40px] font-bold font-rubik leading-relaxed mt-[250px]  px-[2rem]">
              Intention
            </div>
            <div className="p-[2rem] flex gap-[1.5rem]">
              <img className="h-4 w-4" src={Quote} />
              <div className="flex flex-col gap-[1.5rem]">
                <div className="text-white text-lg font-normal font-inter leading-loose">
                  Creating an easy yet unique experience for people who are
                  seeking to gain and share knowledge on “Teaching AI in
                  Design”. It was a great opportunity for collaboration among
                  designers all over the world.
                </div>
                <div className="text-white text-lg font-bold font-['Inter'] leading-7 mb-[2rem]">
                  Intention to participate
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#383838]  h-fit">
            <div className="text-white text-[40px] font-bold font-rubik leading-relaxed mt-[300px] p-[2rem]">
              Intention
            </div>
            <div className="p-[2rem] flex gap-[1.5rem]">
              <img className="h-4 w-4" src={Quote} />
              <div className="flex flex-col gap-[1.5rem]">
                <div className="text-white text-lg font-normal font-inter leading-loose">
                  Creating an easy yet unique experience for people who are
                  seeking to gain and share knowledge on “Teaching AI in
                  Design”. It was a great opportunity for collaboration among
                  designers all over the world.
                </div>
                <div className="text-white text-lg font-bold font-['Inter'] leading-7 mb-[2rem]">
                  Personas
                </div>
              </div>
            </div>
          </div>
          <div className=" bg-[#383838]  h-fit">
            <div className="text-white text-[40px] font-bold font-rubik leading-relaxed mt-[250px] p-[2rem]">
              Intention
            </div>
            <div className="p-[2rem] flex gap-[1.5rem]">
              <img className="h-4 w-4" src={Quote} />
              <div className="flex flex-col gap-[1.5rem]">
                <div className="text-white text-lg font-normal font-inter leading-loose">
                  Creating an easy yet unique experience for people who are
                  seeking to gain and share knowledge on “Teaching AI in
                  Design”. It was a great opportunity for collaboration among
                  designers all over the world.
                </div>
                <div className="text-white text-lg font-bold font-['Inter'] leading-7 mb-[2rem]">
                  Constraint
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-[3rem] mt-[2rem] w-[60%] mx-auto">
          <div className="bg-[#383838] mt-[2rem]">
            <div className="text-white text-[40px] font-bold font-rubik leading-relaxed p-[2rem]">
              General task
            </div>
            <div className="p-[2rem] flex gap-[1.5rem]">
              <img className="h-4 w-4" src={Quote} />
              <div className="flex flex-col gap-[1.5rem]">
                <div className="text-white text-lg font-normal font-inter leading-loose">
                  <li>Registeration</li>
                  <li>Workshops and events</li>
                  <li>Payment</li>
                  <li>Streaming live</li>
                  <li>user satisfaction</li>
                </div>
                <div className="text-white text-lg font-bold font-['Inter'] leading-7 mb-[2rem]">
                  Constraint
                </div>
              </div>
            </div>
          </div>
          <div className=" bg-[#383838] mt-[2rem] ">
            <div className="text-white text-[40px] font-bold font-rubik leading-relaxed p-[2rem]">
              Success Factor
            </div>
            <div className="p-[2rem] flex gap-[1.5rem]">
              <img className="h-4 w-4" src={Quote} />
              <div className="flex flex-col gap-[1.5rem]">
                <div className="text-white text-lg font-normal font-inter leading-loose">
                  <li>Website</li>
                  <li>Holistic approach</li>
                  <li>See progress order untill success</li>
                  <li>Consistency</li>
                </div>
                <div className="text-white text-lg font-bold font-['Inter'] leading-7 mb-[2rem]">
                  Constraint
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyRole;
