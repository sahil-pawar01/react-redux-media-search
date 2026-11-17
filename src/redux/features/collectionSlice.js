import { createSlice } from "@reduxjs/toolkit";
import { toast, Slide } from "react-toastify";

const initialState = {
  items: JSON.parse(localStorage.getItem("collection")) || [],
};

const collectionSlice = createSlice({
  name: "collection",
  initialState,
  reducers: {
    addCollection: (state, action) => {
      const alreadyExist = state.items.find((item) => {
        return item.id === action.payload.id;
      });
      if (!alreadyExist) {
        state.items.push(action.payload);
        localStorage.setItem("collection", JSON.stringify(state.items));
      }
    },
    removeCollection: (state, action) => {
      state.items = state.items.filter((item) => {
        return item.id !== action.payload.id;
      });
      localStorage.setItem("collection", JSON.stringify(state.items));
    },
    clearCollection: (state) => {
      state.items = [];
      localStorage.removeItem("collection");
    },
    addToast: () => {
      toast.success("Added to Collection!", {
        position: "bottom-left",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Slide,
      });
    },
    removeToast: () => {
      toast.error("Removed from Collection!", {
        position: "bottom-left",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Slide,
      });
    },
    clearToast: () => {
      toast.error("Whole Collection Cleared!", {
        position: "bottom-left",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Slide,
      });
    },
  },
});

export const {
  addCollection,
  removeCollection,
  clearCollection,
  addToast,
  removeToast,
  clearToast
} = collectionSlice.actions;

export default collectionSlice.reducer;
