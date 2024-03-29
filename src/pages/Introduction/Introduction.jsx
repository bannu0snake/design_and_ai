import React from "react";
import BxFoodMenu from "../../assets/svgs/bx_food-menu.svg";
import Frame6 from "../../assets/svgs/Frame 6.svg";
import Frame7 from "../../assets/svgs/Frame 7.svg";
import CardMembership from "../../assets/svgs/card_membership_black_24dp 1.svg";
import DeliveryDining from "../../assets/svgs/delivery_dining_black_24dp 1.svg";
import IcBaseline from "../../assets/svgs/ic_baseline-event-note.svg";
import LaUniversity from "../../assets/svgs/la_university.svg";
import IphoneBlack from "../../assets/svgs/phone_iphone_black_24dp (1) 1.svg";
import ReceiptBlack from "../../assets/svgs/receipt_long_black_24dp (1) 1.svg";
import Image1 from "../../assets/images/image1.jpg";
import Image2 from "../../assets/images/image2.png";
import Image3 from "../../assets/images/image3.png";
import Image4 from "../../assets/images/image4.png";
const Introduction = () => {
  return (
    <div className="flex flex-col w-full px-[7rem] pb-24">
      <div className="text-[#E1E65C] text-[1.5rem]/[1.5rem] font-rubik font-normal mx-auto">
        INTRODUCTION
      </div>
      <div className="mt-[2rem] text-white text-[2.625rem]/[1.25rem] font-bagoss mx-auto py-5">
        About This Project
      </div>
      <div className="text-white font-rubik w-[50%] mx-auto text-[1.25rem]/[160%] mt-[4rem]">
        This project taught me that being an user experience designer is so much
        more than just creating screens, prototypes and mockups. In this
        project, me and my team at Köln Institute of Design, Germany created a
        whole experience for an event i.e. a live conference held at KISD,
        Germany in July 2022.
      </div>
      <div className="flex flex-row gap-2 mt-8">
        <div className="basis-1/2 flex-col justify-center items-start gap-6 inline-flex">
          <div className="text-yellow-300 text-2xl font-normal font-['Rubik'] leading-tight">
            GET STARTED
          </div>
          <div className="text-white text-[42px] font-bold font-['Bagoss Standard'] leading-tight">
            Overview
          </div>
          <div className="w-[700px] text-white text-xl font-normal font-['Rubik'] leading-loose">
            The conference focussed on the topic of “Teaching AI in Design”.
            This project was completed in a span of 3 months by creating a whole
            experience for this conference including infrastructure, program,
            catering, design and communication. The three day conference was
            held at Köln Institute of Design, Cologne, Germany and had multiple
            speakers and attendees from across the globe.
          </div>
        </div>
        <div className="w-[502px] h-[550px] relative">
          <div className="w-[486px] h-[486px] left-[8px] top-[32px] absolute">
            <div className="w-[486px] h-[486px] left-0 top-0 absolute rounded-full border-8 border-stone-900" />
            <div className="w-[340px] h-[340px] left-[73px] top-[73px] absolute bg-stone-900 rounded-full shadow" />
            <div className="w-[200px] h-[200px] left-[143px] top-[143px] absolute bg-zinc-800 rounded-full" />
          </div>
          <div className="w-[234px] h-[204px] left-[134px] top-[163px] absolute">
            <div className="w-16 h-16 p-4 left-[85px] top-0 absolute bg-neutral-700 rounded-[64px] shadow justify-center items-center inline-flex">
              <div className="w-8 h-8 relative flex-col justify-items-center flex">
                <img src={BxFoodMenu} alt="" srcset="" />
              </div>
            </div>
            <div className="w-16 h-16 pl-[15px] pr-3.5 pt-[15px] pb-3.5 left-0 top-[140px] absolute bg-neutral-700 rounded-[64px] shadow justify-center items-center inline-flex">
              <div className="w-8 h-8 relative flex-col justify-items-center flex">
                <img src={LaUniversity} alt="" srcset="" />
              </div>
            </div>
            <div className="w-16 h-16 p-4 left-[170px] top-[140px] absolute bg-neutral-700 rounded-[64px] shadow justify-center items-center inline-flex">
              <div className="w-8 h-8 relative flex-col justify-items-center flex">
                <div className="w-8 h-8 relative flex-col justify-items-center">
                  <img src={ReceiptBlack} alt="" srcset="" />
                </div>
              </div>
            </div>
          </div>
          <div className="w-[502px] h-[550px] left-0 top-0 absolute">
            <div className="w-16 h-16 p-4 left-0 top-[135px] absolute bg-neutral-700 rounded-[64px] justify-center items-center inline-flex">
              <div className="w-8 h-8 relative flex-col justify-items-center flex">
                <img src={IphoneBlack} alt="" srcset="" />
              </div>
            </div>
            <div className="w-16 h-16 left-[438px] top-[135px] absolute bg-neutral-700 rounded-full">
              <img src={Frame7} alt="" srcset="" className="" />
            </div>
            <div className="w-16 h-16 left-[219px] top-0 absolute bg-neutral-700 rounded-[64px]">
              <div className="w-16 h-16">
                <img src={Frame6} alt="" srcset="" className="" />
              </div>
            </div>
            <div className="w-16 h-16 p-4 left-[219px] top-[486px] absolute bg-neutral-700 rounded-[64px] justify-center items-center inline-flex z-20">
              <div className="w-8 h-8 relative flex-col justify-items-center flex">
                <img src={CardMembership} alt="" srcset="" />
              </div>
            </div>
            <div className="w-16 h-16 p-3.5 left-[422px] top-[374px] absolute bg-neutral-700 rounded-[64px] justify-center items-center inline-flex">
              <div className="w-9 h-9 relative flex-col justify-items-center flex">
                <img src={IcBaseline} alt="" srcset="" />
              </div>
            </div>
            <div className="w-16 h-16 p-4 left-[16px] top-[374px] absolute bg-neutral-700 rounded-[64px] justify-center items-center inline-flex">
              <div className="w-8 h-8 relative flex-col justify-items-center flex">
                <img src={DeliveryDining} alt="" srcset="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row gap-2">
        <div className="basis-1/2 flex-col justify-start items-start inline-flex">
          <div className="flex-col w-[700px] justify-start items-start gap-6 flex">
            <div className="text-white text-[42px] font-bold font-['Bagoss Standard'] leading-tight">
              The Story
            </div>
            <div className="text-white w-[550px] text-xl font-normal font-['Rubik'] leading-loose">
              Along with learning the aspects of AI in Design from the renowned
              speakers throughout the globe, attending workshops, making pizzas
              through AI, going to various exhibitions, this project gave me a
              true understanding of experience design which was not limited to
              conducting research, creating personas, building wireframes etc.
              Initially, I joined the team to work on the designing aspect of
              the conference and giving it an identity but learnt so much along
              the way.
            </div>
          </div>
        </div>
        <div className="relative bg-inherit mt-[-2rem] w-[502px] mx-auto">
          <div className="w-[484px] h-[228px] top-0 absolute bg-neutral-800 z-10" />
          <img
            src={Image1}
            className="absolute left-[-44px] top-[180px] z-30 h-[81px] w-[227px]"
          />
          <img
            src={Image2}
            className="absolute left-[30px] top-[287px] z-30 h-[90px] w-[227px]"
          />
          <img
            src={Image3}
            className="absolute right-[0px] top-[265px] z-30 h-[87px] w-[173px]"
          />
          <img
            src={Image4}
            className="absolute left-[151px] bottom-[-10px] z-30 h-[81px] w-[277px]"
          />
          <div className="w-[484px] h-[456px] absolute bg-neutral-700 rounded-full" />
        </div>
      </div>
    </div>
  );
};

export default Introduction;
