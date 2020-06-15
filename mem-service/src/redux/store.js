import { createStore, applyMiddleware } from "redux";
import combineReducers from "./reducer/globaleReducer";
import ReduxThunk from "redux-thunk";

export default function memStore() {
  return createStore(combineReducers, applyMiddleware(ReduxThunk));
}
