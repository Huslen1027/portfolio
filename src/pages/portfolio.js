import React from "react";
import { Header, Hero, About, Skills } from "@/components/index";
// import { Hero } from "@/components/Hero";
// import { About } from "@/components/About";
// import { Skills } from "@/components/Skills";
// import { Experience } from "@/components/Experience";
// import { Work } from "@/components/Work";
// import { Contant } from "@/components/Contant";
// import { Footer } from "@/components/Footer";
const Portfolio = () => {
  return (
    <div className="max-w-[1440px] m-auto">
      <Header />
      <Hero />
      <About />
      <Skills />
    </div>
  );
};
export default Portfolio;
