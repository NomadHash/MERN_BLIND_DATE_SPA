import * as UserApi from '../api/user';
import { call, put, takeEvery } from 'redux-saga/effects';

const LOGIN_USER = 'user/LOGIN_USER'; // 요청 시작
const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS'; // 요청 성공
const LOGIN_USER_FAILURE = 'LOGIN_USER_FAILURE'; // 요청 실패

export const loginUser = (formData) => ({
  type: LOGIN_USER,
  payload: formData,
});

export function* loginUserSaga(action) {
  try {
    const loginRusult = yield call(UserApi.loginUser, action.payload);
    yield put({
      type: LOGIN_USER_SUCCESS,
      payload: loginRusult,
    });
  } catch (e) {
    console.log(e);
    yield put({
      type: LOGIN_USER_FAILURE,
      payload: e,
    });
  }
}

export function* userSaga() {
  yield takeEvery(LOGIN_USER, loginUserSaga);
}

const initialState = {
  userData: {
    isAuth: false,
    userId: null,
    userName: null,
  },
  error: null,
  loginSuccess: null,
};

export default function userReduce(state = initialState, action) {
  switch (action.type) {
    case LOGIN_USER:
      return {
        ...state,
      };
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        loginSuccess: action.payload,
        error: null,
      };
    case LOGIN_USER_FAILURE:
      return {
        ...state,
        loginSuccess: false,
        error: action.payload.message,
      };

    default:
      return state;
  }
}
