import React from "react";
import { skillsIcon1 } from "@/utils/dummyData";
import { skillsIcon2 } from "@/utils/dummyData";
import Image from "next/image";
export const Skills = () => {
  return (
    <div className="skills flex px-[80px] py-[96px] flex-col items-center justify-center">
      <div className="container flex px-[32px] gap-12 self-stretch ">
        <div className="top flex flex-col items-start gap-4 self-stretch ">
          <div className="row  flex flex-col items-center self-stretch justify-center">
            <p className="text-sm leading-5 text-gray-600 not-italic">Skills</p>
          </div>
          <div className="row flex flex-col justify-center self-stretch items-center ">
            <p className="max-w-[576px] text-sm leading-7 ">
              The skills, tools and technologies I am really good at:
            </p>
          </div>
        </div>
        <div
          className="flex items-start gap-[48px] self-stretch flex-wrap w-[100%]
         h-[248px]"
        >
          <div className="flex justify-between items-center self-stretch w-[100%]">
            {skillsIcon1.map((element) => (
              <div className="flex flex-col justify-center items-center gap-2 self-stretch">
                {<Image src={element.icon} width={64} height={64} />}
                <p>{element.iconName}</p>
              </div>
            ))}
          </div>
          <div className="flex justify-between items-center self-stretch w-[100%]">
            {skillsIcon2.map((element) => (
              <div className="flex flex-col justify-center items-center gap-2 self-stretch">
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
