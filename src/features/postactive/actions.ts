import { createAction } from '@reduxjs/toolkit';
import { Post } from '#features/auth/types';

export const selectImage = createAction<string>('post/selectImage');

export const selectPost = (post: any) => ({
  type: 'SELECT_POST',
  payload: post,
});

export const FETCH_POSTS_REQUEST = 'FETCH_POSTS_REQUEST';
export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS';
export const FETCH_POSTS_FAILURE = 'FETCH_POSTS_FAILURE';

export const fetchPostsRequest = () => ({
  type: FETCH_POSTS_REQUEST,
});

export const fetchPostsSuccess = (posts: Post[]) => ({
  type: FETCH_POSTS_SUCCESS,
  payload: posts,
});

export const fetchPostsFailure = (error: Error) => ({
  type: FETCH_POSTS_FAILURE,
  payload: error,
});
