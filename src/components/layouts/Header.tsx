"use client";
import { CiMail } from "react-icons/ci";
import { CiPhone } from "react-icons/ci";
import { IoCloseSharp } from "react-icons/io5";
import { CiMenuFries } from "react-icons/ci";
import { useState } from "react";
import zwf from "/public/zwf.png";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => setNav(!nav);
  return (
    <main className="flex flex-col">
      {/* upper side  */}
      <div className="mainProp">
        <Link href={"mailto:hamzarahim836@gmail.com"}>
          <h1 className="email">
            <CiMail />{" "}
            <span className="hidden md:flex">hamzarahim836@gmail.com</span>
            <span className="md:hidden">z..@..com</span>
          </h1>
        </Link>
        <Link href={"whatsapp://send?phone=+923150311920"}>
          <p className="number">
            <CiPhone />{" "}
            <span className="hidden md:flex">{"(+92) 315-0311920"}</span>
            <span className="md:hidden">{"(+92)..20"}</span>
          </p>
        </Link>
      </div>
      {/* lower side  */}
      <div className="logohead">
        {/* logo  */}
        <Image
          src={zwf}
          alt="logo"
          width={100}
          height={100}
          className="w-14 h-10 pl-2"
        />
        {/* menu  */}
        <ul className="hidden md:flex flex-1 justify-between">
          <li className="singlelink">Home</li>
          <li className="singlelink">
            <Link href={"/about"}>About</Link>
          </li>
          <li className="singlelink">Services</li>
          <li className="singlelink">Media</li>
          <li className="singlelink">
            <Link href={"/contact"}>Contact Us</Link>
          </li>
          <li className="pr-2 hover:cursor-pointer hover:text-green-500">
            <Link href={"/contact"}>Bank Details</Link>
          </li>
        </ul>
        <div
          className="md:hidden pr-3 hover:cursor-pointer"
          onClick={handleNav}
        >
          <CiMenuFries />
        </div>
        {/* mobile navbar  */}
        <div className={nav ? "mobileNav" : "fixed left-[-100%]"}>
          <div className="p-4 flex justify-between pt-10">
            <Image
              src={zwf}
              alt="logo"
              width={100}
              height={100}
              className="w-14 h-10 pl-2"
            />
            <IoCloseSharp onClick={handleNav} size={30} />
          </div>
          <ul className="p-4 text-slate-700">
            <li className="singleMob">Home</li>
            <li className="singleMob">
              <Link href={"/about"}>About</Link>
            </li>
            <li className="singleMob">Services</li>
            <li className="singleMob">Media</li>
            <li className="singleMob">
              <Link href={"/contact"}>Contact Us</Link>
            </li>
            <li className="singleMob">
              <Link href={"/contact"}>Bank Details</Link>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
};
export default Header;
