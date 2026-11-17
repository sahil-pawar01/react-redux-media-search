import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setQuery } from "../redux/features/searchSlice";

const SearchBar = () => {
  const [text, setText] = useState("");

  const dispatch = useDispatch();

  function submitHandler(e) {
    e.preventDefault();
    dispatch(setQuery(text));
    setText("");
  }
  return (
    <div>
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className="flex justify-center gap-5 bg-gray-900 p-6"
      >
        <input
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
          required
          className="w-1/2 border px-5 py-2 outline-none rounded text-lg "
          type="text"
          placeholder="Search anything..."
        />
        <button className="px-5 py-2 rounded border text-lg cursor-pointer active:scale-95 transition hover:bg-[#DBE2EF] hover:text-black hover:opacity-80">
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
