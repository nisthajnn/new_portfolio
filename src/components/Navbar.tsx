"use client"
import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";

const navLinks = [
  {
    title: "Experience",
    path: "#Experience",
  },
  {
    title: "Projects",
    path: "#projects",
  },
  {
    title: "Skills",
    path: "#skills",
  },
  {
    title: "Contact",
    path: "#contact",
  }
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100 border border-[#33353F]">
      <div className="container mx-auto px-4 py-2 lg:py-4 flex items-center justify-between">
        <div className="navbar-start">
          <a className="btn btn-outline text-xl">Nistha Jain</a>
        </div>
        <div className="menu hidden md:flex md:flex-1 md:justify-center">
          <ul className="flex space-x-8">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
        <div className="navbar-end flex items-center">
          <a className="btn btn-outline text-xl ml-auto">Download Resume</a>
          <div className="mobile-menu md:hidden">
            {!navbarOpen ? (
              <button
                onClick={() => setNavbarOpen(true)}
                className="flex items-center px-3 py-2 border rounded border-neutral-50 text-neutral-50 hover:text-white hover:border-white"
              >
                <Bars3Icon className="h-5 w-5" />
              </button>
            ) : (
              <button
                onClick={() => setNavbarOpen(false)}
                className="flex items-center px-3 py-2 border rounded border-neutral-50 text-neutral-50 hover:text-white hover:border-white"
              >
                <XMarkIcon className="h-5 w-5" />
              </button>
            )}
          </div>
        </div>
      </div>
      {navbarOpen && <MenuOverlay links={navLinks} />}
    </nav>
  );
};

export default Navbar;
