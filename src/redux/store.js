import { configureStore } from '@reduxjs/toolkit';
import admissionsReducer from './slices/admissionsSlice';

export const store = configureStore({
  reducer: {
    admissions: admissionsReducer,
  },
});