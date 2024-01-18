export const Footer = () => {
  return (
    <div className="footer flex px-[80px] py-[24px] flex-col justify-center items-center bg-gray-50">
      <div className="container flex px-[32px] flex-col justify-center items-center gap-16 ">
        <div className="flex flex-col items-start gap-4 ">
          <div className="flex flex-col justify-center items-center ">
            <div className="flex justify-center items-center gap-2">
              <img src="/C.svg" alt="" />
              <p className="text-sm leading-5 font-normal text-gray-600">
                2023 | Designed and coded with ❤️️ by Sagar Shah
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
