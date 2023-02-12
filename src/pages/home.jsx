import React from "react";
import './home.css'
import profil from "../img/2.jpg";
import hand from "../img/hand.svg";
import Typical from "react-typical";
import Buttonlink from "../components/buttonlink";
const home = () => {
  return (
    <div className="home h-screen w-screen flex items-center">
      <div className="container w-[100%] mx-auto">
        <div className="flex md:flex-row flex-col items-center justify-between gap-[10rem]">
          <img
            src={profil}
            draggable="false"
            alt=""
            className="md:w-[40rem] md:h-[40rem] h-[30rem] w-[30rem] rounded-full object-cover border-4 border-primary"
          />

          <div className="flex-1">
            <div className="flex items-center">
              <div className="w-[7rem] h-[.1rem] bg-primary mx-[1rem]"></div>
              <h1 className="text-[4rem] text-white mr-[1rem] font-bold">Hi, There</h1>
              <img src={hand} alt="" className="w-[5rem] h-[5rem]" />
            </div>
            <h1 className="text-white md:text-[4rem] text-[2rem] flex">
              I'm
              <Typical
                steps={[
                  "Elcan Eyvazlı",
                  5000,
                  "Fronte-End Developer",
                  3000,
                  "Web Designer",
                  3000,
                  "Copywriter",
                  3000,
                ]}
                loop={Infinity}
                wrapper="p"
                className="md:text-[4rem] text-[2rem] text-primary ml-[1rem] font-bold"
              />
            </h1>
            <p className="md:text-[2rem] text-[1.2rem] text-white font-thin">
              I'm a Freelance UI/UX Designer and Developer based in London,
              England. I strives to build immersive and beautiful web
              applications through carefully crafted code and user-centric
              design.
            </p>
            <div className="flex items-center gap-10 pt-[3rem]">
              <Buttonlink text="More About Me" link="/about"/>
              <Buttonlink text="Portfolio" link="/portfolio"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default home;
