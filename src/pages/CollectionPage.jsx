import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CollectionCard from "../components/CollectionCard";
import { clearCollection, clearToast } from "../redux/features/collectionSlice";

const CollectionPage = () => {
  const collection = useSelector((state) => state.collection.items);
  const dispatch = useDispatch();

  const clearAll = () => {
    dispatch(clearCollection());
    dispatch(clearToast());
  };

  return (
    <div className="px-6 py-6 overflow-auto">
      {collection.length > 0 ? (
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl">Your Collection</h2>
          <button
            onClick={clearAll}
            className="bg-red-500 px-5 py-1.5 rounded text-base font-medium active:scale-95 transition cursor-pointer"
          >
            Clear Collection
          </button>
        </div>
      ) : (
        <h2 className="text-2xl text-center py-5">Collection is Empty</h2>
      )}
      <div className="flex flex-wrap justify-start w-full gap-5">
        {collection.map((item, idx) => {
          return (
            <div key={idx}>
              <CollectionCard item={item} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CollectionPage;
