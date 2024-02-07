import { useTheme } from "@/context/ThemeContext";
export const Contant = () => {
  const { theme } = useTheme();
  const divClassName =
    theme == "light"
      ? "bg-white py-[96px] px-[80px]"
      : "bg-[#030712] py-[96px] px-[80px]";
  const buttonClassName =
    theme == "light"
      ? "bg-[#E5E7EB] text-[#4B5563]"
      : "bg-[#374151] text-[#D1D5D]";
  const gmail = theme == "light" ? "bg-[#111827]" : "bg-[#F9FAFB]";
  return (
    <div
      className={`${divClassName}contant flex px-4 py-16 sm:px-[80px] sm:py-[96px] flex-col items-center justify-center `}
    >
      <div className=" gap-6   flex justify-center flex-col sm:gap-12 items-center ">
        <div className="header flex flex-col gap-4 ">
          <div className="top flex flex-col justify-center items-center">
            <button
              className={`${buttonClassName}flex py-1 px-5 justify-center items-center rounded-xl`}
            >
              get in touch
            </button>
          </div>
          <div className="bottom flex flex-col items-center justify-center ">
            <p className="text-center text-base sm:text-lg leading-7 text-gray-600 max-w-[343px] h-[112px] sm:w-[576px]">
              What’s next? Feel free to reach out to me if you're looking for a
              developer, have a query, or simply want to connect.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-4 items-center justify-center">
          <div className="gmail flex justify-center gap-5 items-center">
            <img className=" w-6 h-6 sm:w-8 sm:h-8" src="/Gmail.png" alt="" />
            <p
              className={`${gmail}text-lg sm:text-3xl not-italic font-semibold leading-10 text-center `}
            >
              hvslenhvslen566@gmail.com
            </p>
            <div>
              <img className="w-6 h-6 sm:w-8 sm:h-8" src="/copy.svg" alt="" />
            </div>
          </div>
          <div className="number flex justify-center gap-5 items-center">
            <img className="w-6 h-6 sm:w-8 sm:h-8" src="/phone.svg" alt="" />
            <p className=" text-lg sm:text-3xl not-italic font-semibold leading-10 text-center text-gray-900">
              +976 85250765
            </p>
            <div>
              <img className="w-6 h-6 sm:w-8 sm:h-8" src="/copy.svg" alt="" />
            </div>
          </div>
        </div>
        <div className="end flex justify-center items-center gap-16 ">
          <div className="social flex justify-center flex-col gap-2 items-center">
            <p className="text-sm leading-5 text-gray-600 not-italic">
              You may also find me on these platforms!
            </p>
            <div className="flex flex-col justify-center items-center gap-4 ">
              <div className="flex items-center gap-3">
                <div className="">
                  <img src="/github.svg" alt="" />
                </div>
                <div>
                  <img src="/twitter.svg" alt="" />
                </div>
                <div>
                  <img src="/figma.svg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
