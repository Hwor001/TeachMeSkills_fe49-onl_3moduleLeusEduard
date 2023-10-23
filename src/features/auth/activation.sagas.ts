import { select, call, put, takeLatest, takeEvery } from 'typed-redux-saga';
import {
  activate,
  activateSuccess,
  activateFailure,
  setInProgress,
} from './activation.slice';
import { api } from './api';
import { RootState } from '../../store1';

export function* activationSaga() {
  yield takeEvery(activate, function* activateHandler({ payload }) {
    const isInProgress = yield* select(
      (state: RootState) => state.activate.isInProgress
    );
    if (isInProgress) return;
    yield put(setInProgress());
    try {
      const data = yield* call(api.activation, payload);
      // console.log(data);
      yield put(activateSuccess());
    } catch {
      yield put(activateFailure());
    }
  });
}
