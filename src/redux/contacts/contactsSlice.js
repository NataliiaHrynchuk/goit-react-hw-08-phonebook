import { createSlice } from "@reduxjs/toolkit";
import { contactsInitialState } from "redux/contacts/contactsConstants";
import {
    fetchContacts, addContact, deleteContact,
    // updateContact
} from "redux/contacts/contactsOperations";

const handlePending = state => {
    state.isLoading = true;
    state.error = null;
};

const handleRejected = (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
};

const contactsSlice = createSlice({
    name: "contacts",
    initialState: contactsInitialState,
    extraReducers: {
        [fetchContacts.pending]: handlePending,
        [addContact.pending]: handlePending,
        [deleteContact.pending]: handlePending,
        [fetchContacts.rejected]: handleRejected,
        [addContact.rejected]: handleRejected,
        [deleteContact.rejected]: handleRejected,
        [fetchContacts.fulfilled](state, action) {
            state.isLoading = false;
            state.error = null; 
            state.items = action.payload;
        },
        [addContact.fulfilled](state, action) {
            state.isLoading = false;
            state.error = null;
            state.items.unshift(action.payload);
        },
        [deleteContact.fulfilled](state, action) {
            state.isLoading = false;
            state.error = null;
            state.items = state.items.filter(contact => contact.id !== action.payload.id);
        }
    }
});

export const contactsReducer = contactsSlice.reducer;