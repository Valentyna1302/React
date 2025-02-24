import { createSelector } from '@reduxjs/toolkit';

// todos
export const selectTodos = state => state.todos.items;

// filter
export const selectFilter = state => state.filter.filter;
export const selectStatus = state => state.filter.status;

export const selectVisibilityTaskByStatus = state => {
  console.log('FILTER STATUS LOGIC');
  const todos = selectTodos(state);
  const taskStatus = selectStatus(state);
  switch (taskStatus) {
    case 'active':
      return todos.filter(item => !item.completed);
    case 'completed':
      return todos.filter(item => item.completed);
    default:
      return todos;
  }
};

export const selectVisibilityTaskByStatusMemo = createSelector([selectStatus, selectTodos], (taskStatus, todos) => {
  console.log('FILTER STATUS LOGIC');

  switch (taskStatus) {
    case 'active':
      return todos.filter(item => !item.completed);
    case 'completed':
      return todos.filter(item => item.completed);
    default:
      return todos;
  }
});

export const selectUncompletedTodosMemo = createSelector([selectTodos], todos => {
  console.log('UNCOMPLETED LOGIC');

  return todos.reduce((total, curr) => (curr.completed ? total : total + 1), 0);
});

export const selectUncompletedTodos = state => {
  console.log('UNCOMPLETED LOGIC');

  const todos = selectTodos(state);
  return todos.reduce((total, curr) => (curr.completed ? total : total + 1), 0);
  // return todos.filter(item => !item.completed).length;
};

//auth

export const selectUser = state => state.auth.user;
export const selectIsLoggedIn = state => state.auth.isLoggedIn;
