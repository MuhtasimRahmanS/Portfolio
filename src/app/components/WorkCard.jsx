import React from "react";
import Image from "next/image";
import { MdArrowOutward } from "react-icons/md";

const WorkCard = ({ work }) => {
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="1200"
      data-aos-delay="400"
      className="relative imghov overflow-hidden md:px-0 px-3 rounded-xl lg:h-[450px]"
    >
      <Image className=" rounded-xl" alt="img" src={work.img} />
      <div className="w-full  absolute divhov transition-all duration-700  -bottom-52 z-10 ">
        <div className="p-4 rounded-xl opacity-0 transition-all duration-700  mx-auto over h-2/5 w-4/5 bg-gradient-to-r from-[#854FF3] to-[#31185F] ">
          <div className="flex justify-between">
            <div>
              <h3 className="text-lg text-white font-medium ">{work.title}</h3>
              <p className="text-white text-xs">{work.sub}</p>
            </div>
            <div>
              <a
                className="flex items-center text-white text-sm"
                href={`${work.github}`}
              >
                GitHub <MdArrowOutward className="rotate" />{" "}
              </a>
              <a
                className="flex items-center text-white text-sm"
                href={`${work.livelink}`}
              >
                Livelink <MdArrowOutward />{" "}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
