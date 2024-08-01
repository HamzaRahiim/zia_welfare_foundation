import Image from "next/image";
import team from "@/images/teammember.png";
import Blogg from "@/components/shared/Blog";
import { getCeoData, getTeamData } from "@/lib/ceoData";
import AboutType from "@/type";
import TeamType from "@/type";
import PortableText from "react-portable-text";

export const revalidate = 172800;

const About = async () => {
  const ceoData: AboutType = await getCeoData();
  const teamData: TeamType = await getTeamData();
  return (
    <main className="flex flex-col wrapperMedium mt-3 px-2 md:px-0">
      {/* Ceo Section  */}
      {/* left side message */}
      <div className="flex md:flex-row flex-col">
        <div className="flex-1">
          <h1 className="text-3xl md:flex hidden pb-2 hover:cursor-pointer">
            {ceoData.title}
          </h1>
          <PortableText
            content={ceoData.ceomessage}
            className="hover:cursor-pointer"
          />
        </div>
        <div className="flex-1 flex flex-col justify-center order-first">
          <h1 className="text-3xl md:hidden ">{ceoData.title}</h1>
          <Image
            src={ceoData.imageName}
            alt="CEO"
            className="w-2/3 self-center object-cover"
            width={100}
            height={100}
          />
        </div>
      </div>
      {/* right side picture */}
      {/* Team section  */}
      <div className="col-span-2 text-3xl text-center pt-7">
        <h1 className="pb-6 hover:cursor-pointer hover:text-green-400">
          Meet Our Team
        </h1>
        {/* main image  */}
        <Image
          src={teamData.teamImage}
          alt="team"
          className="h-96"
          width={1100}
          height={100}
        />
      </div>
      {/* project section  */}
      <div className="mt-7">
        <h1 className="text-3xl text-center hover:cursor-pointer hover:text-green-400">
          Project Completed
        </h1>
        {/* blog of each project  */}
        <section className="flex justify-around py-6">
          {/* making component to use here  */}
          <Blogg />
        </section>
      </div>
    </main>
  );
};
export default About;
