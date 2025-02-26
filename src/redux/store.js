import { configureStore } from '@reduxjs/toolkit';
import { todoReducer } from './todoSlice';
import { filterReducer } from './filterSlice';
import { authReducer } from './authSlice';
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'auth-data',
  version: 1,
  storage,
  whitelist: ['token'],
};
const stage = import.meta.env.MODE;
const persistedReducer = persistReducer(persistConfig, authReducer);
export const store = configureStore({
  reducer: {
    todos: todoReducer,
    filter: filterReducer,
    auth: persistedReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: stage === 'development',
});

export let persistor = persistStore(store);
