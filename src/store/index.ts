import {configureStore} from '@reduxjs/toolkit';
import helperSlice from './slices/helperSlice';

export const createStore = () =>
  configureStore({
    reducer: {
      // [api.reducerPath]: api.reducer,
      helper: helperSlice,
    },
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware(),
  });

const store = createStore();

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
