import React, { useState } from "react";
import Button from "../../ui/Button";

const faqItems = [
  {
    question: "What services do you offer?",
    answer:
      "We provide custom web/app development, cloud solutions, UX/UI design, and more.",
  },
  {
    question: "How do I know if this is right for my business?",
    answer: "unavailable answer",
  },
  { question: "How much does a project cost?", answer: "unavailable answer" },
  { question: "How long does it take?", answer: "unavailable answer" },
  {
    question: "Can I start with a small project first?",
    answer: "unavailable answer",
  },
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <section className="mb-20 md:pl-35 md:pr-35 pr-4 pl-4 pt-10 md:pt-0">
      <div className="md:pt-20 md:pb-10 md:flex md:justify-between md:items-baseline ">
        <h3 className="pr-4 pl-4  md:pr-0 md:pl-0 tittle  font-bold text-2xl tracking-normal md:text-[40px] md:leading-14 mb-3.5 text-left ">
          Need Help? Start <br className="hidden md:block" /> Here.
        </h3>
        <p className="pr-4 pl-4  md:pr-0 md:pl-0  text-sm md:text-lg font-medium leading-7 md:leading-8 text-[#717680] text-left mb-4.5 md:text-right ">
          Everything you need to
          <br className="hidden md:block" /> know — all in one place.
        </p>
      </div>
      <hr className="mt-8 md:mt-0 bg-[#DFDFDF] dark:bg-[#252B37] h-px border-0  md:w-5xl mx-auto" />

      <section className=" md:grid md:grid-cols-[65%_7%_30%] pt-5 md:pt-10">
        {/* left - faq list */}
        <div className=" w-auto">
          {faqItems.map((item, index) => (
            <div key={index}>
              <br />
              <div className="flex justify-between item-baseline items center">
                <h2 className="text-lg md:text-xl font-bold leading-8">
                  {item.question}
                </h2>
                <button
                  onClick={() => toggleFaq(index)}
                  className="text-2xl font-bold text-black dark:text-[#FDFDFD]  hover:text-[#717680]"
                >
                  {openIndex === index ? "-" : "+"}
                </button>
              </div>
              {openIndex === index && (
                <p className="text-sm md:text-md font-medium leading-7 text-[#717680]">
                  {item.answer}
                </p>
              )}
              <br />
              <hr className=" bg-[#DFDFDF] dark:bg-[#252B37] h-px border-0  w-full " />
            </div>
          ))}
        </div>
        {/* middle */}
        <div></div>
        {/* right */}
        <div className="bg-[#CC4E32] rounded-xl p-5 md:p-6 md:gap-6 md:mt-0 mt-6  pt-8">
          <h2 className=" text-white text-3xl md:text-4xl font-bold leading-9  md:leading-11 tracking-tight">
            Let’s talk it through
          </h2>
          <p className=" text-white text-sm md:text-lg font-semibold leading-7 md:leading-8 py-3">
            book a free consultation with our team.
          </p>
          <div className=" mt-2">
            <img
              className="rounded-xl w-full "
              src="/letstalk.png"
              alt="discussion-image"
            />
            <Button href="#" className="bg-black block w-full mt-4 py-3">
              Free Consultation
            </Button>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Faq;
