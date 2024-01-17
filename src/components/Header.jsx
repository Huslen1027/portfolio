export const Header = () => {
  return (
    <div className="Header flex mx-auto max-w-screen-xl px-16 py-4  justify-between items-center ">
      <div className="container flex  justify-between ">
        <div>
          <h1 className="text-2xl font-bold ">&#60;SS/&#62;</h1>
        </div>

        <div className="navigation flex gap-6 justify-center items-center">
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
export default Header;
