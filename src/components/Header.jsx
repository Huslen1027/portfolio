import React from "react";

import { useTheme } from "../context/ThemeContext";

export function Header() {
  const { theme, setTheme } = useTheme();

  const changeThemeHandler = () => {
    setTheme(theme === "light" ? "dark <Moon/>" : "light");
  };
  const divClassName = theme == "light" ? "bg-white" : "bg-black ";
  return (
    <div className={divClassName}>
      <div className=" sm:max-w-[1440px] sm:m-auto  flex justify-between items-center sm:container sm:flex sm:justify-between">
        <div
          className={`${
            theme == "light"
              ? "bg-white sm:flex text-2xl font-bold "
              : "bg-black   sm:flex text-2xl font-bold"
          } flex justify-between w-full px-[20px] py-[10px] `}
        >
          <h1
            className={`${
              theme == "light" ? "text-black" : "text-white"
            } text-2xl  font-bold`}
          >
            &#60;SS/&#62;
          </h1>
          <svg
            className="sm:hidden self-center"
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M4 12H20"
              stroke="#4B5563"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M4 6H20"
              stroke="#4B5563"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M4 18H20"
              stroke="#4B5563"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <div className=" sm:flex gap-6 justify-center items-center text-base font-medium hidden">
          <a className="text-gray-600" href="#section3">
            About
          </a>
          <a className="text-gray-600" href="#section4">
            Work
          </a>
          <a className="text-gray-600" href="#section5">
            Testimonials
          </a>
          <a className="text-gray-600" href="#section6">
            Contant
          </a>
          <div className="actions flex gap-4 justify-center items-center">
            <img
              onClick={changeThemeHandler}
              s
              src={`${theme == "light" ? "/nar.svg" : "/sar.svg"}`}
              alt=""
              className="h-[24px] self-center pr-[16px] pl[24px] cursor-pointer"
            />

            <button
              className={`${
                theme == "light"
                  ? "bg-black download flex px-4 py-1 items-center gap-2 justify-center rounded-xl "
                  : "bg-white download flex px-4 py-1 items-center gap-2 justify-center rounded-xl"
              }`}
            >
              <p
                className={`${
                  theme == "light" ? "text-white " : "text-black "
                }`}
              >
                DownloadCV
              </p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
