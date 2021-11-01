import axios from 'axios';
import {put, takeLatest} from 'redux-saga/effects';
import {
  API_URL,
  SCHOOL_RECOMENDATION_LIST,
} from '../../../../utils/constant/redux';
import {
  getSchoolRecomendationListError,
  getSchoolRecomendationListLoading,
  getSchoolRecomendationListSuccess,
} from '../../actions/schoolAction';

// get all language
function* getSchoolRecomendationListData({payload}) {
  yield put(getSchoolRecomendationListLoading());
  try {
    const form = payload;
    delete form?.price_id;
    const res = yield axios.post(`${API_URL}/school/recomendation`, form);
    console.log(res);
    const {data} = res.data;
    yield put(getSchoolRecomendationListSuccess(data));
  } catch (e) {
    console.log(e?.response);
    yield put(getSchoolRecomendationListError());
  }
}

function* getSchoolRecomendationListSaga() {
  yield takeLatest(SCHOOL_RECOMENDATION_LIST, getSchoolRecomendationListData);
}

export default getSchoolRecomendationListSaga;
