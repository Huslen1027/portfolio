import React from "react";
import { useTheme } from "@/context/ThemeContext";
export const Hero = () => {
  const { theme } = useTheme();
  const divClassName =
    theme == "light"
      ? "bg-white py-[46px] px-[30px] "
      : "bg-black py-[46px] px-[30px]";
  const h1 =
    theme == "light"
      ? "text-black text-4xl sm:text-6xl font-bold"
      : "text-white text-4xl sm:text-6xl font-bold";
  const p =
    theme == "light"
      ? "text-gray-600 alexaP text-sm font-normal leading-6 not-italic font-sans"
      : "text-gray-600 alexaP text-sm font-normal leading-6 not-italic font-sans";
  return (
    <div className={`${divClassName} flex justify-between`}>
      <div className="max-w-[1440px] m-auto  container flex flex-col-reverse gap-[30px] sm:flex-row items-start justify-between">
        <div className="littlehero1 flex items-start flex-col gap-10 self-stretch max-w-3xl justify-center">
          <div className="content">
            <h1 className={h1}>I’m Alexa Demie 👋</h1>
            <p className={p}>
              Alexa Demie is an American actress and singer. She is known for
              her role as Madeleine "Maddy" Perez on the HBO teen drama
              television series Euphoria. Demie made her feature film debut with
              a minor role in the comedy-drama Brigsby Bear before starring in
              the coming-of-age film Mid90s and the drama film Waves. Wikipedia
              Born: December 11, 1990 (age 33 years), Los Angeles, California,
              United States Height: 1.67 m
            </p>
          </div>
          <div className="group flex items-start gap-2 self-stretch justify-center flex-col  text-gray-600">
            <div className="location flex">
              <img
                src="/Name=icon-location, Size=24, Theme Mode=light.svg"
                alt=""
              />
              <p>Ahmedabad, India</p>
            </div>
            <div className="hire flex  ">
              <div className="flex w-6 h-6 flex-col items-center justify-center">
                <img className="w-2 h-2 flex-shrink" src="/tseg.png" alt="" />
              </div>

              <p className="">Available for new projects</p>
            </div>
          </div>
          <div className="actions">
            <div className="links flex">
              <div className="icon flex p-2 justify-center items-center">
                <img src="/github.svg" alt="" />
              </div>
              <div className="icon flex p-2 justify-center items-center">
                <img src="/twitter.svg" alt="" />
              </div>
              <div className="icon flex p-2 justify-center items-center">
                <img src="/figma.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="littlehero2 sm:flex flex-col sm:justify-center  flex place-content-center  ">
          <div className="absolute z-10  ml-[40px]">
            <img
              className=" border-solid border-[white] border-[8px] w-[240px] h-[270px]"
              src="/alexa-demi-euphoria.jpg"
              alt=""
            />
          </div>
          <div className="w-[260px] h-[270px]  ml-[30px] mt-[25px]  bg-gray-200 "></div>
        </div>
      </div>
    </div>
  );
};
