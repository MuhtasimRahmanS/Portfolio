"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
const Nav = () => {
  const [isClick, setisClick] = useState(false);
  const toggleNavbar = () => {
    setisClick(!isClick);
  };
  const pathname = usePathname();
  const links = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "Skills",
      path: "/skills",
    },
    {
      title: "Resume",
      path: "/resume",
    },
    {
      title: "Works",
      path: "/works",
    },
    {
      title: "Testimonials",
      path: "/testimonials",
    },
    {
      title: "Contact",
      path: "/contact",
    },
  ];
  return (
    <div className="bg-gradient-to-r from-white to-[#E8DDFD]">
      <nav className="text-[#675885]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center ">
              <div className="flex-shrink-0">
                <a href="/" className=" font-bold text-3xl">
                  Portfolio{" "}
                </a>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-4 flex items-center space-x-4 ">
                {links?.map((link) => (
                  <Link
                    className={`${
                      pathname === link.path
                        ? "text-lg  text-violet-700 border-b-2 transition duration-300 rounded-md border-violet-700 border-transparent font-medium"
                        : "text-lg  hover:text-violet-700 border-b-2 transition duration-300 rounded-md hover:border-violet-700 border-transparent font-medium"
                    }`}
                    key={link.path}
                    href={link.path}
                  >
                    {link.title}
                  </Link>
                ))}
              </div>
            </div>
            <div className=" md:hidden flex items-center">
              <button
                className="inline-flex items-center justify-center p-2 rounded-md text-[#675885] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#675885]"
                onClick={toggleNavbar}
              >
                {isClick ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="size-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M6 18 18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="size-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        {isClick && (
          <div className="md:hidden container ">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {links?.map((link) => (
                <Link
                  className={`${
                    pathname === link.path
                      ? " text-lg block ml-5 text-violet-700  transition duration-300 rounded-lg   font-medium"
                      : "text-lg block ml-5 hover:text-violet-700  transition duration-300 rounded-lg   font-medium"
                  }`}
                  key={link.path}
                  href={link.path}
                >
                  {link.title}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Nav;
