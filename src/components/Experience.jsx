import { useTheme } from "@/context/ThemeContext";
import { upwork } from "@/utils/exprienceData";
import { Button } from "@/components/Button";
import { LogoUpwork } from "./icons/LogoUpwork";
export const Experience = () => {
  const { theme } = useTheme();
  const divClassName =
    theme == "light"
      ? "bg-gray-50 text-[#4B5563]"
      : "bg-[#9FAFB] text-[#D1D5DB]";

  const div = theme == "light" ? "bg-[#FFF]" : "bg-[#1F2937] drop-shadow-2xl";
  const h1 =
    theme == "light"
      ? "text-lg font-semibold leading-7 text-gray-900"
      : " text-lg font-semibold leading-7 text-[#F9FAFB]";
  const dateColor = theme == "light" ? "text-[#374151]" : "text-[#E5E7EB]";
  return (
    <div
      className={`${divClassName} flex flex-col justify-center items-center py-16 px-4 w-[480px]`}
    >
      <div className="  flex flex-col  gap-4 items-center ">
        <div className="header flex flex-col gap-4 justify-center items-center">
          <Button value="Experience" />
          <p className="max-w-[576px] text-lg text-center">
            Here is a quick summary of my most recent experiences:
          </p>
        </div>
        {upwork.map((e) => (
          <div
            className={`${div} flex p-[32px] flex-col items-start rounded-xl shadow-sm`}
          >
            <div className="flex flex-col gap-4 items-start ">
              {e.icon}
              <div className="flex items-start gap-6 sm:order-1">
                <p className={`${dateColor} text-base loading-7 font-normal`}>
                  {e.date}
                </p>
              </div>
              <div className="flex w-[384px] flex-col gap-4 ">
                <h1 className={h1}>{e.header}</h1>
                <ul className="flex flex-col gap-1 items-start list-disc ml-4">
                  {e.products.map((data) => (
                    <li>{data}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
