import React from "react";
export const Header = () => {
  return (
    <div className=" flex p-4 justify-between items-center sm:flex mx-auto  px-16 py-4 sm:justify-between sm:items-center">
      <div className="max-w-[93px] max-h-[36px] flex justify-between items-center sm:container sm:flex sm:justify-between ">
        <div className=" flex justify-between items-center sm:flex text-2xl font-bold">
          <h1 className=" sm:text-black text-2xl  font-bold">&#60;SS/&#62;</h1>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M4 12H20"
              stroke="#4B5563"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M4 6H20"
              stroke="#4B5563"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M4 18H20"
              stroke="#4B5563"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>

        <div className=" sm:flex gap-6 justify-center items-center text-base font-medium hidden">
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
          <div className="actions flex gap-4 justify-center items-center">
            <img
              src="/Icon.svg"
              alt=""
              className="h-[24px] self-center pr-[16px] pl[24px] cursor-pointer"
            />

            <button className="download flex px-4 py-1 items-center gap-2 justify-center rounded-xl bg-black">
              <p className="text-gray-50">Download CV</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
