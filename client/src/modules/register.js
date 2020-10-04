import * as registerApi from "../api/register";
import { call, put, takeEvery } from "redux-saga/effects";

// * =======================
// * REGISTER_SAGA_MODULE
// * =======================
const REGISTER_USER = "register/REGISTER_USER";
const REGISTER_USER_SUCCESS = "register/REGISTER_USER_SUCCESS";
const REGISTER_USER_FAILURE = "register/REGISTER_FAILURE";

export const registerUser = (formData) => ({
  type: REGISTER_USER,
  payload: formData,
});

export function* registerUserSaga(action) {
  try {
    const registerRusult = yield call(
      registerApi.registerUserAsync,
      action.payload
    );
    yield put({
      type: REGISTER_USER_SUCCESS,
      payload: registerRusult,
    });
  } catch (e) {
    console.log(e);
    yield put({
      type: REGISTER_USER_FAILURE,
      payload: e,
    });
  }
}

export function* registerSaga() {
  yield takeEvery(REGISTER_USER, registerUserSaga);
}

export default function registerReduce(state = {}, action) {
  switch (action.type) {
    case REGISTER_USER:
      return {
        ...state,
      };
    case REGISTER_USER_SUCCESS:
      return {
        ...state,
        registerSuccess: action.payload.registerSuccess,
        err: null,
      };
    case REGISTER_USER_FAILURE:
      return {
        ...state,
        registerSuccess: false,
        error: action.payload.message,
      };

    default:
      return state;
  }
}
