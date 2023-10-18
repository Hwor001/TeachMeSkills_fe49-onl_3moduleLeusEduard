import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import postReducer from './features/postactive/Post.slice';
import imageReducer from './features/postactive/Image.slice';
import postsReducer from './features/postactive/all-post.slice';
import { signUpFormReducer } from './features/sing-up-form/sing-up-form.slice';
import createSagaMiddleware from 'redux-saga';
import { rootSaga } from './sagas';
import favoritesReducer from './features/postactive/favoritePostsSlice';
import { registrationReducer } from '#features/auth/registration.slice';
import { likeDislikeReducer } from './features/like-dislike/like-dislike.slice';

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  allPosts: postsReducer,
  Image: imageReducer,
  Post: postReducer,
  registration: registrationReducer,
  signUpForm: signUpFormReducer,
  favorites: favoritesReducer,
  likeDislike: likeDislikeReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware(getDefaultMiddleware) {
    return [...getDefaultMiddleware(), sagaMiddleware];
  },
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
