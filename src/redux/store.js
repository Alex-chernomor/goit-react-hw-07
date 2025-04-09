import { configureStore } from "@reduxjs/toolkit";
import contactsReducer from "./contactsSlice";
import filterReduce from "./filtersSlice";

export const store = configureStore({
    reducer: {
        contacts: contactsReducer,
        filters: filterReduce,
    },
  
});
