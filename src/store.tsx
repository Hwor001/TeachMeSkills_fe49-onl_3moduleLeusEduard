import { configureStore } from '@reduxjs/toolkit';
import { singUpFormReducer } from './features/sing-up-form/sing-up-form-slice';

export const store = configureStore({
  reducer: {
   singUpForm: singUpFormReducer,
  }
})

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;