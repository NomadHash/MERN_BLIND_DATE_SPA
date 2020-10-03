import { combineReducers } from 'redux';
import userReduce, { userSaga } from './user';
import { all } from 'redux-saga/effects';

const rootReducer = combineReducers({ userReduce });
export function* rootSaga() {
  yield all([userSaga()]);
}

export default rootReducer;
