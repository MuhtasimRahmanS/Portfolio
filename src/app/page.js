"use client";
import Banner from "./components/Banner";
import Resume from "./components/Resume";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <Resume></Resume>
      <Skills></Skills>
      <Work></Work>
      <Testimonials></Testimonials>
      <Contact></Contact>
    </div>
  );
}
