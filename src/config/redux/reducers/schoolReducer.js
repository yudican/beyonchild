import {
  SCHOOL_FACILITY_ERROR,
  SCHOOL_FACILITY_LOADING,
  SCHOOL_FACILITY_SUCCESS,
  SCHOOL_LEVEL_ERROR,
  SCHOOL_LEVEL_LOADING,
  SCHOOL_LEVEL_SUCCESS,
  SCHOOL_LOCATION_ERROR,
  SCHOOL_LOCATION_LOADING,
  SCHOOL_LOCATION_SUCCESS,
  SCHOOL_RECOMENDATION_FILTER,
  SCHOOL_RECOMENDATION_LIST_ERROR,
  SCHOOL_RECOMENDATION_LIST_LOADING,
  SCHOOL_RECOMENDATION_LIST_SUCCESS,
} from '../../../utils/constant/redux';

const INITIAL_STATE = {
  isLoading: false,
  schools: [],
  levels: [],
  locations: [],
  facilities: [],
  filters: {},
};
const schoolReducer = (state = INITIAL_STATE, {type, payload}) => {
  switch (type) {
    case SCHOOL_RECOMENDATION_FILTER:
      return {
        ...state,
        isLoading: false,
        filters: {...state.filters, ...payload},
      };

    // Get School Level
    case SCHOOL_LEVEL_SUCCESS:
      return {
        ...state,
        isLoading: false,
        levels: payload,
      };
    case SCHOOL_LEVEL_ERROR:
      return {
        ...state,
        isLoading: false,
        levels: [],
      };
    case SCHOOL_LEVEL_LOADING:
      return {
        ...state,
        isLoading: true,
      };

    // add child
    case SCHOOL_LOCATION_SUCCESS:
      return {
        ...state,
        isLoading: false,
        locations: payload,
      };
    case SCHOOL_LOCATION_ERROR:
      return {
        ...state,
        isLoading: false,
        locations: [],
      };
    case SCHOOL_LOCATION_LOADING:
      return {
        ...state,
        isLoading: true,
      };

    // GET School facility
    case SCHOOL_FACILITY_SUCCESS:
      return {
        ...state,
        isLoading: false,
        facilities: payload,
      };
    case SCHOOL_FACILITY_ERROR:
      return {
        ...state,
        isLoading: false,
        facilities: [],
      };
    case SCHOOL_FACILITY_LOADING:
      return {
        ...state,
        isLoading: true,
      };

    // GET Child
    case SCHOOL_RECOMENDATION_LIST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        schools: payload,
      };
    case SCHOOL_RECOMENDATION_LIST_ERROR:
      return {
        ...state,
        isLoading: false,
        schools: [],
      };
    case SCHOOL_RECOMENDATION_LIST_LOADING:
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

export default schoolReducer;
