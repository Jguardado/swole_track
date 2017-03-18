import { combineReducers } from 'redux';
import { basicReducer } from './test.reducer';
import { mockResponse } from "../../data/mock-response";

export default combineReducers({
  basicReducer
}, mockResponse);
