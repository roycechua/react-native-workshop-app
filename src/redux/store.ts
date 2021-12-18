import { configureStore } from "@reduxjs/toolkit";
import notesSlice from "./notesSlice";

export const store = configureStore({
    reducer: {
        notes: notesSlice
    }
})