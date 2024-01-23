// import Image from "next/image";

import Portfolio from "./portfolio";
import ThemeProvider from "@/context/ThemeContext";

export default function Home() {
  return (
    <ThemeProvider>
      <Portfolio />;
    </ThemeProvider>
  );
}
