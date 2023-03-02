import React from "react";
import "./blogtext.css";
import { motion, useScroll, useSpring } from "framer-motion";
import { useParams } from "react-router-dom";
import  blogsData from "./blogsdata";

const Blogtext = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const { blogsId } = useParams();
  const thisBlog = blogsData.find((prod) => prod.id == blogsId);
  console.log(thisBlog)

  return (
    <div>
      <motion.div
        style={{ scaleX }}
        className="progress-bar fixed top-0 left-0 right-0 h-[1rem] bg-primary origin-[0%]"
      ></motion.div>
      <motion.div className="container mx-auto mt-[10rem] md:mt-[5rem] mb-[5rem]">
        <div className=" flex flex-col md:flex-row items-center md:items-start gap-[3rem] mb-[3rem] border-b-4 border-primary pb-[1rem]">
          <div className="flex-1 rounded-[1.5rem] md:w-[30rem] md:h-[30rem] lg:w-[50rem] lg:h-[50rem] overflow-hidden ">
            <img
              src={thisBlog.image1}
              draggable="false"
              className="w-[100%] h-[100%] object-cover rounded-[1.5rem] hover:scale-125 transition duration-500 ease-in-out"
              alt="blog"
            />
          </div>
          <div className="flex-1 flex flex-col items-start gap-[5rem]">
            <div className="flex flex-row items-center gap-[2rem]">
              <img
                src={thisBlog.image2}
                draggable="false"
                className="h-[7rem] w-[7rem] rounded-full object-cover border-2 border-primary"
                alt=""
              />
              <div className="flex flex-col items-start">
                <h1 className="text-white text-[1.6rem] font-bold">
                  {thisBlog.name}
                </h1>
                <p className="text-white text-[1.6rem] font-thin">
                  {thisBlog.date}
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-[]">
              <h1 className="text-primary text-[3rem] font-extrabold">
                {thisBlog.title}
              </h1>
              <p className="text-[2rem] text-white font-light">
                {thisBlog.text1}
              </p>
            </div>
          </div>
        </div>
        <p className="text-white text-[1.6rem]">{thisBlog.text2}</p>
      </motion.div>
    </div>
  );
};

export default Blogtext;
