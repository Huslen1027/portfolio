export const Header = () => {
  return (
    <div className="container flex justify-between items-center p-0 32 ">
      <div>
        <h1 className="SS"> SS</h1>
      </div>

      <div className="navigation flex gap-5">
        <a href="#">About</a>
        <a href="#">Work</a>
        <a href="#">Testimonials</a>
        <a href="#">Contant</a>
        <div className="actions flex gap-10px">
          <img src="/Icon.svg" alt="" />
          <button className="download">Download CV</button>
        </div>
      </div>
    </div>
  );
};
export default Header;
