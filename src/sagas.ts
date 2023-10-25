import { all } from 'typed-redux-saga';
import { registerSaga } from './features/auth/registerSaga';
import { getAllPostsSaga } from './features/postactive/all-posts.sagas';
import { activationSaga } from './features/auth/activation.sagas';
import { authorizationSaga } from './features/auth/authorization.sagas';

export function* rootSaga() {
  yield all([
    registerSaga(),
    getAllPostsSaga(),
    activationSaga(),
    authorizationSaga(),
  ]);
}
