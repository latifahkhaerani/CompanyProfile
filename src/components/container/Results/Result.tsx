import Circle from "../../ui/Circle";

const achievements = [
  {
    title: "50+",
    desc: "Projects Delivered",
  },
  {
    title: "5+",
    desc: "Years of Experience",
  },
  {
    title: "10+",
    desc: "Industry Awards Won",
  },
  {
    title: "100%",
    desc: "Client Satisfaction Rate",
  },
];

const Result = () => {
  return (
    <>
      <section className="pl-4 pr-4 ">
        <div className="mx-0.5 md:pb-20 place-items-center ">
          <h3 className="pt-20 tittle text-center font-bold text-2xl tracking-normal md:text-[40px] md:leading-14 mb-3.5 ">
            End-to-End IT Solutions That Drive Results
          </h3>
          <p className="text-center text-sm md:text-lg font-medium leading-7 md:leading-8  text-[#717680] mb-4.5  ">
            From strategy to execution, we deliver solutions that grow your
            business.
          </p>
        </div>
        {/* circle */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-4 md:gap-x-30 md:pl-20 md:pr-45 md:pb-20 mx-1.5 pr-1 pl-1">
          {achievements.map((item) => (
            <Circle title={item.title} description={item.desc} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Result;
