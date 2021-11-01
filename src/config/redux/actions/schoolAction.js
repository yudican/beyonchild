import {
  SCHOOL_FACILITY,
  SCHOOL_FACILITY_ERROR,
  SCHOOL_FACILITY_LOADING,
  SCHOOL_FACILITY_SUCCESS,
  SCHOOL_LEVEL,
  SCHOOL_LEVEL_ERROR,
  SCHOOL_LEVEL_LOADING,
  SCHOOL_LEVEL_SUCCESS,
  SCHOOL_LOCATION,
  SCHOOL_LOCATION_ERROR,
  SCHOOL_LOCATION_LOADING,
  SCHOOL_LOCATION_SUCCESS,
  SCHOOL_RECOMENDATION_FILTER,
  SCHOOL_RECOMENDATION_LIST,
  SCHOOL_RECOMENDATION_LIST_ERROR,
  SCHOOL_RECOMENDATION_LIST_LOADING,
  SCHOOL_RECOMENDATION_LIST_SUCCESS,
} from '../../../utils/constant/redux';

// SCHOOL RECOMENDATION FILTER
export const schoolRecomendationFilterLevel = payload => {
  return {
    type: SCHOOL_RECOMENDATION_FILTER,
    payload,
  };
};

// SCHOOL LEVEL
export const getSchoolLevel = payload => {
  return {
    type: SCHOOL_LEVEL,
    payload,
  };
};
export const getSchoolLevelSuccess = payload => {
  return {
    type: SCHOOL_LEVEL_SUCCESS,
    payload,
  };
};
export const getSchoolLevelError = payload => {
  return {
    type: SCHOOL_LEVEL_ERROR,
    payload,
  };
};
export const getSchoolLevelLoading = payload => {
  return {
    type: SCHOOL_LEVEL_LOADING,
    payload,
  };
};

// SCHOOL LOCATION
export const getSchoolLocation = payload => {
  return {
    type: SCHOOL_LOCATION,
    payload,
  };
};
export const getSchoolLocationSuccess = payload => {
  return {
    type: SCHOOL_LOCATION_SUCCESS,
    payload,
  };
};
export const getSchoolLocationError = payload => {
  return {
    type: SCHOOL_LOCATION_ERROR,
    payload,
  };
};
export const getSchoolLocationLoading = payload => {
  return {
    type: SCHOOL_LOCATION_LOADING,
    payload,
  };
};

// SCHOOL LEVEL
export const getSchoolFacility = payload => {
  return {
    type: SCHOOL_FACILITY,
    payload,
  };
};
export const getSchoolFacilitySuccess = payload => {
  return {
    type: SCHOOL_FACILITY_SUCCESS,
    payload,
  };
};
export const getSchoolFacilityError = payload => {
  return {
    type: SCHOOL_FACILITY_ERROR,
    payload,
  };
};
export const getSchoolFacilityLoading = payload => {
  return {
    type: SCHOOL_FACILITY_LOADING,
    payload,
  };
};

// SCHOOL RECOMENDATION LIST
export const getSchoolRecomendationList = payload => {
  return {
    type: SCHOOL_RECOMENDATION_LIST,
    payload,
  };
};
export const getSchoolRecomendationListSuccess = payload => {
  return {
    type: SCHOOL_RECOMENDATION_LIST_SUCCESS,
    payload,
  };
};
export const getSchoolRecomendationListError = payload => {
  return {
    type: SCHOOL_RECOMENDATION_LIST_ERROR,
    payload,
  };
};
export const getSchoolRecomendationListLoading = payload => {
  return {
    type: SCHOOL_RECOMENDATION_LIST_LOADING,
    payload,
  };
};
