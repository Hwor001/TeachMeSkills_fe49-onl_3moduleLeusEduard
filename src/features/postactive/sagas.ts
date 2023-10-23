import { call, put, takeLatest } from 'redux-saga/effects';
import {
  FETCH_POSTS_REQUEST,
  fetchPostsSuccess,
  fetchPostsFailure,
} from './actions';
import { Post, UserChoice } from '../auth/types';

interface ResponseType {
  id: number;
  image: any;
  title: string;
  text: string;
  date: string;
  lesson_num: number;
  likes_amount: number;
  dislikes_amount: number;
  user_choice: UserChoice;
  author: number;
}

interface ApiResponse {
  results: ResponseType[];
}

function fetchPostsFromAPI(): Promise<ApiResponse> {
  return fetch(
    'http://studapi.teachmeskills.by/blog/posts/?lesson_num=2023&limit=20'
  )
    .then((response) => response.json())
    .then((data) => data as ApiResponse);
}

function* fetchPosts(): Generator<any, void, ApiResponse> {
  try {
    const response: ApiResponse = yield call(fetchPostsFromAPI);
    const posts: Post[] = response.results.map((item: ResponseType) => ({
      id: item.id,
      image: item.image,
      title: item.title,
      text: item.text,
      date: item.date,
      lesson_num: item.lesson_num,
      likes_amount: item.likes_amount,
      dislikes_amount: item.dislikes_amount,
      user_choice: item.user_choice,
      author: item.author,
    }));
    yield put(fetchPostsSuccess(posts));
  } catch (error: any) {
    yield put(fetchPostsFailure(error));
  }
}

export function* watchFetchPosts() {
  yield takeLatest(FETCH_POSTS_REQUEST, fetchPosts);
}
