import { useTheme } from "@/context";
export const Footer = () => {
  const { theme } = useTheme();
  const divClassName = theme == "light" ? "bg-white" : "bg-black";
  const pClassName = theme == "light" ? "text-white" : "text-black";
  return (
    <div className="footer flex px-[80px] py-[24px] flex-col justify-center items-center bg-gray-50">
      <div className=" container flex px-[32px]  justify-center items-center gap-16 ">
        <div className="flex  items-start gap-4 ">
          <div className="flex  justify-center items-center ">
            <div className="flex justify-center items-center gap-2 w-[335px] h-[20px]">
              <img src="/C.svg" alt="" />
              <p className="text-sm leading-5  text-gray-600">
                2023 | Designed and coded with ❤️️ by Sagar
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
