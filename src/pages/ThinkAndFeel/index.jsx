import React from "react";
import Avatar from "../../assets/images/ThinkAndFeel.png";

const base = 700;

const ThinkAndFeel = () => {
  return (
    <div style={{ width: "100%" }}>
      <div
        style={{
          color: "white",
          position: "relative",
          height: `${2 * base + 20}px`,
          width: `${2 * base + 20}px`,
          margin: "auto",
        }}
      >
        <div
          style={{
            backgroundImage:
              "linear-gradient(180deg, rgba(39,39,39,1) 0%, rgba(61,61,61,1) 75%)",
            width: `${2 * base}px`,
            height: `${base}px`,
            clipPath: "polygon(50% 100%, 0 0, 100% 0)",
            position: "absolute",
            top: 0,
            left: "10px",
            zIndex: 0,
          }}
        >
          <div className="w-full items-center flex flex-col gap-11">
            <div className="text-center font-inter text-2xl leading-[3.5rem]">
              What does he
            </div>
            <div className="text-center text-yellow-300 text-5xl font-inter leading-[3.5rem]">
              Think & feel
            </div>
            <div className="justify-center flex gap-72 font-normal font-inter">
              <div className="w-60">Is the event expensive? </div>
              <div className="w-60 text-right">
                What will be the overall expense?
              </div>
            </div>
            <div className="justify-center flex gap-20 font-normal font-inter">
              <div className="w-60">
                How long should I wait before booking the event?{" "}
              </div>
              <div className="w-60 text-right">
                Who are the best speakers which I should not miss?
              </div>
            </div>
            <div className="w-60 text-center font-normal font-inter">
              Will I be able to attend all the days of the event?
            </div>
            <div className="font-normal font-inter">Who are the speakers?</div>
          </div>
        </div>
        <div
          style={{
            backgroundImage:
              "linear-gradient(270deg, rgba(39,39,39,1) 0%, rgba(61,61,61,1) 75%)",
            width: `${base}px`,
            height: `${2 * base}px`,
            clipPath: "polygon(100% 100%, 0% 50%, 100% 0)",
            position: "absolute",
            right: 0,
            top: "10px",
            zIndex: 0,
          }}
        ></div>
        <div
          style={{
            backgroundImage:
              "linear-gradient(0deg, rgba(39,39,39,1) 0%, rgba(61,61,61,1) 75%)",
            width: `${2 * base}px`,
            height: `${base}px`,
            clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
            position: "absolute",
            bottom: 0,
            left: "10px",
            zIndex: 0,
          }}
        ></div>
        <div
          style={{
            backgroundImage:
              "linear-gradient(90deg, rgba(39,39,39,1) 0%, rgba(61,61,61,1) 75%)",
            width: `${base}px`,
            height: `${2 * base}px`,
            clipPath: "polygon(0 0, 0 100%, 100% 50%)",
            position: "absolute",
            left: 0,
            top: "10px",
            zIndex: 0,
          }}
        ></div>
        <div
          style={{
            position: "absolute",
            zIndex: 1,
            top: `${base + 10}px`,
            left: `${base + 10}px`,
            transform: "translate(-50%, -50%)",
          }}
        >
          <img src={Avatar} alt="ThinkAndFeel" />
        </div>
      </div>
    </div>
  );
};

export default ThinkAndFeel;
