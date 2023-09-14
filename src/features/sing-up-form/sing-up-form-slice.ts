import { createSlice } from '@reduxjs/toolkit';

const singUpFormSlice = createSlice({
   name:'singUpForm',
   initialState: {
      name: '',
      email: '',
      password: '',
      confirmedPassword: '',
   },
   reducers:{
      setName(state, action: {payload:typeof state['name']}) {
         state.name= action.payload;

      },
   },
});   
   

export const {
   actions: { setName },
   reducer: singUpFormReducer,
} = singUpFormSlice;