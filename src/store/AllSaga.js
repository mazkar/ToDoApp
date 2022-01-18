import {all} from 'redux-saga/effects';

import {SagaDashboardWorker} from '../redux/Dashboard/DashboardSaga';

export function* allSaga() {
  yield all([SagaDashboardWorker()]);
}
