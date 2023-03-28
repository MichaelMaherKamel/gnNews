import { configureStore, combineReducers } from '@reduxjs/toolkit';
import viewReducer from './Slices/view';

const reducer = combineReducers({
  view: viewReducer,
});

export default configureStore({
  reducer,
});
