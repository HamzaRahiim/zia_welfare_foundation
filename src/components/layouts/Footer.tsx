import Image from "next/image";
import zwf from "/public/zwf.png";
import Link from "next/link";
import { CiMail, CiPhone } from "react-icons/ci";
import { FaFacebookSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

const Footer = () => {
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
            className="md:w-32 md:h-32 md:m-10 md:mb-0 w-20 h-20 mt-4"
          />
        </Link>
        {/* social media  */}
        <ul className="flex pb-4 md:flex-row flex-col mt-4 md:m-0 md:mb-5 md:max-w-32 justify-around pl-8">
          <li className="text-blue-700 hover:cursor-pointer">
            <Link href={""}>
              <FaFacebookSquare className="w-6 h-6 md:w-7 md:h-7" />
            </Link>
          </li>
          <li className="text-red-700 hover:cursor-pointer">
            <Link href={""}>
              <FaYoutube className="w-6 h-6 md:w-7 md:h-7" />
            </Link>
          </li>
          <li className="text-pink-700 hover:cursor-pointer">
            <Link href={""}>
              <FaInstagramSquare className="w-6 h-6 md:w-7 md:h-7" />
            </Link>
          </li>
        </ul>
      </div>
      {/* right side  */}
      {/* Abouts  */}
      <div className="md:w-[20%]">
        <h1 className="md:text-3xl hover:cursor-pointer text-2xl font-medium text-white md:mb-8 mb-2 text-center md:text-start">
          About
        </h1>
        <ul className="md:space-y-4 text-white hover:cursor-pointer flex md:flex-col gap-x-2">
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
        <h1 className="md:text-3xl hover:cursor-pointer text-2xl font-medium text-white md:mb-8 mb-2 text-center md:text-start">
          Expolre
        </h1>
        <ul className="md:space-y-4 text-white hover:cursor-pointer flex md:flex-col gap-x-2">
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
        <h1 className="md:text-3xl hover:cursor-pointer text-2xl font-medium text-white md:mb-6 mb-2 text-center md:text-start md:mt-6">
          Contact
        </h1>
        <p className="text-sm md:text-gray-600 text-white text-center md:text-start">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam
          quisquam,
        </p>
        <div className="flex gap-x-5 py-1 hover:cursor-pointer md:flex-col justify-center">
          <Link href={"mailto:hamzarahim836@gmail.com"}>
            <h1 className="email border-none pb-4">
              <CiMail className="text-blue-700 md:w-8 md:h-8" />{" "}
              <span className="hidden md:flex text-gray-600 overflow-hidden">
                hamzarahim836@gmail.com
              </span>
              <span className="md:hidden text-white">z..@..com</span>
            </h1>
          </Link>
          <Link href={"whatsapp://send?phone=+923150311920"}>
            <p className="number pb-4">
              <CiPhone className="text-green-700 md:w-8 md:h-8" />{" "}
              <span className="hidden md:flex text-gray-600">
                {"(+92) 315-0311920"}
              </span>
              <span className="md:hidden text-white">{"(+92)..20"}</span>
            </p>
          </Link>
        </div>
      </div>
    </main>
  );
};
export default Footer;
