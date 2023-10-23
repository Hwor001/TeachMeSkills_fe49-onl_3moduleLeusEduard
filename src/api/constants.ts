import { getTokens } from './tokens';

export const baseUrl = 'https://studapi.teachmeskills.by/';
export const jsonContentTypeHeaders = {
  'content-type': 'application/json',
};
export const authorisationHeaders = {
  Authorization: 'Bearer ' + getTokens()?.access,
};
