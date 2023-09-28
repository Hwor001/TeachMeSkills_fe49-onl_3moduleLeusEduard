export type RegistrationPayload = {
  username: string;
  password: string;
};

export interface Post {
  id: number;
  image?: string;
  text: string;
  date: string;
  lesson_num: number;
  title: string;
  author: number;
}
