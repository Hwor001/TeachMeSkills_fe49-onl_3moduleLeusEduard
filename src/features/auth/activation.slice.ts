import { createSlice } from '@reduxjs/toolkit';
import { ActivationPayload } from './types';

const activationSlice = createSlice({
  name: 'activationSlice',
  initialState: {
    isInProgress: false,
    isCompleted: false,
  },
  reducers: {
    activate(state, action: { payload: ActivationPayload }) {
      // state.isInProgress = true;
    },
    setInProgress(state) {
      state.isInProgress = true;
    },
    activateSuccess(state) {
      state.isInProgress = false;
      state.isCompleted = true;
    },
    activateFailure(state) {
      state.isInProgress = false;
    },
  },
});

export const {
  actions: { activate, activateSuccess, activateFailure, setInProgress },
  reducer: activationReducer,
} = activationSlice;
