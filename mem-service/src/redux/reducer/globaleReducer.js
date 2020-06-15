import { combineReducers } from "redux";
import memsReducer from "./memsReducer";

export default combineReducers({
  mems: memsReducer,
});
