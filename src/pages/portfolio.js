import React, { useState } from "react";
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
  const [isDarkmode, setDarkmode] = useState(false);

  const toggleDarkmode = () => {
    setDarkmode(!isDarkmode);
  };
  return (
    <div className="max-w-[1440px] m-auto">
      <Header toggleDarkmode={toggleDarkmode} isDarkmode={isDarkmode} />
      <Hero isDarkmode={isDarkmode} />
      <About isDarkmode={isDarkmode} />
      <Skills isDarkmode={isDarkmode} />
      <Experience isDarkmode={isDarkmode} />
      <Work isDarkmode={isDarkmode} />
      <Contant isDarkmode={isDarkmode} />
      <Footer isDarkmode={isDarkmode} />
    </div>
  );
};
export default Portfolio;
