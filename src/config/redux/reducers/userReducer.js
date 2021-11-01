import {SET_USER_LOGIN, SET_USER_TOKEN} from '../../../utils/constant/redux';

const INITIAL_STATE = {
  user: null,
  token: null,
};
const userReducer = (state = INITIAL_STATE, {type, payload}) => {
  switch (type) {
    case SET_USER_LOGIN:
      return {
        ...state,
        user: payload,
      };
    case SET_USER_TOKEN:
      return {
        ...state,
        token: payload,
      };

    default:
      return {
        ...state,
      };
  }
};

export default userReducer;
