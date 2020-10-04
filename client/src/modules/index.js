import { combineReducers } from "redux";
import userReduce, { userSaga } from "./user";
import authReduce, { authSaga } from "./auth";
import registerReduce, { registerSaga } from "./register";
import { all } from "redux-saga/effects";

const rootReducer = combineReducers({ userReduce, authReduce, registerReduce });
export function* rootSaga() {
  yield all([userSaga(), authSaga(), registerSaga()]);
}

export default rootReducer;
