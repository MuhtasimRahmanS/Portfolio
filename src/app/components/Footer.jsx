import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="footer footer-center bg-[#31185F] text-primary-content p-10">
        <aside>
          <p className="font-bold text-4xl pt-8 text-[#8750F7]">Portfolio</p>
          <div className="ml-4 flex flex-row flex-wrap justify-center items-center md:space-x-10 space-x-4 ">
            <a
              href="/"
              className="text-lg  hover:text-violet-700 border-b-4 transition duration-300 rounded-md hover:border-violet-700 border-transparent font-medium"
            >
              {" "}
              Home
            </a>
            <a
              href="/skills"
              className="text-lg  hover:text-violet-700 border-b-4 transition duration-300 rounded-md hover:border-violet-700 border-transparent font-medium"
            >
              {" "}
              Skills
            </a>
            <a
              href="/resume"
              className="text-lg  hover:text-violet-700 border-b-4 transition duration-300 rounded-md hover:border-violet-700 border-transparent font-medium"
            >
              {" "}
              Resume
            </a>
            <a
              href="/works"
              className="text-lg  hover:text-violet-700 border-b-4 transition duration-300 rounded-md hover:border-violet-700 border-transparent font-medium"
            >
              {" "}
              Works
            </a>
            <a
              href="/testimonials"
              className="text-lg  hover:text-violet-700 border-b-4 transition duration-300 rounded-md hover:border-violet-700 border-transparent font-medium"
            >
              {" "}
              Testimonials
            </a>
            <a
              href="/contact"
              className="text-lg  hover:text-violet-700 border-b-4 transition duration-300 rounded-md hover:border-violet-700 border-transparent font-medium"
            >
              {" "}
              Contact
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
