import {
  ADD_CHILD_ERROR,
  ADD_CHILD_LOADING,
  ADD_CHILD_SUCCESS,
  GET_CHILD_ERROR,
  GET_CHILD_LOADING,
  GET_CHILD_SUCCESS,
  GET_MINAT_BAKAT_ERROR,
  GET_MINAT_BAKAT_LOADING,
  GET_MINAT_BAKAT_SUCCESS,
} from '../../../utils/constant/redux';

const INITIAL_STATE = {
  isLoading: false,
  minatBakats: [],
  childs: [],
};
const childReducer = (state = INITIAL_STATE, {type, payload}) => {
  switch (type) {
    case GET_MINAT_BAKAT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        minatBakats: payload,
      };
    case GET_MINAT_BAKAT_ERROR:
      return {
        ...state,
        isLoading: false,
        minatBakats: [],
      };
    case GET_MINAT_BAKAT_LOADING:
      return {
        ...state,
        isLoading: true,
      };

    // add child
    case ADD_CHILD_SUCCESS:
      return {
        ...state,
        isLoading: false,
        childs: [...state.childs, payload],
      };
    case ADD_CHILD_ERROR:
      return {
        ...state,
        isLoading: false,
        childs: [],
      };
    case ADD_CHILD_LOADING:
      return {
        ...state,
        isLoading: true,
      };

    // GET Child
    case GET_CHILD_SUCCESS:
      return {
        ...state,
        isLoading: false,
        childs: payload,
      };
    case GET_CHILD_ERROR:
      return {
        ...state,
        isLoading: false,
        childs: [],
      };
    case GET_CHILD_LOADING:
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

export default childReducer;
