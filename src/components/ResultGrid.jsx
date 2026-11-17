import React, { useEffect } from "react";
import { fetchPhotos, fetchGifs } from "../api/mediaApi";
import {
  setQuery,
  setLoading,
  setError,
  setResults,
} from "../redux/features/searchSlice";
import { useDispatch, useSelector } from "react-redux";
import ResultCard from "./ResultCard";

const ResultGrid = () => {
  const dispatch = useDispatch();
  const { query, active, results, loading, error } = useSelector(
    (store) => store.search,
  );

  const getData = async () => {
    try {
      dispatch(setLoading());
      let data = [];
      if (active == "photos") {
        let response = await fetchPhotos(query);
        data = response.results.map((item) => ({
          id: item.id,
          type: "photo",
          title: item.alt_description,
          thumbnail: item.urls.small,
          src: item.urls.full,
          url: item.links.html,
        }));
      }
      if (active == "gif") {
        let response = await fetchGifs(query);
        data = response.data.map((item) => ({
          id: item.id,
          type: "gif",
          title: item.title || "GIF",
          thumbnail: item.images.hd?.mp4,
          src: item.images.original.mp4,
          url: item.images.downsized.url,
        }));
      }
      dispatch(setResults(data));
    } catch (err) {
      dispatch(setError(err.message));
    }

    if (error) return <h1>Error</h1>;
    if (loading) return <h1>Loading...</h1>;
  };

  useEffect(
    function () {
      if (!query) return;
      getData();
    },
    [query, active],
  );

  return (
    <div className="flex flex-wrap justify-between w-full gap-5 px-6 overflow-auto">
      {results.map(function (item, idx) {
        return (
          <div key={idx}>
            <ResultCard item={item} />
          </div>
        );
      })}
    </div>
  );
};

export default ResultGrid;
