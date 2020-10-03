import * as authApi from "../api/auth";
import { call, put, takeEvery } from "redux-saga/effects";

const AUTH_USER = "auth/AUTH_USER"; // 요청 시작
const AUTH_USER_SUCCESS = "auth/AUTH_USER_SUCCESS"; // 요청 성공
const AUTH_USER_FAILURE = "auth/AUTH_USER_FAILURE"; // 요청 실패

export const authUser = () => ({
  type: AUTH_USER,
});

export function* authUserSaga() {
  try {
    const authRusult = yield call(authApi.authUserAsync);
    yield put({
      type: AUTH_USER_SUCCESS,
      payload: authRusult,
    });
  } catch (e) {
    console.log(e);
    yield put({
      type: AUTH_USER_FAILURE,
      payload: e,
    });
  }
}

export function* authSaga() {
  yield takeEvery(AUTH_USER, authUserSaga);
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
        isAuth: false,
        error: action.payload.message,
      };

    default:
      return state;
  }
}
