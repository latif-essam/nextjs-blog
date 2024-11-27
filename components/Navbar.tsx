"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/logo.png";
import profile from "@/assets/profile.jpg";
import { usePathname } from "next/navigation";
import { FaBars, FaTimes } from "react-icons/fa";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  console.log({ pathname });

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="bg-gray-800/0 p-4 flex items-center justify-between bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500">
      <div className="flex items-center">
        <Image src={logo} alt="Logo" className="h-10 w-10 mr-2" />
        <span className="text-white text-2xl font-medium">NextJS Blog</span>
      </div>
      <div className="hidden md:flex items-center space-x-6">
        <Link href="/">
          <span
            className={` hover:text-gray-400 ${
              pathname === "/" ? "font-medium text-white" : "text-gray-300"
            }`}
          >
            Home
          </span>
        </Link>
        <Link href="/posts">
          <span
            className={` hover:text-gray-400 ${
              pathname === "/posts" ? "font-medium text-white" : "text-gray-300"
            }`}
          >
            All Posts
          </span>
        </Link>
        <Link href="/booked">
          <span
            className={` hover:text-gray-400 ${
              pathname === "/booked"
                ? "font-medium text-white"
                : "text-gray-300"
            }`}
          >
            Bookmarked
          </span>
        </Link>
      </div>
      <div className="hidden md:flex items-center">
        <span className="text-white mr-4">Hi, Latif</span>
        <Image
          src={profile}
          alt="Profile Picture"
          className="h-10 w-10 rounded-full"
        />
      </div>
      <button className="md:hidden text-white" onClick={toggleMenu}>
        {menuOpen ? (
          <FaTimes className="h-6 w-6" />
        ) : (
          <FaBars className="h-6 w-6" />
        )}
      </button>
      {menuOpen && (
        <div className="absolute top-16 left-0 right-0 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 flex flex-col items-center space-y-4 md:hidden">
          <Link href="/">
            <span
              className={` hover:text-gray-400 ${
                pathname === "/" ? "font-medium text-white" : "text-gray-300"
              }`}
              onClick={toggleMenu}
            >
              Home
            </span>
          </Link>
          <Link href="/posts">
            <span
              className={` hover:text-gray-400 ${
                pathname === "/posts"
                  ? "font-medium text-white"
                  : "text-gray-300"
              }`}
              onClick={toggleMenu}
            >
              All Posts
            </span>
          </Link>
          <div className="flex items-center">
            <span className="text-white mr-4">Hi, Latif</span>
            <Image
              src={profile}
              alt="Profile Picture"
              className="h-10 w-10 rounded-full"
            />
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
