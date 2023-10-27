import produce from 'immer';
import { createSlice } from '@reduxjs/toolkit';
import { UserName } from './types';

export const userSlice = createSlice({
  name: 'userSlice',
  initialState: {
    name: {} as UserName,
    isInProgress: false,
    isCompleted: false,
  },
  reducers: {
    userInfo: (state, action) => {
      return produce(state, (draftState) => {
        draftState.isInProgress = true;
        draftState.name = action.payload;
      });
    },
    userInfoSuccess(state, action: { payload: UserName }) {
      return produce(state, (draftState) => {
        draftState.isInProgress = false;
        draftState.isCompleted = true;
        draftState.name = action.payload;
      });
    },
    userInfoFailure(state) {
      return produce(state, (draftState) => {
        draftState.isInProgress = false;
      });
    },
  },
});

export const {
  actions: { userInfo, userInfoSuccess, userInfoFailure },
  reducer: userReducer,
} = userSlice;

// import { createSlice } from '@reduxjs/toolkit';
// import { UserName } from './types';

// export const userSlice = createSlice({
//   name: 'userSlice',
//   initialState: {
//     name: {} as UserName,
//     isInProgress: false,
//     isCompleted: false,
//   },
//   reducers: {
//     userInfo: (state, action) => {
//       state.isInProgress = true;
//       state.name = action.payload;
//     },
//     userInfoSuccess(state, action: { payload: UserName }) {
//       state.isInProgress = false;
//       state.isCompleted = true;
//       state.name = action.payload;
//     },
//     userInfoFailure(state) {
//       state.isInProgress = false;
//     },
//   },
// });

// export const {
//   actions: { userInfo, userInfoSuccess, userInfoFailure },
//   reducer: userReducer,
// } = userSlice;
