import { combineReducers } from 'redux';
import userReducer, { userSaga } from './user_login';
import authReduce, { authSaga } from './auth';
import profileUploadReducer, { profileUploadSaga } from './imageUpload';
import registerReduce, { registerSaga } from './register';
import infoReduce, { infoSaga } from './information';
import userCard, { userCardSaga } from './userCard';
import { all } from 'redux-saga/effects';

const rootReducer = combineReducers({
  userReducer,
  authReduce,
  profileUploadReducer,
  infoReduce,
  userCard,
});
export function* rootSaga() {
  yield all([
    userSaga(),
    authSaga(),
    profileUploadSaga(),
    infoSaga(),
    userCardSaga(),
  ]);
}

export default rootReducer;
