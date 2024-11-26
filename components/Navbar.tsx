// components/NavBar.tsx
import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/logo.png";
const NavBar = () => {
  return (
    <nav className="bg-gray-800 p-4 flex items-center justify-between">
      <div className="flex items-center">
        <Image src={logo} alt="Logo" className="h-10 w-10 mr-2" />
        <span className="text-white text-2xl font-bold">NextJS Blog</span>
      </div>
      <div className="flex items-center space-x-4">
        <Link href="/">
          <span className="text-white hover:text-gray-400">Home</span>
        </Link>
        <Link href="/about">
          <span className="text-white hover:text-gray-400">About</span>
        </Link>
        <Link href="/contact">
          <span className="text-white hover:text-gray-400">Contact</span>
        </Link>
      </div>
      <div className="flex items-center">
        <span className="text-white mr-4">Hello, latif {}</span>
        {/* <img
          src={userImage}
          alt="User Profile"
          className="h-10 w-10 rounded-full"
        /> */}
      </div>
    </nav>
  );
};

export default NavBar;
