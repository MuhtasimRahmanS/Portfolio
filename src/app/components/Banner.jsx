import React from "react";
import photo from "../../../public/img.jpg";
import Image from "next/image";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
const Banner = () => {
  return (
    <div className="bg-gradient-to-r from-white to-[#E8DDFD]">
      <div className=" py-16 container  mx-auto  ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <Image
            width={400}
            className="rounded-xl rotate-6 transition duration-300 hover:rotate-0"
            alt="pic "
            src={photo}
          />
          <div>
            <h3 className="text-4xl font-bold text-[#2A1454]">I am X</h3>
            <h1 className="text-5xl font-bold bg-gradient-to-r from-[#854FF3] to-[#31185F] bg-clip-text text-transparent">
              Web Developer + <br />
              UX Designer
            </h1>
            <p className="py-6 w-2/3 text-[#40374A]">
              I break down complex user experinece problems to create integritiy
              focussed solutions that connect billions of people
            </p>
            <div className=" md:flex gap-5 ">
              <div className="mb-6 ">
                <button className="btn btn-outline  text-[#8750F7] ">
                  Download CV{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="size-5"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
                    />
                  </svg>
                </button>
              </div>
              <div className="space-x-3 ">
                <button className="btn btn-circle btn-outline text-[#8750F7]">
                  <FaFacebookF />
                </button>
                <button className="btn btn-circle  text-[#8750F7] btn-outline">
                  <FaXTwitter />
                </button>
                <button className="btn btn-circle text-[#8750F7] btn-outline">
                  <FaLinkedinIn />
                </button>
                <button className="btn btn-circle  text-[#8750F7] btn-outline">
                  <FaGithub />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 my-10">
          <div className="flex items-center justify-center  text-[#8750F7]">
            <h1 className="text-7xl font-bold ">0</h1>
            <p text-xl>
              Years of <br />
              Experience
            </p>
          </div>
          <div className="flex items-center justify-center text-[#8750F7]">
            <h1 className="text-7xl font-bold">0+</h1>
            <p text-xl>
              Project <br />
              Completed
            </p>
          </div>
          <div className="flex items-center justify-center text-[#8750F7]">
            <h1 className="text-7xl font-bold">0K</h1>
            <p text-xl>
              Happy <br />
              Clients
            </p>
          </div>
          <div className="flex items-center justify-center text-[#8750F7]">
            <h1 className="text-7xl font-bold">0</h1>
            <p text-xl>
              Years of <br />
              Experience
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
