import {all} from 'redux-saga/effects';
import loginSaga from './auth/loginSaga';
import registerSaga from './auth/registerSaga';
import addChildSaga from './childs/addChildSaga';
import getChildSaga from './childs/getChildSaga';
import getMinatBakatSaga from './childs/getMinatBakatSaga';
import getSchoolFacilitySaga from './schools/getSchoolFacilitySaga';
import getSchoolLevelSaga from './schools/getSchoolLevelSaga';
import getSchoolLocationSaga from './schools/getSchoolLocationSaga';
import getSchoolRecomendationListSaga from './schools/getSchoolRecomendationListSaga';
function* SagaWatcher() {
  yield all([
    loginSaga(),
    registerSaga(),
    // Childs
    getMinatBakatSaga(),
    addChildSaga(),
    getChildSaga(),

    // Schools
    getSchoolLevelSaga(),
    getSchoolLocationSaga(),
    getSchoolFacilitySaga(),
    getSchoolRecomendationListSaga(),
  ]);
}

export default SagaWatcher;
