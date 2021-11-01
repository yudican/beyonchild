import axios from 'axios';
import {put, takeLatest} from 'redux-saga/effects';
import {API_URL, GET_MINAT_BAKAT} from '../../../../utils/constant/redux';
import {
  getMinatBakatError,
  getMinatBakatLoading,
  getMinatBakatSuccess,
} from '../../actions/childAction';

// get all language
function* getMinatBakatData() {
  yield put(getMinatBakatLoading());
  try {
    const res = yield axios.get(`${API_URL}/minat-bakat`);
    console.log(res);
    yield put(getMinatBakatSuccess(res.data.data));
  } catch (e) {
    console.log(e);
    yield put(getMinatBakatError());
  }
}

function* getMinatBakatSaga() {
  yield takeLatest(GET_MINAT_BAKAT, getMinatBakatData);
}

export default getMinatBakatSaga;
