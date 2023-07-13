import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import rootReducer from '../reducers';
import thunk from '../middlewares/thunk';

export const store = configureStore({
  reducer: rootReducer,
  ...applyMiddleware(thunk),
});
