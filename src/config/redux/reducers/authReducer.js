import {
  LOGIN_ERROR,
  LOGIN_LOADING,
  LOGIN_SUCCESS,
  REGISTER_ERROR,
  REGISTER_LOADING,
  REGISTER_SUCCESS,
} from '../../../utils/constant/redux';

const INITIAL_STATE = {
  isLoading: false,
};
const authReducer = (state = INITIAL_STATE, {type, payload}) => {
  switch (type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
      };
    case LOGIN_ERROR:
      return {
        ...state,
        isLoading: false,
      };
    case LOGIN_LOADING:
      return {
        ...state,
        isLoading: true,
      };

    // REGISTER
    case REGISTER_SUCCESS:
      return {
        ...state,
        isLoading: false,
      };
    case REGISTER_ERROR:
      return {
        ...state,
        isLoading: false,
      };
    case REGISTER_LOADING:
      return {
        ...state,
        isLoading: true,
      };

    default:
      return {
        ...state,
      };
  }
};

export default authReducer;
