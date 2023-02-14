import React from "react";
import Buttonlink from "./buttonlink";
import blogpost from "../img/blogpost.jpg";
import "./blogcard.css";
import { AiOutlineArrowRight } from "react-icons/ai";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const blogcard = () => {
  return (
    <div className="flex flex-col items-start gap-[1rem] bg-grey rounded-[2rem]">
      <div className="overflow-hidden rounded-t-[1.5rem] ">
        <img
          src={blogpost}
          draggable="false"
          className="sm:w-[100%] md:w-[50rem] h-[30rem] object-cover rounded-t-[1.5rem] hover:scale-125 transition duration-500 ease-in-out"
          alt=""
        />
      </div>
      <div className="p-[1.5rem] flex flex-col gap-[2rem]">
        <div className="flex flex-row gap-[1rem]">
          <div className="bg-[#00000099] py-[1.2rem] px-[2rem] rounded-[1rem]">
            <p className="text-white text-[1.4rem] hover-underline-animation">
              Business
            </p>
          </div>
          <div className="bg-[#00000099] py-[1.2rem] px-[2rem] rounded-[1rem]">
            <p className="text-white text-[1.4rem] hover-underline-animation">
              Idea
            </p>
          </div>
          <div className="bg-[#00000099] py-[1.2rem] px-[2rem] rounded-[1rem]">
            <p className="text-white text-[1.4rem] hover-underline-animation">
              Story
            </p>
          </div>
        </div>
        <div>
          <h1 className="text-primary text-[2.5rem] font-extrabold">
            Create a Wordpress theme from Scractch
          </h1>
          <p className="text-white text-[1.6rem] font-normal flex-1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed blandit
            massa vel mauris Lorem ipsum dolor sit amet, consectetur adipiscing
            elit.
          </p>
        </div>
        <div className="flex flex-row items-center gap-[1rem]">
          <div className="w-[5rem] h-[.1rem] bg-primary"></div>
          <Link to="/blogtext" className="">
            <p className="text-white text-[1.8rem] font-bold hover-underline-animation">Read More</p>
          </Link>
          <AiOutlineArrowRight className="text-white w-[1.5rem] h-[1.5rem]"/>
        </div>
      </div>
    </div>
  );
};

export default blogcard;
