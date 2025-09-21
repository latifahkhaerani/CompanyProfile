// import React from "react";

import Card from "../../ui/Card";
import Container from "../Container";

/////segitiga di card belum bisa di klik

const steps = [
  { title: "Discovery & Consultation", desc: "Understand Your Needs & Goals" },
  { title: "Planning & Strategy", desc: "Build a Clear, Scalable Roadmap" },
  { title: "Design & Prototyping", desc: "Craft UX That Converts" },
  {
    title: "Development & Implementation",
    desc: "Deliver With Speed & Precision",
  },
  { title: "Testing & Optimization", desc: "Ensure Quality at Every Step" },
  { title: "Launch & Growth", desc: "Scale, Measure & Improve Continuously" },
];

const leftSteps = steps.filter((_, idx) => idx % 2 === 0);
const rightSteps = steps.filter((_, idx) => idx % 2 === 1);

const Process = () => {
  return (
    <section className="hidden md:block place-items-center">
      <div className="mx-0.5 md:pb-10  md:pl-35 md:pr-35 place-items-center ">
        <h3 className="pt-20 pr-4 pl-4  tittle text-center font-bold text-2xl tracking-normal md:text-[40px] md:leading-14 mb-3.5 ">
          Our Process
        </h3>
        <p className="pr-1 pl-1 md:pr-0 md:pl-0 text-center text-sm md:text-lg font-medium leading-7 md:leading-8  text-[#717680] mb-4.5 ">
          Clear steps. Smart execution. Results you can count on.
        </p>
      </div>

      <Container
        className="grid grid-cols-[1fr_auto_1fr] gap-6 "
        style={{ width: "1000px" }}
      >
        {/* 1st column */}
        <div className="flex flex-col items-start gap-35">
          {leftSteps.map((steps, idx) => (
            <Card key={idx} title={steps.title} description={steps.desc}></Card>
          ))}
        </div>

        {/* 2nd column - number */}
        <div className="relative">
          <div
            className="relative z-10 flex flex-col items-center justify-start gap-20 pt-10"
            style={{ width: "150px" }}
          >
            {/* looping number */}
            {steps.map((_, idx) => (
              <div
                key={idx}
                className="bg-[#FF623E]  rounded-full w-10 h-10 p-2 text-center text-md font-bold text-white tracking-normal"
              >
                {idx + 1}
              </div>
            ))}
          </div>
          {/* line */}
          <div className=" absolute top-0 bottom-0 left-1/2 w-px bg-gray-300 dark:bg-[#252B37] "></div>
        </div>

        {/* 3rd column */}
        <div className="flex flex-col items-start gap-35 pt-35">
          {rightSteps.map((steps, idx) => (
            <Card
              key={idx}
              title={steps.title}
              description={steps.desc}
              className=""
            ></Card>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Process;
