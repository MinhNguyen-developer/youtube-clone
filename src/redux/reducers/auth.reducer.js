/** @format */

import {
  LOAD_PROFILE,
  LOGIN_FAIL,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOG_OUT,
} from "../actionType";

const initialState = {
  accessToken: sessionStorage.getItem("ytc-access-token")
    ? sessionStorage.getItem("ytc-access-token")
    : null,
  user: sessionStorage.getItem("ytc-user")
    ? JSON.parse(sessionStorage.getItem("ytc-user"))
    : null,
  loading: false,
};
export const authReducer = (preState = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case LOGIN_REQUEST:
      return {
        ...preState,
        loading: true,
      };
    case LOGIN_SUCCESS: {
      return { ...preState, accessToken: payload, loading: false };
    }
    case LOGIN_FAIL:
      return { ...preState, accessToken: null, loading: false, error: payload };
    case LOAD_PROFILE:
      return { ...preState, user: payload };
    case LOG_OUT: {
      return { ...preState, accessToken: null, user: null };
    }
    default:
      return preState;
  }
};
