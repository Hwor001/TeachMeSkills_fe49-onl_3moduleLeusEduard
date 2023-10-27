import { call, put, takeLatest } from 'typed-redux-saga';
import { userInfo, userInfoFailure, userInfoSuccess } from './user.slice';
import { userApi } from './api';

export function* UserSaga() {
  yield takeLatest(userInfo, function* userHundler({ payload }) {
    try {
      const data = yield* call(userApi.userInfo, payload);

      yield put(userInfoSuccess(data));
    } catch {
      yield put(userInfoFailure());
    }
  });
}
