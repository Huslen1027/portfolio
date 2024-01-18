export const Contant = () => {
  return (
    <div className="contant flex px-[80px] py-[96px] flex-col items-center justify-center bg-white">
      <div className="container flex px-[32px] justify-center flex-col gap-12 items-center ">
        <div className="header flex flex-col gap-4 ">
          <div className="top flex flex-col justify-center items-center">
            <button className="flex py-1 px-5 justify-center items-center rounded-xl bg-gray-200">
              <p className="text-sm leading-5 text-gray-600 not-italic">
                Get in touch
              </p>
            </button>
          </div>
          <div className="bottom flex flex-col items-center justify-center ">
            <p className="text-lg leading-7 text-gray-600 font-normal max-w-[470px]">
              What’s next? Feel free to reach out to me if you're looking for a
              developer, have a query, or simply want to connect.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-4 items-center justify-center">
          <div className="gmail flex justify-center gap-5 items-center">
            <img className="w-8 h-8" src="/Gmail.png" alt="" />
            <p className="text-3xl not-italic font-semibold leading-10 text-center text-gray-900">
              hvslenhvslen566@gmail.com
            </p>
            <div>
              <img src="/copy.svg" alt="" />
            </div>
          </div>
          <div className="number flex justify-center gap-5 items-center">
            <img className="w-8 h-8" src="/phone.svg" alt="" />
            <p className="text-3xl not-italic font-semibold leading-10 text-center text-gray-900">
              +976 85250765
            </p>
            <div>
              <img src="/copy.svg" alt="" />
            </div>
          </div>
        </div>
        <div className="end flex justify-center items-center gap-16 ">
          <div className="social flex justify-center flex-col gap-2 items-center">
            <p className="text-sm leading-5 text-gray-600 not-italic">
              You may also find me on these platforms!
            </p>
            <div className="flex flex-col justify-center items-center gap-4 ">
              <div className="flex items-center gap-">
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
