import Comp from "@/components/shared/Comp";
import { GiHealthNormal, GiClothes, GiShakingHands } from "react-icons/gi";
import SericeType from "@/type";
import { getServiceData } from "@/lib/serviceData";

const iconMapping: any = {
  healthNormal: <GiHealthNormal className="serviceText" />,
  shakingHands: <GiShakingHands className="serviceText" />,
  clothes: <GiClothes className="serviceText" />,
};
const Services = async () => {
  const serviceData: SericeType[] = await getServiceData();
  return (
    <section>
      <main id="service" className="serviceSect">
        <h1 className="serviceTopic">Our Services</h1>
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
