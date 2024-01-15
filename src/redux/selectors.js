import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts.contacts;
export const selectStatusFilter = state => state.filter;
export const selectError = state => state.contacts.error;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectIsLoggedIn = state => state.auth.isLoggedIn;
export const selectUserName = state => state.auth.user.name;
export const selectIsRefreshing = state => state.auth.isRefreshing;
export const selectIsEditorActive = state => state.contacts.isEditorActive;
export const selectContactToEdit = state => state.contacts.contactToEdit;

export const selectFilterContacts = createSelector(
  [selectContacts, selectStatusFilter],
  (contacts, filter) => {
    if (filter !== '') {
      return contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
      );
    }
    return contacts;
  }
);
