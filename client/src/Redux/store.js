import { configureStore, combineReducers } from '@reduxjs/toolkit';
import viewReducer from './Slices/view';
import countryReducer from './Slices/country';

const reducer = combineReducers({
  view: viewReducer,
  country: countryReducer,
});

export default configureStore({
  reducer,
});
