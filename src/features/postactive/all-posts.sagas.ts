import { call, put, takeLatest } from 'typed-redux-saga';
import {
  getAllposts,
  getAllPostsFailure,
  getAllPostsSuccess,
} from '../postactive/all-post.slice';
import { allPostsapi as allPostsApi } from '../auth/api';
import { PostsResponse, PostsResult, Post, UserChoice } from '../auth/types';
import { setRatings } from '../like-dislike/like-dislike.slice';

export function* getAllPostsSaga() {
  yield takeLatest(getAllposts, function* getAllPostsHandler() {
    const respose: PostsResponse = yield* call(allPostsApi.getAllPosts);

    if (respose) {
      const mergedPosts = mergePosts(respose.results);
      yield put(setRatings(mergedPosts));
      yield put(getAllPostsSuccess({ posts: mergedPosts }));
    } else {
      yield put(getAllPostsFailure({ error: 'Mocked error message' }));
    }
  });
}

function mergePosts(postsFromApi: PostsResult[]): Post[] {
  return postsFromApi.map((element) => {
    return {
      id: element.id,
      image: element.image,
      text: element.text,
      date: element.date,
      lesson_num: element.lesson_num,
      likes_amount: Math.floor(Math.random() * 1000),
      dislikes_amount: Math.floor(Math.random() * 1000),
      user_choice: generateUserChoice(),
      title: element.title,
      author: element.author,
    };
  });
}

function generateUserChoice(): UserChoice {
  const userChoiseNumber = Math.floor(Math.random() * 3);
  switch (userChoiseNumber) {
    case 1:
      return 'like';
    case 2:
      return 'dislike';
    default:
      return null;
  }
}
