import { useState } from "react";

export default function SearchBar() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <span onClick={() => setOpen(!open)}>se</span>
      <input
        type="text"
        className={`transition-all duration-300 border ${
          open ? "w-52 opacity-100" : "w-0 opacity-0"
        }`}
      />
    </div>
  );
}
