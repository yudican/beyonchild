import {SET_USER_LOGIN, SET_USER_TOKEN} from '../../../utils/constant/redux';

export const setUserLogin = payload => {
  return {
    type: SET_USER_LOGIN,
    payload,
  };
};

export const setUserToken = payload => {
  return {
    type: SET_USER_TOKEN,
    payload,
  };
};
