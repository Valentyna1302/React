//https://67b37562392f4aa94fa74786.mockapi.io/tasks

import axios from 'axios';

import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://67b37562392f4aa94fa74786.mockapi.io';

export const fetchData = createAsyncThunk('todos/fetchData', async (_, thunkAPI) => {
  try {
    const { data } = await axios.get(`/tasks`);
    return data;
  } catch (error) {
    console.log(error);
    return thunkAPI.rejectWithValue(error.message);
  }
});

// export const fetchData = additional_data => async dispatch => {
//   try {
//     dispatch(setIsError(false));
//     dispatch(setIsLoading(true));
//     const response = await axios.get('https://67b37562392f4aa94fa74786.mockapi.io/tasks');
//     dispatch(fetchDataSuccess(response.data));
//   } catch {
//     dispatch(setIsError(true));
//   } finally {
//     dispatch(setIsLoading(false));
//   }
// };
