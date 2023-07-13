import { combineReducers } from '@reduxjs/toolkit';
import plantNumberReducer from './PlantNumberReducers';
import notificationReducer from './NotificationReducers';
import headerReducer from './HeaderReducers';

const rootReducer = combineReducers({
  plantNumber: plantNumberReducer,
  notification: notificationReducer,
  header: headerReducer,
});

export default rootReducer;
