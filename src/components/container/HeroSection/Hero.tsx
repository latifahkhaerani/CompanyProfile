// import React from "react";
import Button from "../../ui/Button";

const Hero = () => {
  return (
    <section className="hero max-w-7xl mx-auto">
      <div className="relative flex flex-row item-center  ">
        <div className="  w-[361px] md:w-[653px] z-10 absolute top-36 left-4 md:right-0 md:left-35">
          <h1 className=" text-4xl md:text-[56px] font-bold leading-11 md:leading-17 tracking-tight mb-2  ">
            Your Tech Partner for
            <div className="text-[#FF6C37]"> Smarter Growth</div>
          </h1>
          <h2 className=" text-base md:text-xl font-semibold leading-7 md:leading-8.5 mb-10 ">
            We deliver tailored IT solutions to help you scale with speed and
            confidence.
          </h2>

          <div className="hidden md:block">
            <Button className="md:w-[200px]">Let's Talk</Button>
          </div>
        </div>
      </div>
      <div>
        {/* HANDPHONE LIGHT MODE
        handphone on destkop*/}
        <div className="hidden md:block hero-image w-[50vw] relative left-160 bottom-0 dark:hidden ">
          <img src="smartphone.png" alt="smartphone" />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-white opacity-100 "></div>
          <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white opacity-100 "></div>
        </div>
        {/* handphone on mobile*/}
        <div className="block md:hidden not-first:not-last: hero-image w-[100%] absolute z-10 left-0 top-100 h-32 dark:hidden ">
          <img className="  " src="/smartphone.png" alt="smartphone" />
          <div className="absolute left-0 top-0 z-30  h-0 inset-0 bg-gradient-to-r from-white via-transparent to-white opacity-50 "></div>
          <div className="absolute left-0 top-0 z-30  h-[100vw] inset-0 bg-gradient-to-b from-white via-transparent to-white opacity-100 "></div>
        </div>
        {/* HANDPHONE DARK MODE
        handphone on destkop*/}
        <div className="hidden dark:md:block hero-image w-[50vw] relative left-160 bottom-0  ">
          <img src="/smartphonedark.png" alt="smartphone" />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-100 "></div>
          <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-100 "></div>
        </div>
        {/* handphone on mobile */}
        <div className="md:!hidden hidden dark:block hero-image w-[100%] absolute z-10 left-0 top-90 h-32">
          <img src="/smartphonedark.png" alt="smartphone" />
          <div className="absolute left-0 top-0 z-30 h-0 inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-50"></div>
          <div className="absolute left-0 top-0 z-30 h-100 inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-100"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
