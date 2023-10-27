import { createSlice } from '@reduxjs/toolkit';
import { Post } from '../auth/types';

const initialState = {
  favorites: [] as Post[],
  isFavorite: false,
};

const favoritePostsSlice = createSlice({
  name: 'favoritePosts',
  initialState,
  reducers: {
    addToFavorites(state, action) {
      state.isFavorite = true;
      const postToAdd = action.payload;
      state.favorites.push(postToAdd);
    },
    removeFromFavorites(state, action) {
      state.isFavorite = false;
      const postIdToRemove = action.payload;
      state.favorites = state.favorites.filter(
        (post) => post.id !== postIdToRemove
      );
    },
  },
});

export const { addToFavorites, removeFromFavorites } =
  favoritePostsSlice.actions;

export default favoritePostsSlice.reducer;
// type FavoriteAction = {
//   type: 'ADD_TO_FAVORITES' | 'REMOVE_FROM_FAVORITES';
//   postId: number;
// };
// export default favoritesReducer;
// const favoritesReducer = (state = initialState, action: FavoriteAction) => {
//   switch (action.type) {
//     case 'ADD_TO_FAVORITES':
//       return {
//         ...state,
//         favorites: [...state.favorites, action.postId],
//       };
//     case 'REMOVE_FROM_FAVORITES':
//       return {
//         ...state,
//         favorites: state.favorites.filter((post) => post.id !== action.postId),
//       };
//     default:
//       return state;
//   }
// };
// const initialState = {
//   favoritePosts: [] as Post[],
//   isFavorite: false,
// };

// const favoritePostsSlice = createSlice({
//   name: 'favoritePosts',
//   initialState,
//   reducers: {
//     addToFavorites(state, action) {
//       state.isFavorite = true;
//       state.favoritePosts = action.payload;
//     },
//     removeFromFavorites(state, action) {
//       state.isFavorite = false;
//     },
//   },
// });

// export const { addToFavorites, removeFromFavorites } =
//   favoritePostsSlice.actions;

// export default favoritePostsSlice.reducer;

// addToFavorites, removeFromFavorites

// addToFavorites(state, action) {
//   const { id } = action.payload;
//   const post = state.favoritePosts.find((post) => post.id === id);

//   if (post && !post.isFavorite) {
//     state.isFavorite = true;
//     state.favoritePosts.push(post);
//   }
// },

// removeFromFavorites(state, action) {
//   const { id } = action.payload;
//   const post = state.favoritePosts.find((post) => post.id === id);

//   if (post) {
//     state.isFavorite = false;
//     state.favoritePosts = state.favoritePosts.filter((p) => p.id !== id);
//   }
// },
