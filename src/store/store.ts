import { configureStore } from '@reduxjs/toolkit';

import { api } from './api';
import { rootReducers } from './rootReducers';

export const store = configureStore({
  reducer: rootReducers,

  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;

// Inferred type
export type AppDispatch = typeof store.dispatch;
