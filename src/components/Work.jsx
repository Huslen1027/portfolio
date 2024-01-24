import { useTheme } from "@/context/ThemeContext";
export const Work = () => {
  const { theme } = useTheme();
  const divClassName =
    theme == "light"
      ? "bg-[#FFF] flex px-[80px] py-[96px] flex-col items-center justify-center"
      : "bg-black flex px-[80px] py-[96px] flex-col items-center justify-center ";
  const headerButtonp =
    theme == "light"
      ? "bg-gray-200 flex py-1 px-5 justify-center items-center border rounded-xl"
      : "bg-[#374151] flex py-1 px-5 justify-center items-center rounded-xl text-[#D1D5DB]";
  const p = theme == "light" ? "text-[#4B5563]" : "text-[#D1D5DB]";
  const imageDiv =
    theme == "light" ? "bg-[#F3F4F6]" : "bg-[#374151] flex items-center gap-3";
  return (
    <div className={`${divClassName}`}>
      <div className="max-w-[1440px] m-auto  container flex px-[32px] justify-center items-center gap-12 flex-col">
        <div className="header flex flex-col gap-4 justify-center items-center">
          <div className="top flex flex-col items-center justify-center">
            <button className={headerButtonp}>
              <p className="text-sm leading-5 not-italic">Work</p>
            </button>
          </div>
          <div className="bottom flex flex-col items-center justify-center ">
            <p className={p}>Some of the noteworthy projects I have built:</p>
          </div>
        </div>
        <div className="bottom flex w-[1152px] items-start rounded-xl bg-white ">
          <div className="left flex p-[48px] items-center justify-center rounded-xl bg-gray-50 w-[576px] h-[480px]  drop-shadow-2xl">
            <img className="w-[480px] h-[384px]" src="/Picture.svg" alt="" />
          </div>
          <div className="right w-[576px] h-[480px] flex p-12 flex-col gap-11 items-start  ">
            <h1 className="text-lg font-semibold leading-7 text-gray-900 ">
              Fiskil
            </h1>
            <p className="text-lg leading-7 text-gray-600 font-normal">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis
              in faucibus orci luctus et ultrices posuere cubilia curae.
            </p>
            <div className="button flex items-center content-center gap-2 flex-wrap">
              <button className="flex py-1 px-5 justify-center items-center rounded-xl bg-gray-200">
                <p className="text-sm leading-5 text-gray-600 not-italic">
                  React
                </p>
              </button>
              <button className="flex py-1 px-5 justify-center items-center rounded-xl bg-gray-200">
                <p className="text-sm leading-5 text-gray-600 not-italic">
                  Next.js
                </p>
              </button>
              <button className="flex py-1 px-5 justify-center items-center rounded-xl bg-gray-200">
                <p className="text-sm leading-5 text-gray-600 not-italic">
                  Typescript
                </p>
              </button>
              <button className="flex py-1 px-5 justify-center items-center rounded-xl bg-gray-200">
                <p className="text-sm leading-5 text-gray-600 not-italic">
                  Nest.js
                </p>
              </button>
              <button className="flex py-1 px-5 justify-center items-center rounded-xl bg-gray-200">
                <p className="text-sm leading-5 text-gray-600 not-italic">
                  PostgreSQL
                </p>
              </button>
              <button className="flex py-1 px-5 justify-center items-center rounded-xl bg-gray-200">
                <p className="text-sm leading-5 text-gray-600 not-italic">
                  Tailwindcss
                </p>
              </button>
              <button className="flex py-1 px-5 justify-center items-center rounded-xl bg-gray-200">
                <p className="text-sm leading-5 text-gray-600 not-italic">
                  Figma
                </p>
              </button>
              <button className="flex py-1 px-5 justify-center items-center rounded-xl bg-gray-200">
                <p className="text-sm leading-5 text-gray-600 not-italic">
                  Cypress
                </p>
              </button>
              <button className="flex py-1 px-5 justify-center items-center rounded-xl bg-gray-200">
                <p className="text-sm leading-5 text-gray-600 not-italic">
                  Storybook
                </p>
              </button>
              <button className="flex py-1 px-5 justify-center items-center rounded-xl bg-gray-200">
                <p className="text-sm leading-5 text-gray-600 not-italic">
                  git
                </p>
              </button>
            </div>
            <div className="">
              <img src="/share.svg" alt="" />
            </div>
          </div>
        </div>
        <div className="bottom flex w-[1152px] items-start rounded-xl bg-white ">
          <div className="right w-[576px] h-[480px] flex p-12 flex-col gap-11 items-start ">
            <h1 className="text-lg font-semibold leading-7 text-gray-900 ">
              Fiskil
            </h1>
            <p className="text-lg leading-7 text-gray-600 font-normal">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis
              in faucibus orci luctus et ultrices posuere cubilia curae.
            </p>
            <div className="button flex items-center content-center gap-2 flex-wrap">
              <button className="flex py-1 px-5 justify-center items-center rounded-xl bg-gray-200">
                <p className="text-sm leading-5 text-gray-600 not-italic">
                  React
                </p>
              </button>
              <button className="flex py-1 px-5 justify-center items-center rounded-xl bg-gray-200">
                <p className="text-sm leading-5 text-gray-600 not-italic">
                  Next.js
                </p>
              </button>
              <button className="flex py-1 px-5 justify-center items-center rounded-xl bg-gray-200">
                <p className="text-sm leading-5 text-gray-600 not-italic">
                  Typescript
                </p>
              </button>
              <button className="flex py-1 px-5 justify-center items-center rounded-xl bg-gray-200">
                <p className="text-sm leading-5 text-gray-600 not-italic">
                  Nest.js
                </p>
              </button>
              <button className="flex py-1 px-5 justify-center items-center rounded-xl bg-gray-200">
                <p className="text-sm leading-5 text-gray-600 not-italic">
                  PostgreSQL
                </p>
              </button>
              <button className="flex py-1 px-5 justify-center items-center rounded-xl bg-gray-200">
                <p className="text-sm leading-5 text-gray-600 not-italic">
                  Tailwindcss
                </p>
              </button>
              <button className="flex py-1 px-5 justify-center items-center rounded-xl bg-gray-200">
                <p className="text-sm leading-5 text-gray-600 not-italic">
                  Figma
                </p>
              </button>
              <button className="flex py-1 px-5 justify-center items-center rounded-xl bg-gray-200">
                <p className="text-sm leading-5 text-gray-600 not-italic">
                  Cypress
                </p>
              </button>
              <button className="flex py-1 px-5 justify-center items-center rounded-xl bg-gray-200">
                <p className="text-sm leading-5 text-gray-600 not-italic">
                  Storybook
                </p>
              </button>
              <button className="flex py-1 px-5 justify-center items-center rounded-xl bg-gray-200">
                <p className="text-sm leading-5 text-gray-600 not-italic">
                  git
                </p>
              </button>
            </div>
            <div className="actions flex items-center gap-3   drop-shadow-2xl">
              <img src="/share.svg" alt="" />
            </div>
          </div>
          <div className="left flex p-[48px] items-center justify-center rounded-xl bg-gray-50 w-[576px] h-[480px] ">
            <img className="w-[480px] h-[384px]" src="/Picture.svg" alt="" />
          </div>
        </div>
        <div className="bottom flex w-[1152px] items-start rounded-xl bg-white ">
          <div className="left flex p-[48px] items-center justify-center rounded-xl bg-gray-50 w-[576px] h-[480px]  drop-shadow-2xl">
            <img className="w-[480px] h-[384px]" src="/Picture.svg" alt="" />
          </div>
          <div className="right w-[576px] h-[480px] flex p-12 flex-col gap-11 items-start ">
            <h1 className="text-lg font-semibold leading-7 text-gray-900 ">
              Fiskil
            </h1>
            <p className="text-lg leading-7 text-gray-600 font-normal">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis
              in faucibus orci luctus et ultrices posuere cubilia curae.
            </p>
            <div className="button flex items-center content-center gap-2 flex-wrap">
              <button className="flex py-1 px-5 justify-center items-center rounded-xl bg-gray-200">
                <p className="text-sm leading-5 text-gray-600 not-italic">
                  React
                </p>
              </button>
              <button className="flex py-1 px-5 justify-center items-center rounded-xl bg-gray-200">
                <p className="text-sm leading-5 text-gray-600 not-italic">
                  Next.js
                </p>
              </button>
              <button className="flex py-1 px-5 justify-center items-center rounded-xl bg-gray-200">
                <p className="text-sm leading-5 text-gray-600 not-italic">
                  Typescript
                </p>
              </button>
              <button className="flex py-1 px-5 justify-center items-center rounded-xl bg-gray-200">
                <p className="text-sm leading-5 text-gray-600 not-italic">
                  Nest.js
                </p>
              </button>
              <button className="flex py-1 px-5 justify-center items-center rounded-xl bg-gray-200">
                <p className="text-sm leading-5 text-gray-600 not-italic">
                  PostgreSQL
                </p>
              </button>
              <button className="flex py-1 px-5 justify-center items-center rounded-xl bg-gray-200">
                <p className="text-sm leading-5 text-gray-600 not-italic">
                  Tailwindcss
                </p>
              </button>
              <button className="flex py-1 px-5 justify-center items-center rounded-xl bg-gray-200">
                <p className="text-sm leading-5 text-gray-600 not-italic">
                  Figma
                </p>
              </button>
              <button className="flex py-1 px-5 justify-center items-center rounded-xl bg-gray-200">
                <p className="text-sm leading-5 text-gray-600 not-italic">
                  Cypress
                </p>
              </button>
              <button className="flex py-1 px-5 justify-center items-center rounded-xl bg-gray-200">
                <p className="text-sm leading-5 text-gray-600 not-italic">
                  Storybook
                </p>
              </button>
              <button className="flex py-1 px-5 justify-center items-center rounded-xl bg-gray-200">
                <p className="text-sm leading-5 text-gray-600 not-italic">
                  git
                </p>
              </button>
            </div>
            <div className="actions flex items-center gap-3  ">
              <img src="/share.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
