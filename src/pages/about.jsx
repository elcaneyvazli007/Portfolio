import React from "react";
import profil from "../img/2.jpg";
import Experience from "../components/experience";
import Progress from "../components/progress";

const about = () => {
  return (
    <div className="bg-black mb-[5rem]">
      <div className="container mx-auto">
        <h1 className="text-[4rem] md:text-[6rem] text-white font-black text-center mt-[8rem] md:mt-[0rem]">
          About <span className="text-primary"> Me </span>{" "}
        </h1>
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          <img
            src={profil}
            draggable="false"
            alt=""
            className="rounded-full border-4 border-primary w-[30rem] md:w-[44rem] h-[30rem] md:h-[44rem] object-cover"
          />
          <div className="flex flex-col gap-10">
            <div className="flex flex-col lg:flex-row items-start md:items-center justify-center gap-5">
              <div className="flex flex-col pr-[0rem] md:pr-[10rem] gap-5">
                <p className="text-[1.6rem] text-white font-normal">
                  First Name:<span className="font-bold">Elcan</span>
                </p>
                <p className="text-[1.6rem] text-white font-normal">
                  Last Name:<span className="font-bold">Eyvazlı </span>
                </p>
                <p className="text-[1.6rem] text-white font-normal">
                  Birthdate:<span className="font-bold">29.05.2003</span>
                </p>
                <p className="text-[1.6rem] text-white font-normal">
                  Nationality:<span className="font-bold">Azerbaijan</span>
                </p>
                <p className="text-[1.6rem] text-white font-normal">
                  Experience:<span className="font-bold">1 Year</span>
                </p>
                <p className="text-[1.6rem] text-white font-normal">
                  Address:<span className="font-bold">Sumqayit</span>
                </p>
              </div>
              <div className="flex flex-col gap-5">
                <p className="text-[1.6rem] text-white font-normal">
                  Freelance:<span className="font-bold">Available</span>
                </p>
                <p className="text-[1.6rem] text-white font-normal">
                  Langages:<span className="font-bold">English</span>
                </p>
                <p className="text-[1.6rem] text-white font-normal">
                  Phone:<span className="font-bold">+994513910242</span>
                </p>
                <p className="text-[1.6rem] text-white font-normal">
                  Email:
                  <span className="font-bold">elcaneyvazli77@gmail.com</span>
                </p>
                <p className="text-[1.6rem] text-white font-normal">
                  Degree:<span className="font-bold">Bachelor</span>
                </p>
                <p className="text-[1.6rem] text-white font-normal">
                  Github:<span className="font-bold">elcaneyvazli007 </span>
                </p>
              </div>
            </div>
            <a
              href="#"
              className="text-center text-[2rem] text-white p-[1rem] border-2 border-primary hover:bg-primary rounded-[3rem] md:w-[50%] w-[100%]"
            >
              Dowload My CV
            </a>
          </div>
        </div>
      </div>

      <div className="mt-[5rem]">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row gap-[3rem] md:gap-0">
            <div className="flex flex-col items-start flex-1 gap-10">
              <h1 className="text-[2.5rem] font-bold text-primary text-center">
                Education
              </h1>
              <div>
                <Experience />
                <Experience />
              </div>
            </div>
            <div className="flex flex-col items-start flex-1 gap-10">
              <h1 className="text-[2.5rem] font-bold text-primary text-center">
                Experience
              </h1>
              <div>
                <Experience />
                <Experience />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto py-[3rem]">
        <div className="flex flex-col items-start gap-10">
          <h1 className="text-[3rem] text-white font-bold">Skills</h1>
          <div className="flex md:flex-row flex-col flex-wrap items-start gap-[3rem]">
            <Progress />
            <Progress />
            <Progress />
            <Progress />
            <Progress />
            <Progress />
            <Progress />
            <Progress />
          </div>
        </div>
      </div>
    </div>
  );
};

export default about;
