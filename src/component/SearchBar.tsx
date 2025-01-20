import { useRef, useState } from "react";
import { IoIosSearch } from "react-icons/io";

const SearchBar = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [search, setSearch] = useState<string>("");
  const [isFocused, setIsFocused] = useState<boolean>(false);

  const handleIconClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const handleBlur = () => {
    setIsFocused(false);
    setSearch("");
  };

  return (
    <div
      className={`flex items-center border rounded-full gap-1 px-2 py-1 dark:border-hover ${
        isFocused ? "dark:bg-hover" : "dark:bg-backgroundDark"
      }`}
    >
      <IoIosSearch
        className="text-secondary cursor-pointer"
        size={25}
        onClick={handleIconClick}
      />

      <input
        ref={inputRef}
        type="search"
        placeholder="Search the docs"
        name="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={handleBlur}
        className="focus:outline-none text-gray-700 dark:text-gray-200 font-normal w-56 p-1 text-xl placeholder-secondary bg-transparent"
      />
    </div>
  );
};

export default SearchBar;
