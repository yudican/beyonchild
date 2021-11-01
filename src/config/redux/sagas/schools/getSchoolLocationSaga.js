import axios from 'axios';
import {put, takeLatest} from 'redux-saga/effects';
import {API_URL, SCHOOL_LOCATION} from '../../../../utils/constant/redux';
import {
  getSchoolLocationError,
  getSchoolLocationLoading,
  getSchoolLocationSuccess,
} from '../../actions/schoolAction';

// get all language
function* getSchoolLocationData() {
  yield put(getSchoolLocationLoading());
  try {
    const res = yield axios.get(`${API_URL}/school/location`);
    console.log(res);
    const {data} = res.data;
    yield put(getSchoolLocationSuccess(data));
  } catch (e) {
    console.log(e?.response);
    yield put(getSchoolLocationError());
  }
}

function* getSchoolLocationSaga() {
  yield takeLatest(SCHOOL_LOCATION, getSchoolLocationData);
}

export default getSchoolLocationSaga;
