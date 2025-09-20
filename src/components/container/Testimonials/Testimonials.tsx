// import React, { useState } from "react";

const Testimonials = () => {
  return (
    <div className="place-items-center pb-10 md:pb-0">
      <h3 className="pt-20 pr-4 pl-4 tittle text-center font-bold text-2xl tracking-normal md:text-[40px] md:leading-14 mb-3.5">
        What Partners Say About Working With Us
      </h3>
      <p className="pr-1 pl-1 md:pr-0 md:pl-0 text-center text-sm md:text-lg font-medium leading-7 md:leading-8 text-[#717680] mb-4.5">
        Trusted voices. Real experiences. Proven results.
      </p>

      {/* <!-- gambarnya --> */}
      <div className=" dark:hidden flex md: flex-row md:justify-between mb-8  md:mt-10 p-0 ">
        <img
          className="hidden md:block w-auto m-0 h-[350px] opacity-30 scale-90 transition-all"
          src="/partner1.png"
          alt="partner1"
        />
        <img
          className="md:w-auto pl-3 pr-3 md:pl-0 md:pr-0 md:h-[350px]"
          src="/partner2.png"
          alt="partner2"
        />
        <img
          className="hidden md:block w-auto m-0 h-[350px] opacity-30 scale-90 transition-all"
          src="/partner3.png"
          alt="partner3"
        />
      </div>
      {/* <!-- gambar dark mode --> */}
      <div className=" hidden dark:block dark:flex md: flex-row md:justify-between mb-8  md:mt-10 p-0 ">
        <img
          className="hidden md:block w-auto m-0 h-[350px] opacity-30 scale-90 transition-all"
          src="/partner1-dark.png"
          alt="partner1"
        />
        <img
          className="md:w-auto pl-3 pr-3 md:pl-0 md:pr-0 md:h-[350px]"
          src="/partner2-dark.png"
          alt="partner2"
        />
        <img
          className="hidden md:block w-auto m-0 h-[350px] opacity-30 scale-90 transition-all"
          src="/partner3-dark.png"
          alt="partner3"
        />
      </div>

      {/* <!-- slide icon --> */}
      <div className="flex justify-center">
        <br />
        <svg
          className="w-6 h-auto md:w-12"
          viewBox="0 0 48 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="6" cy="6" r="6" fill="#FF6C37" />
          <circle cx="24" cy="6" r="6" fill="#DEDCDC" />
          <path
            d="M48 6C48 9.31371 45.3137 12 42 12C38.6863 12 36 9.31371 36 6C36 2.68629 38.6863 0 42 0C45.3137 0 48 2.68629 48 6Z"
            fill="#DEDCDC"
          />
        </svg>
      </div>
    </div>
  );
};

export default Testimonials;
