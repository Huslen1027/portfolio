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
      <section id="section1">
        <Header />
      </section>
      <section>
        {" "}
        <Hero />
      </section>

      <section id="section3">
        <About />
      </section>
      {/* <Skills />
      <section id="section5">
        {" "}
        <Experience />
      </section>

      <section id="section4">
        <Work />
      </section>
      <section id="section6">
        {" "}
        <Contant />
      </section>

      <Footer /> */}
    </div>
  );
};
export default Portfolio;
