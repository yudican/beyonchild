import axios from 'axios';
import {put, takeLatest} from 'redux-saga/effects';
import {API_URL, GET_CHILD} from '../../../../utils/constant/redux';
import {
  getChildError,
  getChildLoading,
  getChildSuccess,
} from '../../actions/childAction';

// get all language
function* getChildData() {
  yield put(getChildLoading());
  try {
    const res = yield axios.get(`${API_URL}/user/children`);
    console.log(res);
    const {data} = res.data;
    yield put(getChildSuccess(data));
  } catch (e) {
    console.log(e?.response);
    yield put(getChildError());
  }
}

function* getChildSaga() {
  yield takeLatest(GET_CHILD, getChildData);
}

export default getChildSaga;
