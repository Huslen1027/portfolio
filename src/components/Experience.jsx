import { useTheme } from "@/context/ThemeContext";
export const Experience = () => {
  const { theme } = useTheme();
  const divClassName = theme == "light" ? "bg-gray-50" : "bg-[#111827]";
  const headerButtonp =
    theme == "light"
      ? "bg-gray-200 flex py-1 px-5 justify-center items-center border rounded-xl"
      : "bg-[#374151] flex py-1 px-5 justify-center items-center rounded-xl text-[#D1D5DB]";
  const p = theme == "light" ? "text-[#4B5563]" : "text-[#D1D5DB]";
  const div = theme == "light" ? "bg-[#FFF]" : "bg-[#1F2937]";
  const h1 =
    theme == "light"
      ? "text-lg font-semibold leading-7 text-gray-900"
      : " text-lg font-semibold leading-7 text-[#F9FAFB]";
  const pClassName = theme == "light" ? "text-gray-600" : "text-[#D1D5DB]";

  return (
    <div
      className={`${divClassName} flex px[80px] py-[96px] flex-col justify-center items-centermt-[100px]`}
    >
      <div className="max-w-[1440px] m-auto  container flex px-[32px] flex-col justify-center items-center ">
        <div className="header flex flex-col gap-4 justify-center items-center">
          <div className="top flex flex-col items-center justify-center">
            <button className={headerButtonp}>
              <p className={`${p}text-sm leading-5 not-italic`}>Experience</p>
            </button>
          </div>
          <div className="bottom flex flex-col items-center justify-center ">
            <p className={`${p} text-lg leading-7  font-normal`}>
              Here is a quick summary of my most recent experiences:
            </p>
          </div>
        </div>
        <div
          className={`${div}upwork flex w-[890px] px-[32px] py-[32px] flex-col  rounded-xl mt-[48px]  shadow-md`}
        >
          <div className="container flex gap-[48px]">
            <div className="flex flex-col gap-3 items-start justify-start">
              <img
                className="w-[102px] h-[28px] "
                src="/logo-upwork.svg"
                alt=""
              />
            </div>
            <div className="flex w-[384px] flex-col gap-4">
              <h1 className={h1}>Sr. Frontend Developer</h1>
              <ul className="flex flex-col gap-1 items-start list-disc">
                <li className="font-normal text-base text-gray-600 loading-7">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </li>
                <li className="font-normal text-base text-gray-600 loading-7">
                  Ut pretium arcu et massa semper, id fringilla leo semper.
                </li>
                <li className="font-normal text-base text-gray-600 loading-7">
                  Sed quis justo ac magna.
                </li>
                <li className="font-normal text-base text-gray-600 loading-7">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </li>
              </ul>
            </div>
            <div className="flex items-start gap-6">
              <p className="text-gray-700 text-base loading-7 font-normal">
                Nov 2021 - Present
              </p>
            </div>
          </div>
        </div>
        <div className="upwork flex w-[890px] px-[32px] py-[32px] flex-col bg-white rounded-xl mt-[48px]  shadow-md ">
          <div className="container flex gap-[48px]">
            <div className="flex flex-col gap-3 items-start justify-start">
              <img
                className="w-[102px] h-[28px] "
                src="/logo-upwork.svg"
                alt=""
              />
            </div>
            <div className="flex w-[384px] flex-col gap-4">
              <h1 className="text-lg font-semibold leading-7 text-gray-900">
                Team Lead
              </h1>
              <ul className="flex flex-col gap-1 items-start list-disc pl-[13px]">
                <li className="font-normal text-base text-gray-600 loading-7">
                  Sed quis justo ac magna.
                </li>
                <li className="font-normal text-base text-gray-600 loading-7">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </li>
                <li className="font-normal text-base text-gray-600 loading-7">
                  Sed quis justo ac magna.
                </li>
                <li className="font-normal text-base text-gray-600 loading-7">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </li>
              </ul>
            </div>
            <div className="flex items-start gap-6">
              <p className="text-gray-700 text-base loading-7 font-normal">
                Jul 2017 - Oct 2021
              </p>
            </div>
          </div>
        </div>
        <div className="upwork flex w-[890px] px-[32px] py-[32px] flex-col bg-white rounded-xl mt-[48px]  shadow-md ">
          <div className="container flex gap-[48px]">
            <div className="flex flex-col gap-3 items-start justify-start">
              <img
                className="w-[102px] h-[28px] "
                src="/logo-upwork.svg"
                alt=""
              />
            </div>
            <div className="flex w-[384px] flex-col gap-4">
              <h1 className="text-lg font-semibold leading-7 text-gray-900">
                Sr. Frontend Developer
              </h1>
              <ul className="flex flex-col gap-1 items-start list-disc  pl-[13px]">
                <li className="font-normal text-base text-gray-600 loading-7">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
                  ipsum dolor sit amet, consectetur adipiscing elit.
                </li>
              </ul>
            </div>
            <div className="flex items-start gap-6">
              <p className="text-gray-700 text-base loading-7 font-normal">
                Dec 2015 - May 2017
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
