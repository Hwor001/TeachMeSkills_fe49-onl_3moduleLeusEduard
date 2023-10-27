import { createSlice } from '@reduxjs/toolkit';
import { AuthorizationPayload } from './types';

const authorizationSlice = createSlice({
  name: 'authorizationSlice',
  initialState: {
    isInProgress: false,
    isInCompleted: false,
  },
  reducers: {
    authorization(state, action: { payload: AuthorizationPayload }) {},
    authorizationSuccess(state) {
      state.isInProgress = false;
      state.isInCompleted = true;
    },
    authorizationFailure(state) {
      state.isInProgress = false;
    },
  },
});

export const {
  actions: { authorization, authorizationSuccess, authorizationFailure },
  reducer: authorizationReducer,
} = authorizationSlice;
