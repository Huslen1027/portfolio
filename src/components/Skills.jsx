import React from "react";
import { skillsIcon1 } from "@/utils/dummyData";
import { useTheme } from "@/context/ThemeContext";
import { Button } from "./Button";
export const Skills = () => {
  const { theme } = useTheme();
  const divClassName =
    theme == "light"
      ? "bg-[#FFF] py-[50px] px-[16px] sm:py-[80px] sm:[96px]flex flex-col justify-center items-center "
      : "bg-[#030712] py-[50px] px-[16px] flex flex-col justify-center items-center";
  const pClassName = theme == "light" ? "text-[#4B5563]" : "text-[#D1D5DB]";

  return (
    <div className={divClassName}>
      <div className=" flex flex-col  gap-6  sm:gap-[48px]">
        <div className="flex flex-col gap-4 ">
          <div className=" flex justify-center">
            <Button value="skills" />
          </div>
          <div className="flex flex-col justify-center  items-center ">
            <p
              className={`${pClassName}text-lg leading-7 text-gray-600 font-normal  text-center`}
            >
              The skills, tools and technologies I am really good at:
            </p>
          </div>
        </div>
        <div className=" flex justify-center ">
          <div className="flex flex-wrap gap-10  sm:gap-12 justify-between sm:w-[950px]">
            {skillsIcon1.map((element) => (
              <div className="flex flex-col justify-between  items-center gap-1 ">
                {element.icon}
                <p className={pClassName}>{element.iconName}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
