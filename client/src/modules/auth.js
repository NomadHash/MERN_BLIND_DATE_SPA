import * as authApi from "../api/auth";
import { call, put, takeEvery } from "redux-saga/effects";

// * =======================
// * AUTH_SAGA_MODULE
// * =======================

const AUTH_USER = "auth/AUTH_USER";
const AUTH_USER_SUCCESS = "auth/AUTH_USER_SUCCESS";
const AUTH_USER_FAILURE = "auth/AUTH_USER_FAILURE";

const LOG_OUT_USER = "auth/LOG_OUT_USER";
const LOG_OUT_USER_SUCCESS = "auth/LOG_OUT_USER_SUCCESS";
const LOG_OUT_USER_FAILURE = "auth/LOG_OUT_USER_FAILURE";

export const authUser = () => ({
  type: AUTH_USER,
});

export const logOutUser = () => ({
  type: LOG_OUT_USER,
});

export function* authUserSaga() {
  try {
    const authRusult = yield call(authApi.authUserAsync);
    yield put({
      type: AUTH_USER_SUCCESS,
      payload: authRusult,
    });
  } catch (e) {
    yield put({
      type: AUTH_USER_FAILURE,
      payload: e,
    });
  }
}

export function* logOutSaga() {
  try {
    const logOutRusult = yield call(authApi.logoutAsync);
    yield put({
      type: LOG_OUT_USER_SUCCESS,
      payload: logOutRusult,
    });
  } catch (e) {
    console.log(e);
    yield put({
      type: LOG_OUT_USER_FAILURE,
      payload: e,
    });
  }
}

export function* authSaga() {
  yield takeEvery(AUTH_USER, authUserSaga);
  yield takeEvery(LOG_OUT_USER, logOutSaga);
}

export default function authReduce(state = {}, action) {
  switch (action.type) {
    case AUTH_USER:
      return {
        ...state,
      };
    case AUTH_USER_SUCCESS:
      return {
        ...state,
        testAuth: action.payload,
        error: null,
      };
    case AUTH_USER_FAILURE:
      return {
        ...state,
        error: action.payload.message,
      };

    case LOG_OUT_USER:
      return {
        ...state,
      };
    case LOG_OUT_USER_SUCCESS:
      return {
        ...state,
        testAuth: null,
        error: null,
      };
    case LOG_OUT_USER_FAILURE:
      return {
        ...state,
        error: action.payload.message,
      };

    default:
      return state;
  }
}
