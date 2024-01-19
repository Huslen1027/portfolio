import React from "react";
export const Header = ({ toggleDarkmode, isDarkmode }) => {
  return (
    <div
      className={`flex mx-auto max-w-screen-xl px-16 py-4  justify-between items-center${
        isDarkmode ? "dark:bg-[#030712]" : ""
      }`}
    >
      <div className="container flex  justify-between ">
        <div>
          <h1
            className={`${
              isDarkmode ? "dark:text-gray-50" : "text-2xl   font-bold"
            }`}
          >
            &#60;SS/&#62;
          </h1>
        </div>

        <div
          className={`navigation flex gap-6 justify-center items-center #{isDarkmode ? "dark:text-[#D1D5DB]" : ""
        }`}
        >
          <a className="text-gray-600" href="#">
            About
          </a>
          <a className="text-gray-600" href="#">
            Work
          </a>
          <a className="text-gray-600" href="#">
            Testimonials
          </a>
          <a className="text-gray-600" href="#">
            Contant
          </a>
          <div
            className="actions flex gap-4 justify-center items-center"
            onClick={() => {
              toggleDarkmode();
            }}
          >
            <button className="flex p-2 justify-center items-center">
              <img src="/Icon.svg" alt="" />
            </button>

            <button className="download flex px-4 py-1 items-center gap-2 justify-center rounded-xl bg-black">
              <p className="text-gray-50">Download CV</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
