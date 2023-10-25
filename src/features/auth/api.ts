import { PostsResponse } from '../../features/auth/types';
import {
  ActivationPayload,
  AuthorizationPayload,
  AuthorizationResponse,
  RegistrationPayload,
} from './types';
import { baseUrl, jsonContentTypeHeaders } from '../../api/constants';
import { request } from '../../api/request';

export const api = {
  activate: (payload: ActivationPayload): Promise<string> => {
    return request(baseUrl + 'auth/users/activation/', {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: { ...jsonContentTypeHeaders },
    }).then((response) => {
      if (!response.ok) {
        throw new Error('SERVER_ERROR');
      }
      return response.text();
    });
  },

  authorize: (
    payload: AuthorizationPayload
  ): Promise<AuthorizationResponse> => {
    return request(baseUrl + 'auth/jwt/create/', {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: { ...jsonContentTypeHeaders },
    }).then((response) => {
      if (!response.ok) {
        throw new Error('SERVER_ERROR');
      }
      return response.json();
    });
  },

  register: (payload: RegistrationPayload) => {
    return request(baseUrl + 'auth/users/', {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: { ...jsonContentTypeHeaders },
    }).then((response) => {
      if (!response.ok) {
        throw new Error('SERVER_ERROR');
      }
      return response.json();
    });
  },
};

export const allPostsapi = {
  getAllPosts: (): Promise<PostsResponse> => {
    return fetch(baseUrl + 'blog/posts/?lesson_num=2023&limit=12&offset=20', {
      method: 'GET',
      headers: {
        ...jsonContentTypeHeaders,
      },
    }).then((response) => {
      if (!response.ok) {
        throw new Error('SERVER ERROR');
      }
      return response.json();
    });
  },
};
