import React from "react";
import portfolioimg from "../img/portfolio.png";
import Modal from "../components/modal";

const Portfolio = () => {
  const [modal, setModal] = React.useState(false);

  const portdatas = [
    {
      id: 1,
      src: "img/portfolio.png",
    },
    {
      id: 2,
      src: "https://i.ibb.co/0nZ3Z3r/1.png",
    },
    {
      id: 3,
      src: "https://i.ibb.co/0nZ3Z3r/1.png",
    },
    {
      id: 4,
      src: "https://i.ibb.co/0nZ3Z3r/1.png",
    },
    {
      id: 5,
      src: "https://i.ibb.co/0nZ3Z3r/1.png",
    },
    {
      id: 6,
      src: "https://i.ibb.co/0nZ3Z3r/1.png",
    },
  ];

  return (
    <div className="bg-black container mx-auto mb-[5rem]">
      <div className="flex flex-col gap-[3rem]">
        <div>
          <h1 className="sm:text-[6rem] text-[4rem] text-center text-white font-black sm:mt-[0] mt-[10rem]">
            My <span className="text-primary">Portfolio</span>
          </h1>
          <p className="text-[2rem] text-center text-white font-extralight">
            A FEW RECENT DESIGN AND CODING PROJECTS. WANT TO SEE MORE? EMAIL ME
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[3rem]">
          {portdatas.map((portdata) => (
              <img
                src={portdata.src}
                key={portdata.id}
                onClick={() => setModal(!modal)}
                draggable="false"
                alt=""
                className="w-full h-[30rem] object-cover rounded-[1rem]"
              />
          ))}

          {modal && <Modal modal={modal} setModal={setModal} />}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
