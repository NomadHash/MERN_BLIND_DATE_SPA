import { combineReducers } from "redux";
import userReduce, { userSaga } from "./user";
import authReduce, { authSaga } from "./auth";
import { all } from "redux-saga/effects";

const rootReducer = combineReducers({ userReduce, authReduce });
export function* rootSaga() {
  yield all([userSaga(), authSaga()]);
}

export default rootReducer;
