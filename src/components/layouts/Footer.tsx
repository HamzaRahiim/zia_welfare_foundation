import Image from "next/image";
import zwf from "/public/zwf.png";
import Link from "next/link";
import { CiMail, CiPhone } from "react-icons/ci";
import { FaFacebookSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { getSocialData } from "@/lib/socialData";
import SocialMediaType from "@/type";
import EmailType from "@/type";
import { getEmailData } from "@/lib/emailData";
const Footer = async () => {
  const socialdata: SocialMediaType = await getSocialData();
  const emailData: EmailType = await getEmailData();
  return (
    <main className="bg-gradient-to-r from-fuchsia-600/90 to-fuchsia-400 flex md:flex-row items-center flex-col px-2 md:p-0">
      {/* left side  */}
      {/* logo  */}
      <div className="md:w-[30%] flex md:flex-col flex-row">
        <Link href={"/"}>
          <Image
            src={zwf}
            alt="zwf"
            width={100}
            height={100}
            className="footerLogo"
          />
        </Link>
        {/* social media  */}
        <ul className="footerSocial">
          <li className="text-blue-700 hover:cursor-pointer">
            <Link href={socialdata.facebook}>
              <FaFacebookSquare className="footSingle" />
            </Link>
          </li>
          <li className="text-red-700 hover:cursor-pointer">
            <Link href={socialdata.youtube}>
              <FaYoutube className="footSingle" />
            </Link>
          </li>
          <li className="text-pink-700 hover:cursor-pointer">
            <Link href={socialdata.instagram}>
              <FaInstagramSquare className="footSingle" />
            </Link>
          </li>
        </ul>
      </div>
      {/* right side  */}
      {/* Abouts  */}
      <div className="md:w-[20%]">
        <h1 className="footAbout">About</h1>
        <ul className="footAboutList">
          <li>
            <Link href={"/about"}>Introduction</Link>
          </li>
          <li>
            <Link href={"/about"}>CEO Message</Link>
          </li>
          <li>
            <Link href={"/about"}>Annual Report</Link>
          </li>
        </ul>
      </div>
      {/* Explore  */}
      <div className="md:w-[20%]">
        <h1 className="footAbout">Expolre</h1>
        <ul className="footAboutList">
          <li>
            <Link href={"#service"}>Our Mission</Link>
          </li>
          <li>
            <Link href={"#media"}>Media</Link>
          </li>
          <li>
            <Link href={"/bank"}>Donation</Link>
          </li>
        </ul>
      </div>
      {/* contact  */}
      <div className="md:w-[30%]">
        <h1 className="footAbout md:mt-6">Contact</h1>
        <p className="footText">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam
          quisquam,
        </p>
        <div className="footContact">
          <Link href={`mailto:${emailData.email}`}>
            <h1 className="email border-none pb-4">
              <CiMail className="text-blue-700 md:w-8 md:h-8" />{" "}
              <span className="hidden md:flex text-gray-600 overflow-hidden">
                {emailData.email}
              </span>
              <span className="md:hidden text-white">{emailData.emailMob}</span>
            </h1>
          </Link>
          <Link href={`whatsapp://send?phone=+92${emailData.phone}`}>
            <p className="number pb-4">
              <CiPhone className="text-green-700 md:w-8 md:h-8" />{" "}
              <span className="hidden md:flex text-gray-600">
                {`(+92) ${emailData.phone}`}
              </span>
              <span className="md:hidden text-white">{emailData.phoneMob}</span>
            </p>
          </Link>
        </div>
      </div>
    </main>
  );
};
export default Footer;
