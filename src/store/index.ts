import {configureStore} from '@reduxjs/toolkit';
import helperSlice from './slices/helperSlice';
import {api} from '../services/api';

export const createStore = () =>
  configureStore({
    reducer: {
      [api.reducerPath]: api.reducer,
      helper: helperSlice,
    },
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware().concat(api.middleware), // Add the RTK Query middleware here
  });

const store = createStore();

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
