import axios from 'axios';
import {put, takeLatest} from 'redux-saga/effects';
import {ADD_CHILD, API_URL} from '../../../../utils/constant/redux';
import {navigate} from '../../../../utils/navigation';
import {
  addChildError,
  addChildLoading,
  addChildSuccess,
} from '../../actions/childAction';
import {toggleModalConfirmation} from '../../actions/globalAction';

// get all language
function* addChildData({payload}) {
  yield put(addChildLoading());
  try {
    const res = yield axios.post(`${API_URL}/user/children`, payload);
    console.log(res);
    const {message, data} = res.data;
    yield put(addChildSuccess(data));
    navigate('Home');
    yield put(toggleModalConfirmation(message));
  } catch (e) {
    console.log(e?.response);
    yield put(addChildError());
  }
}

function* addChildSaga() {
  yield takeLatest(ADD_CHILD, addChildData);
}

export default addChildSaga;
