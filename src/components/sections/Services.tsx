// Importing only the necessary components
import Comp from "@/components/shared/Comp";
import welfare from "@/images/welfare.webp";
import service from "@/images/clothes.webp";
import health from "@/images/health.webp";
import { GiHealthNormal } from "react-icons/gi";
import { GiShakingHands } from "react-icons/gi";
import { GiClothes } from "react-icons/gi";

const data = [
  {
    imageName: welfare,
    title: "Welfare",
    icon: <GiShakingHands className="text-5xl text-center w-full h-1/3 mt-6" />,
    text: "We providing the service of health, clothes and Education.",
  },
  {
    imageName: service,
    title: "Service",
    icon: <GiClothes className="text-5xl text-center w-full h-1/3 mt-6" />,
    text: "We providing the service of health, clothes and Education.",
  },
  {
    imageName: health,
    title: "Health",
    icon: <GiHealthNormal className="text-5xl text-center w-full h-1/3 mt-6" />,
    text: "We providing the service of health, clothes and Education.",
  },
];
const Services = () => {
  return (
    <section className="">
      <main
        id="service"
        className="bg-gradient-to-b from-violet-300 via-indigo-200 to-cyan-200 my-8 rounded-t-xl md:h-[450px] grid sm:grid-cols-2 md:grid-cols-3 hover:cursor-pointer"
      >
        <h1 className="text-3xl text-center sm:col-span-2 md:col-span-3 font-serif py-4 hover:text-emerald-700">
          Our Services
        </h1>
        {data.map((item, index) => (
          <div
            key={index}
            className="flex flex-col justify-center items-center my-2"
          >
            <Comp photo={item.imageName} icon={item.icon} text={item.text} />
            <h2 className="text-center max-w-[250px] text-2xl py-3 hover:text-emerald-700">
              {item.title}
            </h2>
          </div>
        ))}
      </main>
    </section>
  );
};

export default Services;
