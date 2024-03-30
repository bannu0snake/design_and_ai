import React from "react";
import Pin from "../../assets/images/pin.png";
import Image from "../../assets/images/unsplash_pUhxoSapPFA.png";
const UserPersona2 = () => {
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
                  : Roberta Monnsen
                </div>
                <div className="text-white text-sm font-normal font-montserrat leading-normal">
                  : 15 July, 1975
                </div>
                <div className="text-white text-sm font-normal font-montserrat leading-normal">
                  : 47 Years old
                </div>
                <div className="text-white text-sm font-normal font-montserrat leading-normal">
                  : Designer
                </div>
                <div className="text-white text-sm font-normal font-montserrat leading-normal">
                  : Berlin, Germany
                </div>
              </div>
            </div>
          </div>
          <div className="my-[1.5rem] px-4">
            <div className="text-white text-sm font-bold font-montserrat leading-normal">
              Statement
            </div>
            <div className="text-white text-sm font-normal font-rubik leading-normal">
              I participate in conferences across the globe to interact with
              like minded people and share knowledge.
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
                She is passionate for volunteering in design conferences held
                across globe. Roberta has been a speaker in various events and
                loves to make new connections. She has an experience of more
                than 20 years being a designer in the corporate sector. She is
                leading the design team in the company since 15 years. She is
                always keen on meeting other designers and young minds.
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
                  <div>To receive recognition among peers in the industry</div>
                </div>
                <div className="flex gap-2  items-start">
                  <span className="text-[1.25rem]/[1.25rem]"> • </span>
                  <div>To explore commercial scope</div>
                </div>
                <div className="flex gap-2  items-start">
                  <span className="text-[1.25rem]/[1.25rem]"> • </span>
                  <div>
                    To address the audience and make a long lasting impact
                  </div>
                </div>
                <div className="flex gap-2  items-start">
                  <span className="text-[1.25rem]/[1.25rem]"> • </span>
                  <div>
                    Build interesting and engaging content for the attendees.
                  </div>
                </div>
                <div className="flex gap-2  items-start">
                  <span className="text-[1.25rem]/[1.25rem]"> • </span>
                  <div>
                    Connect with other designers. To find potential
                    collaborators.
                  </div>
                </div>
                <div className="flex gap-2  items-start">
                  <span className="text-[1.25rem]/[1.25rem]"> • </span>
                  <div>Travel around the city.</div>
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
                  <div>Hardworking</div>
                </div>
                <div className="flex gap-2  items-start">
                  <span className="text-[1.25rem]/[1.25rem]"> • </span>
                  <div>Influencer</div>
                </div>
                <div className="flex gap-2  items-start">
                  <span className="text-[1.25rem]/[1.25rem]"> • </span>
                  <div>Extrovert</div>
                </div>
                <div className="flex gap-2  items-start">
                  <span className="text-[1.25rem]/[1.25rem]"> • </span>
                  <div>Explorer</div>
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
                  <div>
                    Understanding the credibility of the event. Hassles, because
                    of travelling.
                  </div>
                </div>
                <div className="flex gap-2  items-start">
                  <span className="text-[1.25rem]/[1.25rem]"> • </span>
                  <div>
                    Have other commitments in the company she is working with.
                  </div>
                </div>
                <div className="flex gap-2  items-start">
                  <span className="text-[1.25rem]/[1.25rem]"> • </span>
                  <div>Scheduling her stay in an effective manner.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserPersona2;
