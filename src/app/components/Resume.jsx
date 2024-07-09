import React from "react";

const Resume = () => {
  return (
    <div className="bg-[#fff2ff] py-20">
      <div className="md:flex container mx-auto gap-10 justify-evenly">
        <div>
          {" "}
          <div className="flex items-center pb-10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-10 text-[#8750F7] "
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"
              />
            </svg>
            <h1 className="text-5xl font-bold bg-gradient-to-r from-[#854FF3] to-[#31185F] bg-clip-text text-transparent">
              My Experience
            </h1>
          </div>
          <div className="space-y-6">
            <div className="hove rounded-xl bg-white py-6 pl-10 hover:text-white hover:bg-gradient-to-r from-[#854FF3] to-[#31185F]">
              <p className="text-xl font-bold  text-[#8750F7]">
                2022 - Present
              </p>
              <p className="text-xl font-bold ">LEAD DEVELOPER</p>
              <p className="text-lg ">Blockdots, London</p>
            </div>
            <div className="hove rounded-xl bg-white py-6 pl-10 hover:text-white hover:bg-gradient-to-r from-[#854FF3] to-[#31185F]">
              <p className="text-xl font-bold  text-[#8750F7]">2021 - 2022</p>
              <p className="text-xl font-bold ">FULL STACK WEB DEVELOPER</p>
              <p className="text-lg ">Parsons, The New School</p>
            </div>
            <div className="hove rounded-xl bg-white py-6 pl-10 hover:text-white hover:bg-gradient-to-r from-[#854FF3] to-[#31185F]">
              <p className="text-xl font-bold  text-[#8750F7]">2020 - 2021</p>
              <p className="text-xl font-bold ">UI DESIGNER</p>
              <p className="text-lg ">House of Life, Leeds</p>
            </div>
            <div className="hove rounded-xl bg-white py-6 pl-10 hover:text-white hover:bg-gradient-to-r from-[#854FF3] to-[#31185F]">
              <p className="text-xl font-bold  text-[#8750F7]">2018 - 2020</p>
              <p className="text-xl font-bold ">
                2018 - 2020 JUNIOR GRAPHICS <br /> DESIGNER
              </p>
              <p className="text-lg ">Theme Junction, Bursa</p>
            </div>
          </div>
        </div>
        <div>
          {" "}
          <div className="flex md:pt-0 pt-10 items-center pb-10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-10 text-[#8750F7] "
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
              />
            </svg>
            <h1 className="text-5xl font-bold bg-gradient-to-r from-[#854FF3] to-[#31185F] bg-clip-text text-transparent">
              My Education
            </h1>
          </div>
          <div className="space-y-6">
            <div className="hove rounded-xl bg-white py-6 pl-10 hover:text-white hover:bg-gradient-to-r from-[#854FF3] to-[#31185F]">
              <p className="text-xl font-bold  text-[#8750F7]">2020 - 2023</p>
              <p className="text-xl font-bold ">PROGRAMMING COURSE</p>
              <p className="text-lg ">Harverd University</p>
            </div>
            <div className="hove rounded-xl bg-white py-6 pl-10 hover:text-white hover:bg-gradient-to-r from-[#854FF3] to-[#31185F]">
              <p className="text-xl font-bold  text-[#8750F7]">2016 - 2020</p>
              <p className="text-xl font-bold ">GRAPHIC DESIGN COURSE</p>
              <p className="text-lg ">University of Denmark</p>
            </div>
            <div className="hove rounded-xl bg-white py-6 pl-10 hover:text-white hover:bg-gradient-to-r from-[#854FF3] to-[#31185F]">
              <p className="text-xl font-bold  text-[#8750F7]">2012 - 2015</p>
              <p className="text-xl font-bold ">WEB DESIGN COURSE</p>
              <p className="text-lg ">University of California</p>
            </div>
            <div className="hove rounded-xl bg-white py-6 pl-10 hover:text-white hover:bg-gradient-to-r from-[#854FF3] to-[#31185F]">
              <p className="text-xl font-bold  text-[#8750F7]">2010 - 2011</p>
              <p className="text-xl font-bold ">DESIGN & TECHNOLOGY</p>
              <p className="text-lg ">Parsons, The New School</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
