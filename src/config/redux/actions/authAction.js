import {
  LOGIN,
  LOGIN_ERROR,
  LOGIN_LOADING,
  LOGIN_SUCCESS,
  REGISTER,
  REGISTER_ERROR,
  REGISTER_LOADING,
  REGISTER_SUCCESS,
} from '../../../utils/constant/redux';

// AUTH - LOGIN
export const login = payload => {
  return {
    type: LOGIN,
    payload,
  };
};
export const loginSuccess = payload => {
  return {
    type: LOGIN_SUCCESS,
    payload,
  };
};
export const loginError = payload => {
  return {
    type: LOGIN_ERROR,
    payload,
  };
};
export const loginLoading = payload => {
  return {
    type: LOGIN_LOADING,
    payload,
  };
};

// AUTH - REGISTER
export const register = payload => {
  return {
    type: REGISTER,
    payload,
  };
};
export const registerSuccess = payload => {
  return {
    type: REGISTER_SUCCESS,
    payload,
  };
};
export const registerError = payload => {
  return {
    type: REGISTER_ERROR,
    payload,
  };
};
export const registerLoading = payload => {
  return {
    type: REGISTER_LOADING,
    payload,
  };
};
