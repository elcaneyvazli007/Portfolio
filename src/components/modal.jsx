import React from "react";
import {
  AiOutlineClose,
  AiOutlineFundProjectionScreen,
  AiOutlineFieldTime,
} from "react-icons/ai";
import { BsPersonPlus, BsCodeSlash } from "react-icons/bs";
import {GiMoneyStack} from "react-icons/gi";
import Button from '../components/button'

const modal = ({ modal, setModal }) => {
  return (
    <div className="fixed h-screen w-screen top-0 left-0 after:content-[''] after:absolute after:w-screen after:h-screen after:top-0 after:left-0 after:bg-grey after:opacity-[60%] grid place-content-end">
      <div className="relative flex flex-col z-50 items-start p-[5rem] w-[30rem] sm:w-[50rem] md:w-[70rem] h-screen bg-grey">
        <img
          src='img/portfolio.png'
          draggable="false"
          className="w-full h-[10rem] sm:h-[20rem] md:h-[30rem] object-cover rounded-[1rem]"
          alt=""
        />
        <div className="flex flex-col items-start gap-[3rem]">
          <h1 className="text-primary text-[2.5rem] md:text-[4rem] font-extrabold">
            Proje Name
          </h1>
          <div className="flex flex-col items-start gap-[1rem]">
            <div className="flex items-center gap-[1rem]">
              <AiOutlineFundProjectionScreen className="w-[2rem] h-[2rem] text-white" />
              <p className="text-white text-[1.5rem] font-medium">
                Proje Type: <span className="font-normal">Website</span>
              </p>
            </div>
            <div className="flex items-center gap-[1rem]">
              <BsPersonPlus className="w-[2rem] h-[2rem] text-white" />
              <p className="text-white text-[1.5rem] font-medium">
                Client:{" "}
                <span className="font-normal">
                  Azerbaijan Future Studies Society
                </span>
              </p>
            </div>
            <div className="flex items-center gap-[1rem]">
              <AiOutlineFieldTime className="w-[2rem] h-[2rem] text-white" />
              <p className="text-white text-[1.5rem] font-medium">
                Duration: <span className="font-normal">1 month</span>
              </p>
            </div>
            <div className="flex items-center gap-[1rem]">
              <BsCodeSlash className="w-[2rem] h-[2rem] text-white" />
              <p className="text-white text-[1.5rem] font-medium">
                Technologies: <span className="font-normal">Html, Css, JavaScript</span>
              </p>
            </div>
            <div className="flex items-center gap-[1rem]">
              <GiMoneyStack className="w-[2rem] h-[2rem] text-white" />
              <p className="text-white text-[1.5rem] font-medium">
                Budget: <span className="font-normal">1000$</span>
              </p>
            </div>
            <Button text="PREVIEW" link="https://demo.futurestudies.az/"/>
          </div>
        </div>
        <div className="absolute top-0 right-0 p-[2rem]">
          <AiOutlineClose
            onClick={() => setModal(false)}
            className="text-white w-[3rem] h-[3rem]"
          />
        </div>
      </div>
    </div>
  );
};

export default modal;
