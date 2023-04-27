import { combineReducers } from '@reduxjs/toolkit';

import { api } from './api';
import { counterReducer } from './slices/counterSlice';

export const rootReducers = combineReducers({
  counter: counterReducer,
  // Add the generated reducer as a specific top-level slice
  [api.reducerPath]: api.reducer,
});
