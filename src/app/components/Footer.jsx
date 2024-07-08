import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="footer footer-center bg-[#31185F] text-primary-content p-10">
        <aside>
          <p className="font-bold text-4xl pt-8 text-[#8750F7]">Portfolio</p>
          <div className="ml-4 flex items-center space-x-10 ">
            <a
              href="/"
              className="text-md  hover:text-[#8750F7] transition duration-300   font-bold text-white"
            >
              {" "}
              Home
            </a>
            <a
              href="/"
              className="text-md  hover:text-[#8750F7]  transition duration-300   font-bold text-white"
            >
              {" "}
              Home
            </a>
            <a
              href="/"
              className="text-md  hover:text-[#8750F7]  transition duration-300   font-bold text-white"
            >
              {" "}
              Home
            </a>
            <a
              href="/"
              className="text-md  hover:text-[#8750F7]  transition duration-300   font-bold text-white"
            >
              {" "}
              Home
            </a>
          </div>
          <p className="text-[#8750F7]">
            Copyright © ${new Date().getFullYear()} - All right reserved
          </p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
