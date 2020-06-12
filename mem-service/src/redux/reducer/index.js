import { combineReducers } from "redux";
import memsReducer from "./mems";

export default combineReducers({
  mems: memsReducer,
});
