import React from "react";
import { skillsIcon1 } from "@/utils/dummyData";
import { skillsIcon2 } from "@/utils/dummyData";
import Image from "next/image";
import { useTheme } from "@/context/ThemeContext";
export const Skills = () => {
  const { theme } = useTheme();
  const divClassName =
    theme == "light"
      ? "bg-[#FFF] py-[50px] px-[16px] flex flex-col justify-center items-center "
      : "bg-[#030712] py-[50px] px-[16px] flex flex-col justify-center items-center";
  const pClassName = theme == "light" ? "text-[#4B5563]" : "text-[#D1D5DB]";
  const headerButtonp =
    theme == "light"
      ? "bg-gray-200 flex py-1 px-5 justify-center items-center border rounded-xl"
      : "bg-[#374151] flex py-1 px-5 justify-center items-center rounded-xl text-[#D1D5DB]";
  return (
    <div className={divClassName}>
      <div className=" flex flex-col items-start  gap-6 ">
        <div className="flex flex-col gap-4 ">
          <div className="flex flex-col items-center justify-center">
            <button className={headerButtonp}>
              <p className="text-sm leading-5  not-italic">Skills</p>
            </button>
          </div>
          <div className="flex flex-col justify-center  items-center ">
            <p
              className={`${pClassName}text-lg leading-7 text-gray-600 font-normal  text-center`}
            >
              The skills, tools and technologies I am really good at:
            </p>
          </div>
        </div>
        <div className=" flex flex-col  items-start justify-center">
          <div className="flex flex-wrap gap-10 justify-between">
            {skillsIcon1.map((element) => (
              <div className="flex flex-col justify-between items-center gap-2 ">
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
