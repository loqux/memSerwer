import { createStore, applyMiddleware } from "redux";
// import thunk from 'redux-thunk';
import combineReducers from "./reducer";
import ReduxThunk from "redux-thunk";

export const memStore = createStore(
  combineReducers,
  applyMiddleware(ReduxThunk)
);
