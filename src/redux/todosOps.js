//https://task-manager-api.goit.global

import { createAsyncThunk } from '@reduxjs/toolkit';
import { api } from './authOperations';

export const fetchData = createAsyncThunk('todos/fetchData', async ({ signal }, thunkAPI) => {
  try {
    const { data } = await api.get(`/tasks`, { signal });
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const deleteTodo = createAsyncThunk('todos/deleteTodo', async (id, thunkAPI) => {
  try {
    await api.delete(`/tasks/${id}`);
    return id;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const addTodo = createAsyncThunk('todos/addTodo', async (body, thunkAPI) => {
  try {
    const { data } = await api.post('/tasks', body);
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const editTodo = createAsyncThunk('todos/editTodo', async (body, thunkAPI) => {
  try {
    const { data } = await api.put(`/tasks/${body.id}`, body);
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

// export const fetchData = additional_data => async dispatch => {
//   try {
//     dispatch(setIsError(false));
//     dispatch(setIsLoading(true));
//     const response = await api.get('https://67b37562392f4aa94fa74786.mockapi.io/tasks');
//     dispatch(fetchDataSuccess(response.data));
//   } catch {
//     dispatch(setIsError(true));
//   } finally {
//     dispatch(setIsLoading(false));
//   }
// };
