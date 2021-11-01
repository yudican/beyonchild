import {TOGGLE_MODAL_INFORMATION} from '../../../utils/constant/redux';

export const toggleModalConfirmation = payload => {
  return {
    type: TOGGLE_MODAL_INFORMATION,
    payload,
  };
};
