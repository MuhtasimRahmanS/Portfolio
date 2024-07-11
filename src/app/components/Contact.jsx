import React from "react";
import { FiPhoneCall } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import { MdOutlineLocationOn } from "react-icons/md";
const Contact = () => {
  return (
    <div className="bg-[#fff2ff] py-10 md:py-20">
      <div className="container overflow-hidden mx-auto ">
        <div className="items-center overflow-hidden gap-10 px-5 py-6 md:py-16 rounded-lg md:flex md:px-12 lg:px-16 xl:px-32 ">
          <div
            data-aos="fade-right"
            data-aos-duration="1200"
            data-aos-delay="400"
            className="flex overflow-hidden flex-col justify-between bg-white rounded-2xl md:p-10 p-4"
          >
            <div className="space-y-2">
              <h1 className="md:text-5xl text-3xl font-bold bg-gradient-to-r from-[#854FF3] to-[#31185F] bg-clip-text text-transparent">
                Let’s work together!
              </h1>
              <div className="py-6">
                I design and code beautifully simple things and i love what i
                do. Just simple like that!
              </div>
            </div>
            <form noValidate="" className="space-y-6">
              <div className="flex gap-2 md:gap-4">
                <input
                  id="name"
                  type="text"
                  placeholder="Full name"
                  className="w-full p-3 rounded-xl bg-[#fff2ff] "
                />
                <input
                  id="name"
                  type="text"
                  placeholder="Last name"
                  className="w-full p-3 rounded-xl bg-[#fff2ff] "
                />
              </div>
              <div className="flex gap-2 md:gap-4">
                <input
                  placeholder="Email"
                  id="email"
                  type="email"
                  className="w-full p-3 rounded-xl bg-[#fff2ff] "
                />
                <input
                  placeholder="Phone"
                  id="email"
                  type="number"
                  className="w-full no-arrows p-3 rounded-xl bg-[#fff2ff] "
                />
              </div>
              <div>
                <textarea
                  placeholder="Message"
                  id="message"
                  rows="3"
                  className="w-full p-3 rounded-xl bg-[#fff2ff] "
                ></textarea>
              </div>
              <button
                type="submit"
                className=" bg-gradient-to-r from-[#854FF3] to-[#31185F] hover:bg-gradient-to-r hover:from-[#31185F] hover:to-[#854FF3] transition duration-500 text-white px-8 py-5 text-sm font-bold tracking-wide uppercase rounded-full"
              >
                Send Message
              </button>
            </form>
          </div>
          <div className="pl-10 overflow-hidden md:mt-0 mt-5 space-y-10">
            <div
              data-aos="fade-left"
              data-aos-duration="1200"
              data-aos-delay="200"
              className="flex items-center gap-4"
            >
              <div className="bg-gradient-to-r from-[#854FF3] to-[#31185F] rounded-full p-4">
                <FiPhoneCall className="text-white text-2xl" />
              </div>
              <div>
                <h3 className="text-lg font-medium">Phone</h3>
                <p className="text-lg font-medium">5465465444534</p>
              </div>
            </div>
            <div
              data-aos="fade-left"
              data-aos-duration="1200"
              data-aos-delay="300"
              className="flex items-center gap-2"
            >
              <div className="bg-gradient-to-r from-[#854FF3] to-[#31185F] rounded-full p-4">
                <MdOutlineEmail className="text-white text-2xl" />
              </div>
              <div className="text-lg font-medium">
                <h3>Email</h3>
                <p>5465465444534</p>
              </div>
            </div>
            <div
              data-aos="fade-left"
              data-aos-duration="1200"
              data-aos-delay="400"
              className="flex items-center gap-2"
            >
              <div className="bg-gradient-to-r from-[#854FF3] to-[#31185F] rounded-full p-4">
                <MdOutlineLocationOn className="text-white text-2xl" />
              </div>
              <div className="text-lg font-medium">
                <h3>Address</h3>
                <p>5465465444534</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
