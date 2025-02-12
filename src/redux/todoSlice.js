import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [{ id: 1, todo: 'Learn redux', isCompleted: false }],
};

const slice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    deleteTodo: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    addTodo: (state, action) => {
      state.items.push(action.payload);
    },
    editTodo: (state, action) => {
      // 1. Отримати айді і отримати новий текст
      // 2. Пробігти по масиву
      // 3. Знайти потрібний елемент по айді
      // 4. Поміняти тому елементу тайтл
      const item = state.items.find(item => item.id === action.payload.id);
      item.todo = action.payload.todo;
    },
  },
});

export const todoReducer = slice.reducer;
export const { deleteTodo, addTodo, editTodo } = slice.actions;
