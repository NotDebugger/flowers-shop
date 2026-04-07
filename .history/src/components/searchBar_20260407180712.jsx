import { useState, useEffect, useRef } from "react";

export default function SearchBar({ setQuery }) {
  const [open, setOpen] = useState(false);
  const searchRef = useRef(null);

  useEffect(() => {
    const handleClick = (e) => {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, []);

  return (
    <div className="flex items-center" ref={searchRef}>
      <input
        type="text"
        placeholder="  Search..."
        className={`transition-all h-9 border-gray-500 outline-none duration-300 border ${
          open ? "w-52 opacity-100" : "w-0 opacity-0"
        }`}
        onChange={(e) => setQuery(e.target.value)}
      />
      <svg
        className={`hover:fill-white hover:bg-gray-500 p-1.5 rounded-full cursor-pointer duration-200 ${open && "rounded-r-full rounded-l-none bg-gray-500! fill-white!"}`}
        onClick={() => setOpen(!open)}
        xmlns="http://www.w3.org/2000/svg"
        height="36px"
        viewBox="0 -960 960 960"
        width="36px"
        fill="#000"
      >
        <path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" />
      </svg>
    </div>
  );
}
