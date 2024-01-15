import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

const setAuthorizationToken = token => {
  axios.defaults.headers.common.Authorization = token ? `Bearer ${token}` : '';
};

export const signup = createAsyncThunk(
  '/users/signup',
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post('/users/signup', credentials);
      setAuthorizationToken(response.data.token);
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
      // console.log(err);
    }
  }
);

export const login = createAsyncThunk(
  '/users/login',
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post('/users/login', credentials);
      setAuthorizationToken(response.data.token);
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const logout = createAsyncThunk('/users/logout', async (_, thunkAPI) => {
  try {
    const response = await axios.post('/users/logout');
    setAuthorizationToken('');
    return response.data;
  } catch (err) {
    return thunkAPI.rejectWithValue(err.message);
  }
});

export const fetchContacts = createAsyncThunk(
  '/contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/contacts');
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const addContact = createAsyncThunk(
  '/contacts/addContact',
  async (contact, thunkAPI) => {
    try {
      const { name, number } = contact;
      const response = await axios.post('/contacts', {
        name,
        number,
      });
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  '/contacts/deleteContact',
  async (contactId, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${contactId}`);
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const updateContact = createAsyncThunk(
  '/contacts/update',
  async (newContact, thunkAPI) => {
    try {
      const { newName, newNumber } = newContact;
      const response = await axios.patch(`/contacts/${newContact.id}`, {
        name: newName,
        number: newNumber,
      });
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const verifyUser = createAsyncThunk(
  '/users/verify',
  async (_, thunkAPI) => {
    const store = thunkAPI.getState();
    const token = store.auth.token;
    if (token) {
      setAuthorizationToken(token);
      try {
        const response = await axios.get(`/users/current`);
        return response.data;
      } catch (err) {
        return thunkAPI.rejectWithValue(err.message);
      }
    }
    return thunkAPI.rejectWithValue('No token');
  }
);
