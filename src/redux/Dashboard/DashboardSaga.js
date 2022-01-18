import axios from 'axios';
import {ToastAndroid} from 'react-native';
import {put, takeLatest, select} from 'redux-saga/effects';
import {baseUrl} from '../../services/Api';

//action
import {getAllActivity, setAllActivity} from './DashboardAction';

function* sagaGetActivity(action) {
  try {
    const res = yield axios.get(
      `${baseUrl}/activity-groups?email=yoga%2B1%40skyshi.io`,
    );
    console.log(res, 'result get all activity');
    yield put(setAllActivity(res.data));
  } catch (error) {
    console.log(error, 'error get all activity');
  }
}

export function* SagaDashboardWorker() {
  yield takeLatest('GET_ALL_ACTIVITY', sagaGetActivity);
}
