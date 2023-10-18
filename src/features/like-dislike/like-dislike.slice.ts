import { createSlice } from '@reduxjs/toolkit';

type Payload = {
  id: number;
};

type Rating = {
  likes: number;
  dislikes: number;
  userChoice: 'like' | 'dislike' | null;
};

const likeDislike = createSlice({
  name: 'likeDislike',
  initialState: {
    0: {
      likes: 0,
      dislikes: 8,
      userChoice: 'like',
    },
    1: {
      likes: 18,
      dislikes: 3,
      userChoice: 'like',
    },
    2: {
      likes: 15,
      dislikes: 7,
      userChoice: 'like',
    },
    3: {
      likes: 19,
      dislikes: 9,
      userChoice: 'dislike',
    },
    4: {
      likes: 21,
      dislikes: 13,
      userChoice: 'like',
    },
    5: {
      likes: 27,
      dislikes: 4,
      userChoice: 'like',
    },
    6: {
      likes: 17,
      dislikes: 9,
      userChoice: 'dislike',
    },
    7: {
      likes: 16,
      dislikes: 2,
      userChoice: 'like',
    },
    8: {
      likes: 31,
      dislikes: 3,
      userChoice: 'like',
    },
    9: {
      likes: 15,
      dislikes: 12,
      userChoice: 'like',
    },
    10: {
      likes: 27,
      dislikes: 22,
      userChoice: 'dislike',
    },
  } as Record<number, Rating>,
  reducers: {
    setActiveLike(state, action: { payload: Payload }) {
      const data = state[action.payload.id];
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
      const data = state[action.payload.id];
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
    init(state, action: { payload: Record<number, Rating> }) {
      Object.entries(action.payload).forEach(
        ([id, rating]) => (state[+id] = rating)
      );
    },
  },
});

export const {
  actions: { setActiveLike, setActiveDislike, init },
  reducer: likeDislikeReducer,
} = likeDislike;
