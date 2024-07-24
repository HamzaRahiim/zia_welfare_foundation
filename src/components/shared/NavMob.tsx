"use client";
import Image from "next/image";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";
import { IoCloseSharp } from "react-icons/io5";
import zwf from "/public/zwf.png";
import { useState } from "react";

const NavMob = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => setNav(!nav);
  return (
    <>
      <div className="md:hidden pr-3 hover:cursor-pointer" onClick={handleNav}>
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
    </>
  );
};
export default NavMob;
