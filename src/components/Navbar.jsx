import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-[#112D4E] px-6 py-5 flex justify-between items-center">
      <Link to="/" className="font-medium text-xl">
        MediaSearch
      </Link>
      <div className="flex items-center gap-6 text-lg">
        <Link
          className="text-base font-medium px-5 py-1.5 rounded bg-[#DBE2EF] text-black active:scale-95 transition"
          to="/"
        >
          Search
        </Link>
        <Link
          className="text-base font-medium px-5 py-1.5 rounded bg-[#DBE2EF] text-black active:scale-95 transition"
          to="/collection"
        >
          Collection
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
