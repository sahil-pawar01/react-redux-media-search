import React from "react";
import SearchBar from "../components/SearchBar";
import Tabs from "../components/Tabs";
import ResultGrid from "../components/ResultGrid";
import { useSelector } from "react-redux";

const HomePage = () => {
  const { query } = useSelector((state) => state.search);

  return (
    <div className="min-h-screen w-full bg-gray-950 text-white">
      <SearchBar />

      {query != "" ? (
        <>
          <Tabs />
          <ResultGrid />
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export default HomePage;
