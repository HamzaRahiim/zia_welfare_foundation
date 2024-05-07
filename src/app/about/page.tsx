import Image from "next/image";
import ceoImage from "@/images/backgrond-remove.png";
import team from "@/images/teammember.png";
const About = () => {
  return (
    <main className="grid md:grid-cols-2">
      {/* Ceo Section  */}
      {/* left side message */}
      <div className="wrapperMedium">
        <h1>CEO Message:</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi modi
          quos, omnis, cumque ipsum excepturi ipsa sequi non laborum rem sunt
          necessitatibus iste sit, deleniti repudiandae? Quaerat, architecto
          quis? Nihil.Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Quisquam Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Commodi modi quos, omnis, cumque ipsum excepturi ipsa sequi non
          laborum rem sunt necessitatibus iste sit, deleniti repudiandae?
          Quaerat, architecto quis? Nihil.Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Quisquam
        </p>
      </div>
      {/* right side picture */}
      <div>
        <Image src={ceoImage} alt="CEO" />
      </div>
      {/* Team section  */}
      <div className="col-span-2">
        <h1>Our Team</h1>
        {/* main image  */}
        <Image src={team} alt="team" />
      </div>
      {/* project section  */}
      <div className="col-span-2">
        <h1>Project Completed</h1>
        {/* blog of each project  */}
        <section>
          <h1>Blog</h1>
        </section>
      </div>
    </main>
  );
};
export default About;
