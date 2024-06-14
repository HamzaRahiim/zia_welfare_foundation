"use client";
import { IoCloseSharp } from "react-icons/io5";
import { CiMenuFries } from "react-icons/ci";
import { useState } from "react";
import zwf from "/public/zwf.png";
import Image from "next/image";
import Link from "next/link";
import EmailComp from "@/components/shared/EmailComp";

const Header = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => setNav(!nav);
  return (
    <main className="flex flex-col">
      {/* upper side  */}
      {/* <EmailComp /> */}
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
            <li className="singleMob">
              <Link href={"/"}>Home</Link>
            </li>
            <li className="singleMob">
              <Link href={"/about"}>About</Link>
            </li>
            <li className="singleMob">
              <Link href={"#service"}>Services</Link>
            </li>
            <li className="singleMob">
              <Link href={"#media"}>Media</Link>
            </li>
            <li className="singleMob">
              <Link href={"/contact"}>Contact Us</Link>
            </li>
            <li className="singleMob">
              <Link href={"/bank"}>Bank Details</Link>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
};
export default Header;
