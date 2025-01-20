import React from "react";
import { TiWeatherSunny } from "react-icons/ti";
import { BsMoonStarsFill } from "react-icons/bs";

interface ThemeToggleProps {
  onToggle: () => void;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ onToggle }) => {
  return (
    <button
      onClick={onToggle}
      className="p-2 rounded bg-gray-300 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-600 transition-all"
      aria-label="Toggle theme"
    >
      <div className="flex justify-center items-center">
        <TiWeatherSunny className="dark:hidden " size={10} />
        <BsMoonStarsFill className="hidden dark:block" size={10} />
      </div>
    </button>
  );
};

export default ThemeToggle;
