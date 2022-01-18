import {combineReducers} from 'redux';

import {DashboardReducer} from '../redux/Dashboard/DashboardReducer';

export const allReducer = combineReducers({
  DashboardReducer,
});
