import { createSlice } from '@reduxjs/toolkit';
import { Post } from '../../features/auth/types';

const initialState: { selectedImage: Post | null } = {
  selectedImage: null,
};

const imageSlice = createSlice({
  name: 'image',
  initialState,
  reducers: {
    selectImage(state, action) {
      state.selectedImage = action.payload;
    },
    clearSelectedImage(state) {
      state.selectedImage = null;
    },
  },
});

export const { selectImage, clearSelectedImage } = imageSlice.actions;

export default imageSlice.reducer;
