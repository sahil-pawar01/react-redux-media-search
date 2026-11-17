import React from "react";
import { useDispatch } from "react-redux";
import {
  removeCollection,
  removeToast,
} from "../redux/features/collectionSlice";

const CollectionCard = ({ item }) => {
  const dispatch = useDispatch();

  const removeFromCollection = (item) => {
    dispatch(removeCollection(item));
    dispatch(removeToast());
  };

  return (
    <div className="w-[18vw] h-64 relative bg-white rounded-md overflow-hidden">
      <a className="h-full" href={item.url}>
        {item.type == "photo" ? (
          <img
            className="h-full w-full object-cover object-center"
            src={item.src}
            alt=""
          />
        ) : (
          ""
        )}
        {item.type == "gif" ? (
          <video
            className="w-full h-full object-cover object-center"
            autoPlay
            loop
            muted
            src={item.src}
          ></video>
        ) : (
          ""
        )}
      </a>
      <div
        id="bottom"
        className="text-white absolute bottom-0 w-full px-3.5 py-4 flex justify-between items-start gap-2"
      >
        <h2 className="font-semibold capitalize text-sm overflow-hidden h-14">
          {item.title}
        </h2>
        <button
          onClick={() => {
            removeFromCollection(item);
          }}
          className="bg-indigo-600 px-3 py-1 rounded text-white font-medium cursor-pointer active:scale-95"
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default CollectionCard;
