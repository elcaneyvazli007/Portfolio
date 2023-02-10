import React from "react";
import "./progress.css";

const progress = () => {
  return (
    <div>
      <div className="skill-box">
        <span className="title text-[1.8rem] font-bold text-white">HTML</span>
        <div className="skill-bar bg-grey h-[.8rem] w-[35rem] rounded-[3rem]">
          <span className="skill-per relative h-full w-[50%] rounded-[3rem] bg-primary block">
            <span className="tooltip absolute right-[-2.5rem] top-[-4rem] text-[1.6rem] text-white rounded-[.8rem] bg-primary z-1 px-[.6rem] py-[.2rem] ">
              50%
            </span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default progress;
