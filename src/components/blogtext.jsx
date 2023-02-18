import React from "react";
import "./blogtext.css";

const blogtext = () => {
  return (
    <div className="container mx-auto mt-[10rem] md:mt-[5rem] mb-[5rem]">
      <div className=" flex flex-col md:flex-row items-center md:items-start gap-[3rem] mb-[3rem] border-b-4 border-primary pb-[1rem]">
        <div className="flex-1 rounded-[1.5rem] md:w-[30rem] md:h-[30rem] lg:w-[50rem] lg:h-[50rem] overflow-hidden ">
          <img
            src='img/blogpost.jpg'
            draggable="false"
            className="w-[100%] h-[100%] object-cover rounded-[1.5rem] hover:scale-125 transition duration-500 ease-in-out"
            alt="blog"
          />
        </div>
        <div className="flex-1 flex flex-col items-start gap-[5rem]">
          <div className="flex flex-row items-center gap-[2rem]">
            <img
              src='img/2.jpg'
              draggable="false"
              className="h-[7rem] w-[7rem] rounded-full object-cover border-2 border-primary"
              alt=""
            />
            <div className="flex flex-col items-start">
              <h1 className="text-white text-[1.6rem] font-bold">
                Elcan Eyvazlı
              </h1>
              <p className="text-white text-[1.6rem] font-thin">
                January 23 - 2023
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-[]">
            <h1 className="text-primary text-[3rem] font-extrabold">
              Create a Wordpress theme from Scractch
            </h1>
            <p className="text-[2rem] text-white font-light">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              blandit massa vel mauris Lorem ipsum dolor sit amet, consectetur
              adipiscing elit.
            </p>
          </div>
        </div>
      </div>
      <p className="text-white text-[1.6rem]">
        Morbi ac nulla felis. Vestibulum maximus, mi eget finibus commodo,
        tellus ligula ultrices mauris, at condimentum erat risus id ante. Nullam
        pulvinar lorem eget luctus vestibulum. Vestibulum volutpat malesuada
        ante, eget tempor massa. Quisque maximus sagittis suscipit. Vivamus
        placerat, magna eget pulvinar sodales, sem nibh elementum justo, ac
        elementum ipsum lacus non tellus. In hac habitasse platea dictumst.
        Proin magna dolor, vestibulum vitae orci dapibus, commodo eleifend
        nulla. Integer tincidunt dictum neque ac tempus. Aliquam in laoreet
        nisi. Ut nec libero dolor. Class aptent taciti sociosqu ad litora
        torquent per conubia nostra, per inceptos himenaeos. Maecenas gravida,
        lorem et sagittis ullamcorper, erat est rutrum lacus, in mollis risus
        mauris a nisi. Nullam non nisi nec ligula elementum cursus pulvinar nec
        libero.Class aptent taciti sociosqu ad litora
        torquent per conubia nostra, per inceptos himenaeos. Maecenas gravida,
        lorem et sagittis ullamcorper, erat est rutrum lacus, in mollis risus
        mauris a nisi. Nullam non nisi nec ligula elementum cursus pulvinar nec
        libero.
      </p>
    </div>
  );
};

export default blogtext;
