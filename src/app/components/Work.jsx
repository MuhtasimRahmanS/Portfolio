import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import img1 from "../../../public/img1.png";
import img2 from "../../../public/img2.png";
import img3 from "../../../public/img3.png";
import img4 from "../../../public/img4.png";
import "react-tabs/style/react-tabs.css";
import "./MyTabs.css";
import WorkCard from "./WorkCard";
const Work = () => {
  const allWork = [
    {
      id: 1,
      img: img1,
      title: "Portfolio",
      sub: "Personal portfolio website",
      category: "Portfolio",
      github: "https://github.com/",
      livelink: "livelink.com",
    },
    {
      id: 2,
      img: img2,
      title: "TourBuzz",
      sub: "Tour guide website",
      category: "Blog",
      github: "github.com",
      livelink: "livelink.com",
    },
    {
      id: 3,
      img: img3,
      title: "Orange Cafe",
      sub: "Restaurent management website",
      category: "Food",
      github: "github.com",
      livelink: "livelink.com",
    },
    {
      id: 4,
      img: img4,
      title: "Student Bite",
      sub: "Meal management website",
      category: "Food",
      github: "github.com",
      livelink: "livelink.com",
    },
  ];
  const portfolio = allWork.filter((item) => item.category === "Portfolio");
  const blog = allWork.filter((item) => item.category === "Blog");
  const food = allWork.filter((item) => item.category === "Food");
  return (
    <div className="bg-[#fff2ff] py-20">
      <div className="container mx-auto">
        <h1 className="text-5xl font-bold text-center bg-gradient-to-r from-[#854FF3] to-[#31185F] bg-clip-text text-transparent">
          My Recent Works
        </h1>
        <p className="w-2/3 pt-5 text-center mx-auto">
          We put your ideas and thus your wishes in the form of a unique web
          project that inspires you and you customers.
        </p>
        <Tabs>
          <TabList className="font-semibold text-center pt-10 mb-6">
            <Tab>All Work</Tab>
            <Tab>Portfolio</Tab>
            <Tab>Blog</Tab>
            <Tab>Food</Tab>
          </TabList>

          <TabPanel>
            <div className="grid grid-cols-1 md:grid-cols-2  gap-8 mb-10 ">
              {allWork.map((work) => (
                <WorkCard key={work.id} work={work}></WorkCard>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10 ">
              {portfolio.map((work) => (
                <WorkCard key={work.id} work={work}></WorkCard>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-1 md:grid-cols-2  gap-8 mb-10 ">
              {blog.map((work) => (
                <WorkCard key={work.id} work={work}></WorkCard>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-1 md:grid-cols-2  gap-8 mb-10 ">
              {food.map((work) => (
                <WorkCard key={work.id} work={work}></WorkCard>
              ))}
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Work;
