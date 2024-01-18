import React from "react";
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

const Portfolio = () => {
  return (
    <div className="max-w-[1440px] m-auto">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Work />
      <Contant />
      <Footer />
    </div>
  );
};
export default Portfolio;
