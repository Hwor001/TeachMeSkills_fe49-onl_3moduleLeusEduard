import { call, put, takeEvery, select } from 'typed-redux-saga';
import { api } from './api';
import {
  activation,
  activationFailure,
  activationSuccess,
  setInProgress,
} from './activation.slice';
import { RootState } from '../../store1';

export function* activationSaga() {
  yield takeEvery(activation, function* activateHandler({ payload }) {
    const isInProgress = yield* select(
      (state: RootState) => state.activation.isInProgress
    );
    if (isInProgress) return;
    yield put(setInProgress());
    try {
      const data = yield* call(api.activate, payload);
      console.log(data);
      yield put(activationSuccess());
    } catch (error) {
      console.log(error);
      yield put(activationFailure());
    }
  });
}
