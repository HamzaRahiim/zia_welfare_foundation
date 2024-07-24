import Carosel from "@/components/shared/Carosel";
import { getCaroselData } from "@/lib/carosel_data";
import CaroselType from "@/type";
const Target = async () => {
  const data: CaroselType[] = await getCaroselData();
  return (
    <section className="">
      {/* headline  */}
      <div className="mb-0 md:mb-0">
        <h1 className="caroselHead">
          WHAT&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;We&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Do
        </h1>
      </div>
      {/* sliding part  */}
      <Carosel data={data} />
    </section>
  );
};
export default Target;
