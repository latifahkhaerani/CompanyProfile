import Card from "../../ui/Card";

const data = [
  {
    title: "Web",
    desc: "Build fast, scalable, and SEO-friendly websites.",
    icon: "/web.png",
  },
  {
    title: "Mobile App Development",
    desc: "Native & cross-platform apps tailored to user needs.",
    icon: "/mobile.png",
  },
  {
    title: "UI/UX Design",
    desc: "Delight users with intuitive and beautiful interfaces",
    icon: "/uiux.png",
  },
  {
    title: "Cloud Solutions",
    desc: "Secure and flexible cloud infrastructure for your growth.",
    icon: "/cloud.png",
  },
  {
    title: "Software Development",
    desc: "Custom solutions built around your business logic.",
    icon: "/software.png",
  },
  {
    title: "IT Infrastructure",
    desc: "Scale your backend with reliable tech foundations.",
    icon: "/it.png",
  },
  {
    title: "Cybersecurity Services",
    desc: "Stay protected with enterprise-grade security.",
    icon: "/cyber.png",
  },
  {
    title: "QA Solutions",
    desc: "Ensure performance with rigorous testing frameworks.",
    icon: "/qa.png",
  },
  {
    title: "IT Consulting & Support",
    desc: "Make smarter tech decisions with expert guidance.",
    icon: "/consulting.png",
  },
];

const Features = () => {
  return (
    <>
      <div className="md:pl-35 md:pr-35 pr-4 pl-4">
        <div className="mx-0.5 place-items-center">
          <h3 className="md:mt-10 tittle text-center font-semibold md:font-bold text-2xl tracking-normal md:text-[40px] md:leading-14 mb-3.5 pt-20">
            Smart IT Solutions That Grow With You
          </h3>
          <p className=" pr-0.9 pl-0.9 text-center text-sm md:text-lg font-medium leading-7 md:leading-8  text-[#717680]">
            Tailored tech to boost efficiency, security, and results.
          </p>
        </div>

        {/* card */}
        <div className="relative grid md:grid-cols-3 md:grid-rows-3 gap-y-10 md:gap-y-10 gap-x-5 md:pt-15 pt-10 pb-20 md:pb-20">
          {data.map((item) => (
            <Card
              title={item.title}
              description={item.desc}
              icon={<img src={item.icon} alt="icon-" className="w-16 h-16" />}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Features;
