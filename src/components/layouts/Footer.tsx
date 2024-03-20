import Image from "next/image";
import zwf from "@/images/zwf.png";

const Footer = () => {
  return (
    <main className="bg-gradient-to-r from-fuchsia-800 to-fuchsia-500 h-72">
      {/* left side  */}
      {/* logo  */}
      <Image
        src={zwf}
        alt="zwf"
        width={100}
        height={100}
        className="w-32 h-32 m-10"
      />
      {/* social media  */}
      <ul className="flex text-white pb-4">
        <li>Facebook</li>
        <li>Youtube</li>
        <li>instagram</li>
      </ul>
      {/* right side  */}
      {/* Abouts  */}
      {/* Explore  */}
      {/* contact  */}
    </main>
  );
};
export default Footer;
