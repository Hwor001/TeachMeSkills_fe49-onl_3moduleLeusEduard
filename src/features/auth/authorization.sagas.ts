import { call, put, takeLatest } from 'typed-redux-saga';
import {
  authorization,
  authorizationFailure,
  authorizationSuccess,
} from './authorization.slice';
import { api } from './api';
import { setTokens } from '../../api/tokens';

export function* authorizationSaga() {
  yield takeLatest(authorization, function* authorizationHandler({ payload }) {
    const tokens = yield* call(api.authorize, payload);
    if (tokens) {
      yield call(setTokens, tokens);
      yield put(authorizationSuccess());
    } else {
      yield put(authorizationFailure());
    }
  });
}
