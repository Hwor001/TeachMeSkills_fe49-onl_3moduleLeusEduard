export type RegistrationPayload = {
  username: string;
  password: string;
  email: string;
};

export type UserChoice = 'like' | 'dislike' | null;

export interface Post {
  id: number;
  image: any;
  text: string;
  date: string;
  lesson_num: number;
  likes_amount: number;
  dislikes_amount: number;
  user_choice: UserChoice;
  title: string;
  author: number;
}

export type PostsResult = {
  id: number;
  image: string;
  text: string;
  date: string;
  lesson_num: number;
  likes_amount: number;
  dislikes_amount: number;
  user_choice: UserChoice;
  title: string;
  description: string;
  author: number;
};

export type PostsResponse = {
  count: number;
  next: string;
  previous: null | string;
  results: PostsResult[];
};

export type Tokens = {
  access: string;
  refresh: string;
};

export type ActivationPayload = {
  uid: string;
  token: string;
};

export type ActivationResponse = {
  uid: string;
  token: string;
};

export type AuthorizationPayload = {
  email: string;
  password: string;
};

export type AuthorizationResponse = {
  access: string;
  refresh: string;
};

export type UserName = {
  username: string;
  id: number;
  email: string;
};
