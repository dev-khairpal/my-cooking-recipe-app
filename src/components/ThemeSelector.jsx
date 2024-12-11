import { useTheme } from "../hooks/useTheme";

export default function ThemeSelector() {
  const { changeMode, mode } = useTheme();

  const toggleMode = () => {
    changeMode(mode === "dark" ? "light" : "dark");
  };

  return (
    <div className="flex justify-center my-8">
      <button
        onClick={toggleMode}
        className={`flex items-center gap-2 px-4 py-2 rounded-md ${
          mode === "dark"
            ? "bg-gray-700 text-white hover:bg-gray-600"
            : "bg-gray-200 text-black hover:bg-gray-300"
        }`}
      >
        <img
          src={mode === "dark" ? "day-mode.png" : "night-mode.png"}
          alt="theme-icon"
          className="w-6 h-6"
        />
        <span>{mode === "dark" ? "Light Mode" : "Dark Mode"}</span>
      </button>
    </div>
  );
}
