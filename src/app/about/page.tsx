import Image from "next/image";
import ceoImage from "@/images/backgrond-remove.png";
import ceoImage1 from "@/images/backgrond-remove1.webp";
import team from "@/images/teammember.png";
import Link from "next/link";
import Blogg from "@/components/shared/Blog";
const About = () => {
  const slug = "hamza_blog";
  return (
    <main className="flex flex-col wrapperMedium mt-3">
      {/* Ceo Section  */}
      {/* left side message */}
      <div className="flex md:flex-row flex-col">
        <div className="flex-1">
          <h1 className="text-3xl md:flex hidden">Founder and CEO Message:</h1>
          <p className="font-normal pt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
            modi quos, omnis, cumque ipsum excepturi ipsa sequi non laborum rem
            sunt necessitatibus iste sit, deleniti repudiandae? Quaerat,
            architecto quis? Nihil.Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Quisquam Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Commodi modi quos, omnis, cumque ipsum excepturi
            ipsa sequi non laborum rem sunt necessitatibus iste sit, deleniti
            repudiandae? Quaerat, architecto quis? Nihil.Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Quisquam quis? Nihil.Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Quisquam Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Commodi modi quos,
            omnis, cumque ipsum excepturi ipsa sequi non laborum rem sunt
            necessitatibus iste sit, deleniti repudiandae? Quaerat, architecto
            quis? Nihil.Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quisquam consectetur adipisicing elit. Quisquam Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Commodi modi quos, omnis,
            cumque ipsum excepturi ipsa sequi non laborum rem sunt
            necessitatibus iste sit, deleniti repudiandae? Quaerat, architecto
            quis? Nihil.Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quisquam
          </p>
        </div>
        <div className="flex-1 flex flex-col justify-center order-first">
          <h1 className="text-3xl md:hidden">Founder and CEO Message:</h1>
          <Image src={ceoImage1} alt="CEO" className="w-2/3 self-center" />
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
