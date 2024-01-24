import { useTheme } from "@/context/ThemeContext";
export const Button = ({ value }) => {
  const { theme } = useTheme();
  const headerButtonp =
    theme == "light"
      ? "bg-gray-200 flex py-1 px-5 justify-center items-center border rounded-xl"
      : "bg-[#374151] flex py-1 px-5 justify-center items-center rounded-xl text-[#D1D5DB]";
  return (
    <button className={headerButtonp}>
      <p className="text-sm leading-5 not-italic">{value}</p>
    </button>
  );
};
