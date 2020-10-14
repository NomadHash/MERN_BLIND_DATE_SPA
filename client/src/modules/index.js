import { combineReducers } from 'redux';
import userReduce, { userSaga } from './user';
import authReduce, { authSaga } from './auth';
import profileUploadReducer, { profileUploadSaga } from './imageUpload';
import registerReduce, { registerSaga } from './register';
import { all } from 'redux-saga/effects';

const rootReducer = combineReducers({
  userReduce,
  authReduce,
  registerReduce,
  profileUploadReducer,
});
export function* rootSaga() {
  yield all([userSaga(), authSaga(), registerSaga(), profileUploadSaga()]);
}

export default rootReducer;
