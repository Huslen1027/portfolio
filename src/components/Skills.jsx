import React from "react";
import { skillsIcon1 } from "@/utils/dummyData";
import { skillsIcon2 } from "@/utils/dummyData";
import Image from "next/image";
import { useTheme } from "@/context/ThemeContext";
export const Skills = () => {
  const { theme } = useTheme();
  const divClassName =
    theme == "light"
      ? "bg-[#FFF] py-[96px] px-[80px] flex flex-col justify-center "
      : "bg-[#030712] py-[96px] px-[80px]";
  const pClassName = theme == "light" ? "text-#4B5563)" : "text-[#D1D5DB]";
  return (
    <div className={divClassName}>
      <div className=" max-w-[1440px] m-auto  container flex flex-col px-[32px] gap-12  ">
        <div className="flex flex-col gap-4 w-[1216px] h-[72px]">
          <div className="flex flex-col items-center justify-center">
            <button className="flex py-1 px-5 justify-center items-center rounded-xl bg-gray-200">
              <p className="text-sm leading-5 text-gray-600 not-italic">
                Skills
              </p>
            </button>
          </div>
          <div className="flex flex-col justify-center  items-center ">
            <p
              className={`${pClassName}text-lg leading-7 text-gray-600 font-normal`}
            >
              The skills, tools and technologies I am really good at:
            </p>
          </div>
        </div>
        <div
          className="flex items-start gap-[48px]  flex-wrap w-[100%]
         h-[248px]"
        >
          <div className="flex justify-between items-center  w-[100%] object-scale-down">
            {skillsIcon1.map((element) => (
              <div className="flex flex-col justify-center items-center gap-2 ">
                {<Image src={element.icon} width={64} height={64} />}
                <p>{element.iconName}</p>
              </div>
            ))}
          </div>
          <div className="flex justify-between items-center w-[100%] object-scale-down">
            {skillsIcon2.map((element) => (
              <div className="flex flex-col justify-center items-center gap-2">
                {<Image src={element.icon} width={64} height={64} />}
                <p>{element.iconName}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
