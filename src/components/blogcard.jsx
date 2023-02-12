import React from "react";
import Buttonlink from "./buttonlink";
import blogpost from "../img/blogpost.jpg";

const blogcard = () => {
  return (
    <div className="flex flex-col items-start gap-[1rem]">
      <div className="overflow-hidden rounded-[1.5rem]">
        <img
          src={blogpost}
          draggable="false"
          className="w-[100%] h-[100%] object-cover rounded-[1.5rem] hover:scale-125 transition duration-500 ease-in-out"
          alt=""
        />
      </div>
      <h1 className="text-primary text-[2.5rem] font-bold">
        Create a Wordpress theme from Scractch
      </h1>
      <p className="text-white text-[1.6rem] font-normal flex-1">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed blandit massa vel mauris Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
      </p>
      <Buttonlink text="Read More" link="/blogtext" />
    </div>
  );
};

export default blogcard;
