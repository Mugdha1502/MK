// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import visitorReducer from './visitorSlice';

export const store = configureStore({
  reducer: {
    visitor: visitorReducer,
  },
});