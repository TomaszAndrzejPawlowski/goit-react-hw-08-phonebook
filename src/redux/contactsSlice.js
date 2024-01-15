import { createSlice } from '@reduxjs/toolkit';
import {
  fetchContacts,
  addContact,
  deleteContact,
  updateContact,
} from './operations';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
    isLoading: false,
    error: null,
    isEditorActive: false,
    contactToEdit: {},
  },
  reducers: {
    showEditor(state, action) {
      state.isEditorActive = true;
      state.contactToEdit.id = action.payload.id;
      state.contactToEdit.name = action.payload.name;
      state.contactToEdit.number = action.payload.number;
    },
    closeEditor(state) {
      state.isEditorActive = false;
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchContacts.pending, handlePending);
    builder.addCase(addContact.pending, handlePending);
    builder.addCase(deleteContact.pending, handlePending);
    builder.addCase(fetchContacts.rejected, handleRejected);
    builder.addCase(addContact.rejected, handleRejected);
    builder.addCase(deleteContact.rejected, handleRejected);
    builder.addCase(fetchContacts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.contacts = action.payload;
    });
    builder.addCase(addContact.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.contacts.push(action.payload);
    });
    builder.addCase(deleteContact.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      const index = state.contacts.findIndex(
        contact => contact.id === action.payload.id
      );
      state.contacts.splice(index, 1);
    });
    builder.addCase(updateContact.fulfilled, (state, action) => {
      const index = state.contacts.findIndex(
        contact => contact.id === action.payload.id
      );
      state.contacts.splice(index, 1, action.payload);
      state.isEditorActive = false;
    });
  },
});

export const { showEditor, closeEditor } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
