import Comp from "@/components/shared/Comp";
import { GiHealthNormal, GiClothes, GiShakingHands } from "react-icons/gi";
import SericeType from "@/type";
import { getServiceData } from "@/lib/serviceData";

const iconMapping: any = {
  healthNormal: (
    <GiHealthNormal className="text-5xl text-center w-full h-1/3 mt-6" />
  ),
  shakingHands: (
    <GiShakingHands className="text-5xl text-center w-full h-1/3 mt-6" />
  ),
  clothes: <GiClothes className="text-5xl text-center w-full h-1/3 mt-6" />,
};
const Services = async () => {
  const serviceData: SericeType[] = await getServiceData();
  console.log(serviceData);
  return (
    <section>
      <main
        id="service"
        className="bg-gradient-to-b from-violet-300 via-indigo-200 to-cyan-200 my-8 rounded-t-xl md:h-[450px] grid sm:grid-cols-2 md:grid-cols-3 hover:cursor-pointer"
      >
        <h1 className="text-3xl text-center sm:col-span-2 md:col-span-3 font-serif py-4 hover:text-emerald-700">
          Our Services
        </h1>
        {serviceData.map((item, index) => (
          <div
            key={index}
            className="flex flex-col justify-center items-center my-2"
          >
            <Comp
              photo={item.imageName}
              icon={iconMapping[item.icon]}
              text={item.details}
            />
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
