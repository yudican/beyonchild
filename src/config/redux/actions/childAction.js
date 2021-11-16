import {
  ADD_CHILD,
  ADD_CHILD_ERROR,
  ADD_CHILD_LOADING,
  ADD_CHILD_SUCCESS,
  GET_CHILD,
  GET_CHILD_ERROR,
  GET_CHILD_LOADING,
  GET_CHILD_SUCCESS,
  GET_MINAT_BAKAT,
  GET_MINAT_BAKAT_ERROR,
  GET_MINAT_BAKAT_LOADING,
  GET_MINAT_BAKAT_SUCCESS,
  SET_MILESTONE,
} from '../../../utils/constant/redux';

export const getMinatBakat = payload => {
  return {
    type: GET_MINAT_BAKAT,
    payload,
  };
};
export const getMinatBakatSuccess = payload => {
  return {
    type: GET_MINAT_BAKAT_SUCCESS,
    payload,
  };
};
export const getMinatBakatError = payload => {
  return {
    type: GET_MINAT_BAKAT_ERROR,
    payload,
  };
};
export const getMinatBakatLoading = payload => {
  return {
    type: GET_MINAT_BAKAT_LOADING,
    payload,
  };
};

// ADD CHILD
export const addChild = payload => {
  return {
    type: ADD_CHILD,
    payload,
  };
};
export const addChildSuccess = payload => {
  return {
    type: ADD_CHILD_SUCCESS,
    payload,
  };
};
export const addChildError = payload => {
  return {
    type: ADD_CHILD_ERROR,
    payload,
  };
};
export const addChildLoading = payload => {
  return {
    type: ADD_CHILD_LOADING,
    payload,
  };
};

// ADD CHILD
export const getChild = payload => {
  return {
    type: GET_CHILD,
    payload,
  };
};
export const getChildSuccess = payload => {
  return {
    type: GET_CHILD_SUCCESS,
    payload,
  };
};
export const getChildError = payload => {
  return {
    type: GET_CHILD_ERROR,
    payload,
  };
};
export const getChildLoading = payload => {
  return {
    type: GET_CHILD_LOADING,
    payload,
  };
};

// Milestone
export const setMiletone = payload => {
  return {
    type: SET_MILESTONE,
    payload,
  };
};
