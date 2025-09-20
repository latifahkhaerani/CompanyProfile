import React from "react";

const Portfolios = () => {
  return (
    // pemgbungkus section belum
    <div className="mx-0.5 md:pb-20  md:pl-35 md:pr-35 place-items-center  ">
      <h3 className="md:pt-20 pr-4 pl-4  tittle text-center font-bold text-2xl tracking-normal md:text-[40px] md:leading-14 mb-3.5  ">
        From Vision to Launch! Projects We’re Proud Of
      </h3>
      <p className="pr-1 pl-1 md:pr-0 md:pl-0 text-center text-sm md:text-lg font-medium leading-7 md:leading-8 text-[#717680] mb-4.5 ">
        Take a closer look at our recent work powering startups, enterprises,
        and everything in between.
      </p>
      <div className="grid px-4 md:px-0 md:grid-cols-3 gap-5 pt-2 md:pt-10 ">
        <div>
          <img
            className="rounded-2xl pb-3"
            src="/porto1.png"
            alt="portofolio1"
          />
          <div className=" text-sm md:text-md font-medium leading-7 text-[#FF623E]">
            Landing Page
          </div>
          <div className="text-base md:text-xl font-bold leading-7 md:leading-8">
            {" "}
            Portofolio 1
          </div>
        </div>
        <div>
          <img
            className="rounded-2xl pb-3"
            src="/porto2.png"
            alt="portofolio2"
          />
          <div className=" text-sm md:text-md font-medium leading-7 text-[#FF623E]">
            Landing Page
          </div>
          <div className="text-base md:text-xl font-bold leading-7 md:leading-8">
            {" "}
            Portofolio 2
          </div>
        </div>
        <div>
          <img
            className="rounded-2xl pb-3"
            src="/porto3.png"
            alt="portofolio3"
          />
          <div className=" text-sm md:text-md font-medium leading-7 text-[#FF623E]">
            Landing Page
          </div>
          <div className="text-base md:text-xl font-bold leading-7 md:leading-8">
            {" "}
            Portofolio 3
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolios;
