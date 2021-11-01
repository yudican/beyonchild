import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import Snackbar from 'react-native-snackbar';
import {put, takeLatest} from 'redux-saga/effects';
import {API_URL, LOGIN} from '../../../../utils/constant/redux';
import {setHeaderToken} from '../../../axios/setHeaderToken';
import {loginError, loginLoading, loginSuccess} from '../../actions/authAction';
import {setUserLogin, setUserToken} from '../../actions/userAction';

const setItem = async (key, item) => {
  await AsyncStorage.setItem(key, item);
};
// get all language
function* loginData({payload}) {
  yield put(loginLoading());
  try {
    const res = yield axios.post(`${API_URL}/auth/login`, payload);
    console.log(res);
    const {message, data} = res.data;
    setItem('token', data.access_token);
    setHeaderToken(data.access_token);
    yield put(loginSuccess(data));
    yield put(setUserToken(data.access_token));
    yield put(setUserLogin(data));
  } catch (e) {
    console.log(e.response);
    if (e.response) {
      Snackbar.show({
        text: e.response.data.message,
        duration: 3000,
        backgroundColor: '#E2494B',
      });
    }
    yield put(loginError());
  }
}

function* loginSaga() {
  yield takeLatest(LOGIN, loginData);
}

export default loginSaga;
