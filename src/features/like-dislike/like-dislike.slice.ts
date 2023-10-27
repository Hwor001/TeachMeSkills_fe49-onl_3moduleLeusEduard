import { createSlice } from '@reduxjs/toolkit';
import { Post, UserChoice } from '../auth/types';

type Payload = {
  id: number;
};

type Rating = {
  likes: number;
  dislikes: number;
  userChoice: UserChoice;
};

const mapPostsToRatings = (posts: Post[]): Record<number, Rating> => {
  return posts.reduce((accumulator, value, index) => {
    return {
      ...accumulator,
      [value.id]: {
        likes: value.likes_amount,
        dislikes: value.dislikes_amount,
        userChoice: value.user_choice,
      } as Rating,
    };
  }, {});
};

const likeDislike = createSlice({
  name: 'likeDislike',
  initialState: { records: {} as Record<number, Rating> },
  reducers: {
    setRatings(state, action: { payload: Post[] }) {
      state.records = mapPostsToRatings(action.payload);
    },
    setActiveLike(state, action: { payload: Payload }) {
      const data = state.records[action.payload.id];
      if (!data) return;
      if (data.userChoice === 'like') {
        data.likes--;
        data.userChoice = null;
        return;
      }
      if (data.userChoice === 'dislike') {
        data.dislikes--;
      }
      data.likes++;
      data.userChoice = 'like';
    },
    setActiveDislike(state, action: { payload: Payload }) {
      const data = state.records[action.payload.id];
      if (!data) return;
      if (data.userChoice === 'dislike') {
        data.dislikes--;
        data.userChoice = null;
        return;
      }
      if (data.userChoice === 'like') {
        data.likes--;
      }
      data.dislikes++;
      data.userChoice = 'dislike';
    },
  },
});

export const {
  actions: { setRatings, setActiveLike, setActiveDislike },
  reducer: likeDislikeReducer,
} = likeDislike;
