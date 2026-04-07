import { Link } from "react-router-dom";
import { useState } from "react";
import SearchBar from "./searchBar";
import SearchingResults from "./SearchingResults";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");

  return (
    <>
      {/* Blur Background */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-10 md:hidden"
        />
      )}

      <div className="nav flex justify-between pl-10 pr-6 py-5 w-full fixed top-0 bg-white z-20">
        <Link to="/" className="family text-3xl text-gray-500">
          Flowers Shop
        </Link>

        {/* Mobile Button */}
        <div className="flex gap-5 md:hidden">
          <Link
            to="/login"
            onClick={() => setOpen(false)}
            className="text-lg px-5 py-2 text-gray-100 font-bold bg-gray-500 hover:text-gray-500 hover:bg-gray-100 duration-300 rounded-full"
          >
            Log in
          </Link>

          <button
            className="flex flex-col justify-center items-center w-10 h-10 relative z-20"
            onClick={() => setOpen(!open)}
          >
            <span
              className={`h-1 w-8 bg-black rounded transition-all duration-300 ${
                open ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`h-1 w-8 bg-black rounded my-1 transition-all duration-300 ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`h-1 w-8 bg-black rounded transition-all duration-300 ${
                open ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-6">
          <li className="hover:scale-120 hover:text-gray-500 self-center duration-200">
            <Link to="/" className="text-lg">
              Home
            </Link>
          </li>

          <li className="hover:scale-120 hover:text-gray-500 self-center duration-200">
            <Link to="/shop" className="text-lg">
              Shop
            </Link>
          </li>

          <li className="hover:scale-120 hover:text-gray-500 self-center duration-200">
            <Link to="/contact" className="text-lg">
              Contact
            </Link>
          </li>

          <li className="hover:scale-120 hover:text-gray-500 self-center duration-200">
            <Link to="/about" className="text-lg">
              About
            </Link>
          </li>

          <li className="flex gap-2 self-center ml-3">
            <SearchBar query={query} setQuery={setQuery} />
            <Link
              to="/cart"
              className="hover:bg-gray-500 duration-200 rounded-full flex justify-center items-center"
            >
              <svg
                className="inline hover:fill-white p-1.5 duration-200"
                xmlns="http://www.w3.org/2000/svg"
                height="36px"
                viewBox="0 -960 960 960"
                width="36px"
                fill="#000000"
              >
                <path d="M240-80q-33 0-56.5-23.5T160-160v-480q0-33 23.5-56.5T240-720h80q0-66 47-113t113-47q66 0 113 47t47 113h80q33 0 56.5 23.5T800-640v480q0 33-23.5 56.5T720-80H240Zm0-80h480v-480h-80v80q0 17-11.5 28.5T600-520q-17 0-28.5-11.5T560-560v-80H400v80q0 17-11.5 28.5T360-520q-17 0-28.5-11.5T320-560v-80h-80v480Zm160-560h160q0-33-23.5-56.5T480-800q-33 0-56.5 23.5T400-720ZM240-160v-480 480Z" />
              </svg>
            </Link>
          </li>

          <li className="self-center">
            <Link
              to="/login"
              className="text-lg ml-12 px-5 py-2 text-gray-100 font-bold bg-gray-500 hover:text-gray-500 hover:bg-gray-100 duration-300 rounded-full"
            >
              Log in
            </Link>
          </li>
        </ul>

        {/* Mobile Nav */}
        <div
          className={`md:hidden absolute top-full left-0 w-full bg-white shadow-md transition-all duration-300 overflow-hidden ${
            open ? "max-h-96 py-4" : "max-h-0 py-0"
          }`}
        >
          <ul className="flex flex-col items-center gap-4">
            <Link to="/" onClick={() => setOpen(false)} className="text-lg">
              Home
            </Link>
            <Link to="/shop" onClick={() => setOpen(false)} className="text-lg">
              Shop
            </Link>
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="text-lg"
            >
              Contact
            </Link>
            <Link
              to="/about"
              onClick={() => setOpen(false)}
              className="text-lg"
            >
              About
            </Link>
            <Link
              to="/cart"
              onClick={() => setOpen(false)}
              className="text-lg flex items-center gap-2"
            >
              Cart
            </Link>
          </ul>
        </div>
      </div>

      <SearchingResults query={query} />
    </>
  );
}
