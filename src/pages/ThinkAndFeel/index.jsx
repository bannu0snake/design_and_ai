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
        ></div>
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
