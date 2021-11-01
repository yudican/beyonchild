import axios from 'axios';
import Snackbar from 'react-native-snackbar';
import {put, takeLatest} from 'redux-saga/effects';
import {API_URL, REGISTER} from '../../../../utils/constant/redux';
import {setHeaderToken} from '../../../axios/setHeaderToken';
import {
  registerError,
  registerLoading,
  registerSuccess,
} from '../../actions/authAction';
import {toggleModalConfirmation} from '../../actions/globalAction';

// get all language
function* registerData({payload}) {
  yield put(registerLoading());
  try {
    const res = yield axios.post(`${API_URL}/auth/register`, payload);
    console.log(res);
    const {message, data} = res.data;
    setHeaderToken(data.access_token);
    yield put(registerSuccess(data));
    yield put(toggleModalConfirmation(message));
  } catch (e) {
    console.log(e.response);
    if (e.response) {
      Snackbar.show({
        text: e.response.data.message,
        duration: 3000,
        backgroundColor: '#E2494B',
      });
    }
    yield put(registerError());
  }
}

function* registerSaga() {
  yield takeLatest(REGISTER, registerData);
}

export default registerSaga;
