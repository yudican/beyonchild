import axios from 'axios';
import {put, takeLatest} from 'redux-saga/effects';
import {API_URL, SCHOOL_LEVEL} from '../../../../utils/constant/redux';
import {
  getSchoolLevelError,
  getSchoolLevelLoading,
  getSchoolLevelSuccess,
} from '../../actions/schoolAction';

// get all language
function* getSchoolLevelData() {
  yield put(getSchoolLevelLoading());
  try {
    const res = yield axios.get(`${API_URL}/school/level`);
    console.log(res);
    const {data} = res.data;
    yield put(getSchoolLevelSuccess(data));
  } catch (e) {
    console.log(e?.response);
    yield put(getSchoolLevelError());
  }
}

function* getSchoolLevelSaga() {
  yield takeLatest(SCHOOL_LEVEL, getSchoolLevelData);
}

export default getSchoolLevelSaga;
