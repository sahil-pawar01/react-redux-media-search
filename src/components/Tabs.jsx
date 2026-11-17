import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setActiveTabs } from "../redux/features/searchSlice";

const Tabs = () => {
  const dispatch = useDispatch();
  const activeTab = useSelector((state) => state.search.active);

  const tabs = ["photos", "gif"];
  return (
    <div className="flex gap-6 px-6 py-6">
      {tabs.map(function (elem, idx) {
        return (
          <button
            onClick={() => {
              dispatch(setActiveTabs(elem));
            }}
            className={`${activeTab == elem ? "bg-blue-700" : "bg-gray-600"} transition px-6 py-2 rounded uppercase cursor-pointer active:scale-95`}
            key={idx}
          >
            {elem}
          </button>
        );
      })}
    </div>
  );
};

export default Tabs;
