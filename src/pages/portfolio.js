import { useState } from "react";
import {
  Header,
  Hero,
  About,
  Skills,
  Experience,
  Work,
  Contant,
  Footer,
} from "@/components/index";

export const Portfolio = () => {
  return (
    <div className={`max-w-[1440px] m-auto } `}>
      <Header />
      <Hero />
      {/* <About />
      <Skills />
      <Experience />
      <Work />
      <Contant />
      <Footer /> */}
    </div>
  );
};
export default Portfolio;
