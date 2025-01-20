import { useState, useEffect } from "react";
import ThemeToggle from "./ThemeToggle";
import { FaGithub } from "react-icons/fa";
import { LiaGithub } from "react-icons/lia";
import { HiMenu, HiX } from "react-icons/hi";
import SearchBar from "./SearchBar";

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const htmlElement = document.documentElement;
    setIsDarkMode(htmlElement.classList.contains("dark"));
  }, []);

  const handleThemeToggle = () => {
    const htmlElement = document.documentElement;
    if (htmlElement.classList.contains("dark")) {
      htmlElement.classList.remove("dark");
      setIsDarkMode(false);
    } else {
      htmlElement.classList.add("dark");
      setIsDarkMode(true);
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flex justify-between items-center lg:mx-componentMargin sm:px-8 my-5 bg-white dark:bg-backgroundDark relative">
      <div className="flex items-center">
        <img
          src="https://ccextractor.org/images/ccx.svg"
          alt="CCExtractor Logo"
          loading="lazy"
          className="h-[72px] w-auto"
        />
      </div>

      <div className="sm:flex lg:hidden relative z-50">
        <button onClick={toggleMenu} className="focus:outline-none">
          {isMenuOpen ? <HiX size={28} /> : <HiMenu size={28} />}
        </button>
      </div>

      <div className="hidden lg:flex gap-12 mx-4 items-center">
        <SearchBar />

        <div className="flex items-center space-x-9">
          <button className="mx-2 rounded dark:text-white focus:outline-none font-normal text-xl">
            Docs
          </button>

          <div className="mx-2">
            {isDarkMode ? <FaGithub size={25} /> : <LiaGithub size={32} />}
          </div>

          <ThemeToggle onToggle={handleThemeToggle} />
        </div>
      </div>

      {isMenuOpen && (
        <div
          className={`fixed top-0 left-0 right-0 h-screen w-4/5 bg-white dark:bg-backgroundDark flex flex-col items-start p-4 space-y-4 z-20 transition-transform duration-500 ease-in-out transform`}
        >
          <SearchBar />
          <button className="rounded dark:text-white focus:outline-none font-normal text-lg">
            Docs
          </button>

          <div>
            {isDarkMode ? <FaGithub size={25} /> : <LiaGithub size={32} />}
          </div>

          <ThemeToggle onToggle={handleThemeToggle} />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
