import Image from "next/image";
import Banner from "./components/Banner";
import Resume from "./components/Resume";
import Skills from "./components/Skills";

export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <Resume></Resume>
      <Skills></Skills>
    </div>
  );
}
