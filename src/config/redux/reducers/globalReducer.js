import {TOGGLE_MODAL_INFORMATION} from '../../../utils/constant/redux';

const INITIAL_STATE = {
  modalInformationVisible: false,
  modalInformationMessage: 'Message',
};
const globalReducer = (state = INITIAL_STATE, {type, payload}) => {
  switch (type) {
    case TOGGLE_MODAL_INFORMATION:
      return {
        ...state,
        modalInformationVisible: !state.modalInformationVisible,
        modalInformationMessage: payload,
      };

    default:
      return {
        ...state,
      };
  }
};

export default globalReducer;
