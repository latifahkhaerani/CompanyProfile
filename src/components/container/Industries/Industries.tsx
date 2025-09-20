import React, { useState } from "react";
import Container from "../Container";

const tabs = [
  {
    id: "fintech",
    label: "Fintech",
    content:
      "We build secure, scalable, and compliant fintech solutions — from digital wallets to core banking systems — tailored to modern financial needs.",
    image: "/fintech.png",
  },
  {
    id: "ecommerce",
    label: "E-Commerce",
    content:
      "We create robust e-commerce platforms that drive sales, improve user experience, and ensure secure transactions.",
    image: "/tab-ecom.png",
  },
  {
    id: "healthcare",
    label: "Healthcare",
    content:
      "Empowering healthcare providers with digital solutions that improve patient care, ensure data privacy, and streamline operational workflows.",
    image: "/tab-health.png",
  },
];

const SolutionSection = () => {
  const [activeTab, setActiveTab] = useState("fintech");

  return (
    <section className="solution max-w-7xl mx-auto mb-20 ">
      {/* title */}
      <Container className="md:pt-20 md:pb-10 md:pl-0 md:ml-35">
        <h3 className="tittle font-bold text-2xl tracking-normal md:text-[40px] md:leading-14 mb-3.5">
          Built for Your Industry
        </h3>
        <p className="text-sm md:text-lg font-medium leading-7 md:leading-8 text-[#717680] text-left mb-6 w-full">
          We’ve helped companies across industries launch smarter, faster, and
          more securely.
        </p>
      </Container>

      {/* container */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-[30%_70%] gap-6 pr-4 pl-4 md:pl-35 md:pr-35">
        {/* SIDEBAR TABS */}
        <div className="space-y-4">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <div
                key={tab.id}
                className={`flex items-center cursor-pointer ${
                  isActive ? "text-black dark:text-white" : "text-[#AAAAAA]"
                }`}
                onClick={() => setActiveTab(tab.id)}
              >
                <span className="w-1 h-7 md:h-10 bg-[#FF623E] mr-2 rounded-md" />
                <button
                  className={`tab-button text-base md:text-xl leading-7 md:leading-8 ${
                    isActive ? "font-bold" : "font-normal"
                  }`}
                >
                  {tab.label}
                </button>
              </div>
            );
          })}
        </div>

        {/* KONTEN */}
        <div className="w-fit h-auto">
          {tabs.map(
            (tab) =>
              activeTab === tab.id && (
                <div key={tab.id} className="tab-content block">
                  <p className="desc text-left text-sm md:text-lg font-medium leading-7 md:leading-8 text-[#0A0D12] dark:text-[#FDFDFD] mb-4.5">
                    {tab.content}
                  </p>
                  <img
                    className="h-73 w-full object-cover object-[0_55%] rounded-4xl"
                    src={tab.image}
                    alt={tab.label}
                  />
                </div>
              )
          )}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
