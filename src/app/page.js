"use client";
import Image from "next/image";
import Banner from "./components/Banner";
import Resume from "./components/Resume";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Testimonials from "./components/Testimonials";

export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <Resume></Resume>
      <Skills></Skills>
      <Work></Work>
      <Testimonials></Testimonials>
    </div>
  );
}
