import React from "react";
import portfolioimg from "../img/portfolio.png";
import Modal from "../components/modal";

const Portfolio = () => {
  const [modal, setModal] = React.useState(false);

  return (
    <div className="bg-black container mx-auto">
      <div className="flex flex-col gap-[3rem]">
        <div>
          <h1 className="sm:text-[6rem] text-[4rem] text-center text-white font-black sm:mt-[0] mt-[10rem]">
            My <span className="text-primary">Portfolio</span>
          </h1>
          <p className="text-[2rem] text-center text-white font-extralight">A FEW RECENT DESIGN AND CODING PROJECTS. WANT TO SEE MORE? EMAIL ME</p>
        </div>

        <div className="flex md:flex-row flex-col flex-wrap items-center justify-center gap-[3rem]">
          <div className="sm:w-[30rem] w-[25rem] sm:h-[20rem] h-[15rem] rounded-[1rem]">
            <img
              src={portfolioimg}
              onClick={() => setModal(!modal)}
              draggable="false"
              alt=""
              className="w-full h-full object-cover rounded-[1rem]"
            />
          </div>
          <div className="sm:w-[30rem] w-[25rem] sm:h-[20rem] h-[15rem] rounded-[1rem]">
            <img
              src={portfolioimg}
              onClick={() => setModal(!modal)}
              draggable="false"
              alt=""
              className="w-full h-full object-cover rounded-[1rem]"
            />
          </div>
          <div className="sm:w-[30rem] w-[25rem] sm:h-[20rem] h-[15rem] rounded-[1rem]">
            <img
              src={portfolioimg}
              onClick={() => setModal(!modal)}
              draggable="false"
              alt=""
              className="w-full h-full object-cover rounded-[1rem]"
            />
          </div>
          {modal && <Modal modal={modal} setModal={setModal} />}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
