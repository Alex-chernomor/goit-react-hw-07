import { createSlice, createSelector } from "@reduxjs/toolkit";
import {fetchContacts, addContact,deleteContact} from './contactsOps'
import { selectNameFilter } from "./filtersSlice";
const slice = createSlice({
    name:'items',
    initialState: {
        items: [], 
        loading: false,
        error: null
    },

    extraReducers: (builder) => {
        builder
          .addCase(fetchContacts.pending, (state) => {
            state.loading = true;
            state.error = false;
          })
          .addCase(fetchContacts.fulfilled, (state, action) => {
            state.loading = false;
            state.items = action.payload;
          })
          .addCase(fetchContacts.rejected, (state) => {
            state.loading = false;
            state.error = true;
          })
          .addCase(addContact.pending, (state) => {
            state.loading = true;
            state.error = false;
          })
          .addCase(addContact.fulfilled, (state, action) => {
            state.loading = false;
            state.items.push(action.payload);
          })
          .addCase(addContact.rejected, (state) => {
            state.loading = false;
            state.error = true;
          })
          .addCase(deleteContact.fulfilled, (state, action) => {
            state.loading = false;
            state.items = state.items.filter(
              (item) => item.id !== action.payload.id
            );
          });
      },
});

export const selectContacts = (state) => state.contacts.items;
export const selectLoading = (state) => state.contacts.loading;
export const selectError = (state) => state.contacts.error;

export const selectFilteredContacts = createSelector(
    [selectContacts, selectNameFilter],
    (contacts, filter) =>
      contacts.filter((contact) =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
      )
  );
  

export default slice.reducer;

