import axios from 'axios';
import {put, takeLatest} from 'redux-saga/effects';
import {API_URL, SCHOOL_FACILITY} from '../../../../utils/constant/redux';
import {
  getSchoolFacilityError,
  getSchoolFacilityLoading,
  getSchoolFacilitySuccess,
} from '../../actions/schoolAction';

// get all language
function* getSchoolFacilityData() {
  yield put(getSchoolFacilityLoading());
  try {
    const res = yield axios.get(`${API_URL}/school/facilities`);
    console.log(res);
    const {data} = res.data;
    yield put(getSchoolFacilitySuccess(data));
  } catch (e) {
    console.log(e?.response);
    yield put(getSchoolFacilityError());
  }
}

function* getSchoolFacilitySaga() {
  yield takeLatest(SCHOOL_FACILITY, getSchoolFacilityData);
}

export default getSchoolFacilitySaga;
