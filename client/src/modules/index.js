import { combineReducers } from 'redux';
import userReducer, { userSaga } from './user_login';
import authReduce, { authSaga } from './auth';
import profileUploadReducer, { profileUploadSaga } from './imageUpload';
import registerReduce, { registerSaga } from './register';
import { all } from 'redux-saga/effects';

const rootReducer = combineReducers({
  userReducer,
  authReduce,
  registerReduce,
  profileUploadReducer,
});
export function* rootSaga() {
  yield all([userSaga(), authSaga(), registerSaga(), profileUploadSaga()]);
}

export default rootReducer;
