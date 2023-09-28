import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import postReducer from './features/postactive/Post.slice';
import imageReducer from './features/postactive/Image.slice';
import { signUpFormReducer } from './features/sing-up-form/sing-up-form.slice';
import createSagaMiddleware from 'redux-saga';
import { rootSaga } from './sagas';
import { registrationReducer } from '#features/auth/registration.slice';

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  Image: imageReducer,
  Post: postReducer,
  registration: registrationReducer,
  signUpForm: signUpFormReducer,
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
