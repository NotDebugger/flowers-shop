import { Link, NavLink } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import SearchBar from "./searchBar";
import { useCart } from "../hooks/useCart";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { cart } = useCart();
  const itemCount = useMemo(
    () => cart.reduce((sum, item) => sum + (item.count || 1), 0),
    [cart],
  );
  const navItems = [
    { to: "/", label: "Home" },
    { to: "/shop", label: "Shop" },
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" },
  ];

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const navClass = ({ isActive }) =>
    `rounded-full px-4 py-2 text-sm font-medium transition duration-200 ${
      isActive
        ? "bg-(--accent) text-white! shadow-lg shadow-[rgba(67,104,80,0.24)]"
        : "text-slate-700 hover:bg-white hover:text-(--accent) hover:shadow-sm"
    }`;

  return (
    <>
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-30 bg-slate-950/25 backdrop-blur-sm md:hidden"
        />
      )}

      <header className="fixed inset-x-0 top-0 z-40 px-3 pt-3 md:px-6 md:pt-5">
        <div className="section-wrap px-0">
          <div className="glass-panel mx-auto rounded-4xl px-4 py-3 shadow-[0_18px_40px_rgba(36,49,39,0.08)] md:px-6">
            <div className="flex items-center justify-between gap-3">
              <Link to="/" className="min-w-0">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-(--rose-deep)">
                  Boutique Florals
                </p>
                <h1 className="family truncate text-3xl text-(--accent) md:text-4xl">
                  Flowers Shop
                </h1>
              </Link>

              <div className="hidden items-center gap-3 md:flex">
                <nav className="flex items-center gap-1 rounded-full bg-white/70 p-1">
                  {navItems.map((item) => (
                    <NavLink key={item.to} to={item.to} className={navClass}>
                      {item.label}
                    </NavLink>
                  ))}
                </nav>

                <SearchBar className="w-full max-w-[18rem]" />

                <Link
                  to="/cart"
                  className="relative flex h-12 w-12! items-center justify-center rounded-full bg-white/78 text-slate-700 transition hover:bg-white hover:text-(--accent)"
                  aria-label="View cart"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="currentColor"
                  >
                    <path d="M240-80q-33 0-56.5-23.5T160-160v-480q0-33 23.5-56.5T240-720h80q0-66 47-113t113-47q66 0 113 47t47 113h80q33 0 56.5 23.5T800-640v480q0 33-23.5 56.5T720-80H240Zm0-80h480v-480h-80v80q0 17-11.5 28.5T600-520q-17 0-28.5-11.5T560-560v-80H400v80q0 17-11.5 28.5T360-520q-17 0-28.5-11.5T320-560v-80h-80v480Zm160-560h160q0-33-23.5-56.5T480-800q-33 0-56.5 23.5T400-720ZM240-160v-480 480Z" />
                  </svg>
                  {itemCount > 0 && (
                    <span className="absolute -right-1 -top-1 flex h-6 min-w-6 items-center justify-center rounded-full bg-(--rose-deep) px-1 text-xs font-bold text-white">
                      {itemCount}
                    </span>
                  )}
                </Link>

                <Link to="/login" className="flower-button px-5 py-3 text-sm">
                  Account
                </Link>
              </div>

              <div className="flex items-center gap-2 md:hidden">
                <Link
                  to="/cart"
                  className="relative flex h-11 w-11 items-center justify-center rounded-full bg-white/78 text-slate-700"
                  aria-label="View cart"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="22px"
                    viewBox="0 -960 960 960"
                    width="22px"
                    fill="currentColor"
                  >
                    <path d="M240-80q-33 0-56.5-23.5T160-160v-480q0-33 23.5-56.5T240-720h80q0-66 47-113t113-47q66 0 113 47t47 113h80q33 0 56.5 23.5T800-640v480q0 33-23.5 56.5T720-80H240Zm0-80h480v-480h-80v80q0 17-11.5 28.5T600-520q-17 0-28.5-11.5T560-560v-80H400v80q0 17-11.5 28.5T360-520q-17 0-28.5-11.5T320-560v-80h-80v480Zm160-560h160q0-33-23.5-56.5T480-800q-33 0-56.5 23.5T400-720ZM240-160v-480 480Z" />
                  </svg>
                  {itemCount > 0 && (
                    <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-(--rose-deep) px-1 text-[10px] font-bold text-white">
                      {itemCount}
                    </span>
                  )}
                </Link>

                <button
                  className="flex h-11 w-11 flex-col items-center justify-center rounded-full bg-white/78"
                  onClick={() => setOpen((value) => !value)}
                  aria-label="Toggle navigation menu"
                  aria-expanded={open}
                >
                  <span
                    className={`h-0.5 w-5 rounded-full bg-slate-900 transition duration-300 ${
                      open ? "translate-y-1.5 rotate-45" : ""
                    }`}
                  />
                  <span
                    className={`my-1 h-0.5 w-5 rounded-full bg-slate-900 transition duration-300 ${
                      open ? "opacity-0" : "opacity-100"
                    }`}
                  />
                  <span
                    className={`h-0.5 w-5 rounded-full bg-slate-900 transition duration-300 ${
                      open ? "-translate-y-1.5 -rotate-45" : ""
                    }`}
                  />
                </button>
              </div>
            </div>

            <div
              className={`overflow-hidden transition-all duration-300 md:hidden ${
                open ? "max-h-128 pt-4" : "max-h-0"
              }`}
            >
              <div className="rounded-[1.6rem] bg-white/88 p-4 shadow-lg">
                <SearchBar alwaysOpen className="w-full" />
                <nav className="mt-4 flex flex-col gap-2">
                  {navItems.map((item) => (
                    <NavLink
                      key={item.to}
                      to={item.to}
                      className={({ isActive }) =>
                        `rounded-2xl px-4 py-3 text-sm font-medium transition ${
                          isActive
                            ? "bg-(--accent) text-white!"
                            : "bg-(--surface-muted) text-slate-700 hover:bg-white hover:text-(--accent)"
                        }`
                      }
                      onClick={() => setOpen(false)}
                    >
                      {item.label}
                    </NavLink>
                  ))}
                </nav>

                <div className="mt-4 grid grid-cols-2 gap-3">
                  <Link
                    to="/login"
                    onClick={() => setOpen(false)}
                    className="flower-button px-4 py-3 text-sm"
                  >
                    Log in
                  </Link>
                  <Link
                    to="/cart"
                    onClick={() => setOpen(false)}
                    className="flower-button-secondary px-4 py-3 text-sm"
                  >
                    Cart
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
