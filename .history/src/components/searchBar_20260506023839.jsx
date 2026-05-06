import { useState, useEffect, useRef, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { SearchQueryContext } from "../contexts/searchQueryContext";

export default function SearchBar({ alwaysOpen = false, className = "" }) {
  const [open, setOpen] = useState(alwaysOpen);
  const searchRef = useRef(null);
  const navigate = useNavigate();
  const { query, setQuery } = useContext(SearchQueryContext);
  const isExpanded = alwaysOpen || open;

  useEffect(() => {
    setOpen(alwaysOpen);
  }, [alwaysOpen]);

  const handleSearch = () => {
    navigate(`/search?q=${encodeURIComponent(query.trim())}`);

    if (!alwaysOpen) {
      setOpen(false);
    }
  };

  useEffect(() => {
    const handleClick = (e) => {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, []);

  const handleIconClick = (e) => {
    if (!isExpanded) {
      e.preventDefault();
      setOpen(true);
      return;
    }

    if (query.trim()) {
      handleSearch();
    }
  };

  return (
    <div className={`flex justify-end ${className}`} ref={searchRef}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSearch();
        }}
        className={`ml-auto flex items-center rounded-full border border-(--line) bg-white/88 p-1 shadow-sm transition-all duration-300 ${
          isExpanded ? "w-full" : "w-12"
        }`}
      >
        <input
          type="text"
          value={query}
          placeholder="Search bouquets, roses..."
          onFocus={() => setOpen(true)}
          className={`bg-transparent text-sm outline-none transition-all duration-300 ${
            isExpanded
              ? "w-full px-3 py-2 opacity-100 md:min-w-56"
              : "w-0 px-0 py-0 opacity-0"
          }`}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button
          type="submit"
          onClick={handleIconClick}
          className={`flex h-10 w-10 items-center justify-center rounded-full transition duration-200 ${
            isExpanded
              ? "bg-(--accent) text-white"
              : "bg-transparent text-slate-700 hover:bg-white"
          }`}
          aria-label="Search products"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="22px"
            viewBox="0 -960 960 960"
            width="22px"
            fill="currentColor"
          >
            <path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" />
          </svg>
        </button>
      </form>
    </div>
  );
}
