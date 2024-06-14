import Image from "next/image";
import team from "@/images/teammember.png";
import Blogg from "@/components/shared/Blog";
import { getCeoData } from "@/lib/ceoData";
import AboutType from "@/type";
import PortableText from "react-portable-text";

const About = async () => {
  const ceoData: AboutType = await getCeoData();
  return (
    <main className="flex flex-col wrapperMedium mt-3 px-2 md:px-0">
      {/* Ceo Section  */}
      {/* left side message */}
      <div className="flex md:flex-row flex-col">
        <div className="flex-1">
          <h1 className="text-3xl md:flex hidden pb-2">{ceoData.title}</h1>
          <PortableText content={ceoData.ceomessage} />
        </div>
        <div className="flex-1 flex flex-col justify-center order-first">
          <h1 className="text-3xl md:hidden">Founder and CEO Message:</h1>
          <Image
            src={ceoData.imageName}
            alt="CEO"
            className="w-2/3 self-center"
            width={100}
            height={100}
          />
        </div>
      </div>
      {/* right side picture */}
      {/* Team section  */}
      <div className="col-span-2 text-3xl text-center pt-3">
        <h1>Meet Our Team</h1>
        {/* main image  */}
        <Image src={team} alt="team" className="h-96" />
      </div>
      {/* project section  */}
      <div className="mt-3">
        <h1 className="text-3xl text-center">Project Completed</h1>
        {/* blog of each project  */}
        <section className="flex justify-around py-3">
          {/* making component to use here  */}
          <Blogg />
        </section>
      </div>
    </main>
  );
};
export default About;
