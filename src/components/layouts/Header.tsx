import zwf from "/public/zwf.png";
import Image from "next/image";
import Link from "next/link";
import EmailComp from "@/components/shared/EmailComp";
import NavMob from "../shared/NavMob";

const Header = () => {
  return (
    <main className="flex flex-col">
      {/* upper side  */}
      <EmailComp />
      {/* lower side  */}
      <div className="logohead">
        {/* logo  */}
        <Link href={"/"}>
          <Image
            src={zwf}
            alt="logo"
            width={100}
            height={100}
            className="w-14 h-10 pl-2 hover:cursor-pointer"
          />
        </Link>
        {/* menu  */}
        <ul className="hidden md:flex flex-1 justify-around">
          <li className="singlelink">
            <Link href={"/"}>Home</Link>
          </li>
          <span className="singleRight"></span>
          <li className="singlelink">
            <Link href={"/about"}>About</Link>
          </li>
          <span className="singleRight"></span>
          <li className="singlelink">
            <Link href={"#service"}>Services</Link>
          </li>
          <span className="singleRight"></span>
          <li className="singlelink">
            <Link href={"#media"}>Media</Link>
          </li>
          <span className="singleRight"></span>
          <li className="singlelink">
            <Link href={"/contact"}>Contact Us</Link>
          </li>
          <span className="singleRight"></span>
          <li className="pr-2 hover:cursor-pointer hover:text-green-500">
            <Link href={"/bank"}>Bank Details</Link>
          </li>
        </ul>
        <NavMob />
      </div>
    </main>
  );
};
export default Header;
