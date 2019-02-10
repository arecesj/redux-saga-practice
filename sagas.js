import { put, takeEvery, all } from 'redux-saga/effects';

const delay = ms => new Promise(res => setTimeout(res, ms));

export function* helloSaga() {
  console.log('Hello Sagas!');
}

// a worker saga. AKA will perform the async task
export function* incrementAsync() {
  yield delay(1000);
  yield put({ type: 'INCREMENT' });
}

//a watcher saga. spawns new incrementAsync on each INCREMENT_ASYNC
export function* watchIncrementAsync() {
  yield takeEvery('INCREMENT_ASYNC', incrementAsync);
}

//root saga - single entry point to start all Sagas at once

export default function* rootSaga() {
  yield all([helloSaga(), watchIncrementAsync()]);
}
