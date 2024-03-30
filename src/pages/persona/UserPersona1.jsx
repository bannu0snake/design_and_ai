import React from "react";
import Pin from "../../assets/images/pin.png";
import Image from "../../assets/images/boy.png";
const UserPersona1 = () => {
  return (
    <div className="ml-[7rem] flex flex-col gap-[2rem] py-4">
      <div>
        <div className="flex flex-row items-center">
          <div>
            <img src={Pin} alt="" srcset="" />
          </div>
          <div className="font-montserrat text-[2rem] text-white font-normal">
            Define
          </div>
        </div>
        <div className="mt-[1rem] flex">
          <div className="basis-1/2 text-white text-[4rem]">USER PERSONA</div>
          <div className="flex gap-[2rem]">
            <div className="flex flex-col">
              <div className=" text-white text-sm font-black font-montserrat leading-[17px]">
                Take aways
              </div>
              <div className="flex gap-8 mt-2">
                <div className="text-white text-sm font-normal font-montserrat leading-normal">
                  <li>User background</li>
                  <li>Personality</li>
                  <li>Goals</li>
                </div>
                <div className="text-white text-sm font-normal font-montserrat leading-normal">
                  <li>Frustation</li>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-rows-2 grid-cols-3 grid-flow-col gap-4 pr-8">
        <div className="row-span-2 col-span-1 bg-neutral-700 rounded-2xl">
          <img className="w-full" src={Image} alt="" />
          <div className="flex p-4">
            <div className="flex flex-row">
              <div className="w-[120px] flex flex-col gap-4">
                <div className="text-white text-sm font-normal font-montserrat leading-normal">
                  Full Name
                </div>
                <div className="text-white text-sm font-normal font-montserrat leading-normal">
                  Date of birth
                </div>
                <div className="text-white text-sm font-normal font-montserrat leading-normal">
                  Age
                </div>
                <div className="text-white text-sm font-normal font-montserrat leading-normal">
                  Job
                </div>
                <div className="text-white text-sm font-normal font-montserrat leading-normal">
                  Location
                </div>
              </div>
              <div className=" flex flex-col gap-4">
                <div className="text-white text-sm font-normal font-montserrat leading-normal">
                  : Jacob Flintrop
                </div>
                <div className="text-white text-sm font-normal font-montserrat leading-normal">
                  : 10 May, 1999
                </div>
                <div className="text-white text-sm font-normal font-montserrat leading-normal">
                  : 23 Years old
                </div>
                <div className="text-white text-sm font-normal font-montserrat leading-normal">
                  : Student
                </div>
                <div className="text-white text-sm font-normal font-montserrat leading-normal">
                  : Cologne, Germany
                </div>
              </div>
            </div>
          </div>
          <div className="my-[1.5rem] px-4">
            <div className="text-white text-sm font-bold font-montserrat leading-normal">
              Statement
            </div>
            <div className="text-white text-sm font-normal font-rubik leading-normal">
              I am curious to learn about AI in design and woud like to attend a
              conference which will also help me build connections.{" "}
            </div>
          </div>
        </div>
        <div className="col-span-1  h-full">
          <div className="px-[1rem] py-4 bg-neutral-700 rounded-2xl justify-center items-center inline-flex  h-full w-full">
            <div className="self-stretch flex-col justify-start items-start gap-3 inline-flex">
              <div className="text-white text-2xl font-bold font-montserrat leading-normal">
                About
              </div>
              <div className=" text-white text-sm font-normal font-rubik leading-normal">
                He is a design student who is passionate to learn new things
                everyday. Jacob is a person who was yearning for any event or
                conference on site as everything was held online in the past two
                years. He often likes to socialise and spend time with friends
                and professionals in the field. He is very curious to take part
                in the conference and build new connections.
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-1">
          <div className="px-[1rem] py-4 bg-neutral-700 rounded-2xl items-start inline-flex  h-full w-full">
            <div className="self-stretch flex-col justify-start items-start gap-3 inline-flex">
              <div className="text-yellow-300 text-2xl font-bold font-montserrat leading-normal">
                Goals
              </div>
              <div className=" text-white text-sm font-normal font-rubik leading-normal">
                <div className="flex gap-2  items-start">
                  <span className="text-[1.25rem]/[1.25rem]"> • </span>
                  <div>Register to conference without any hassle.</div>
                </div>
                <div className="flex gap-2  items-start">
                  <span className="text-[1.25rem]/[1.25rem]"> • </span>
                  <div>
                    Take part in workshops and events in the conference.
                  </div>
                </div>
                <div className="flex gap-2  items-start">
                  <span className="text-[1.25rem]/[1.25rem]"> • </span>
                  <div>
                    Attend the conference on site and build connections.
                  </div>
                </div>
                <div className="flex gap-2  items-start">
                  <span className="text-[1.25rem]/[1.25rem]"> • </span>
                  <div>Get complete understanding of the event.</div>
                </div>
                <div className="flex gap-2  items-start">
                  <span className="text-[1.25rem]/[1.25rem]"> • </span>
                  <div>
                    Can see the price of the ticket he wants to buy and its
                    availability.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-1">
          <div className="px-[1rem] py-4 bg-neutral-700 rounded-2xl items-start inline-flex  h-full w-full">
            <div className="self-stretch flex-col justify-start items-start gap-3 inline-flex">
              <div className="text-[#FECF29] text-2xl font-bold font-montserrat leading-normal">
                Personality
              </div>
              <div className=" text-white text-sm font-medium font-rubik leading-normal">
                <div className="flex gap-2  items-start">
                  <span className="text-[1.25rem]/[1.25rem]"> • </span>
                  <div>Seeker</div>
                </div>
                <div className="flex gap-2  items-start">
                  <span className="text-[1.25rem]/[1.25rem]"> • </span>
                  <div>Smart</div>
                </div>
                <div className="flex gap-2  items-start">
                  <span className="text-[1.25rem]/[1.25rem]"> • </span>
                  <div>Interested</div>
                </div>
                <div className="flex gap-2  items-start">
                  <span className="text-[1.25rem]/[1.25rem]"> • </span>
                  <div>Extrovert</div>
                </div>
                <div className="flex gap-2  items-start">
                  <span className="text-[1.25rem]/[1.25rem]"> • </span>
                  <div>Agile</div>
                </div>
                <div className="flex gap-2  items-start">
                  <span className="text-[1.25rem]/[1.25rem]"> • </span>
                  <div>Adapt</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-1">
          <div className="px-[1rem] py-4 bg-neutral-700 rounded-2xl items-start inline-flex  h-full w-full">
            <div className="self-stretch flex-col justify-start items-start gap-3 inline-flex">
              <div className="text-[#FF3D3D] text-2xl font-bold font-montserrat leading-normal">
                Frustations
              </div>
              <div className=" text-white text-sm font-normal font-rubik leading-normal">
                <div className="flex gap-2  items-start">
                  <span className="text-[1.25rem]/[1.25rem]"> • </span>
                  <div>Don’t know when should he register for the event.</div>
                </div>
                <div className="flex gap-2  items-start">
                  <span className="text-[1.25rem]/[1.25rem]"> • </span>
                  <div>
                    Often disappointed, because many events are getting
                    cancelled or online due to pandemic.
                  </div>
                </div>
                <div className="flex gap-2  items-start">
                  <span className="text-[1.25rem]/[1.25rem]"> • </span>
                  <div>Have other commitments on the days of the event.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserPersona1;
