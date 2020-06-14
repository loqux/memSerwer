import * as action from "./actionsType";
import * as memsApi from "../../api/memsApi";

export function updateMemSuccess(mem) {
  return {
    type: action.UPDATE_MEM,
    mem,
  };
}

export function addMemSuccess(mem) {
  return {
    type: action.ADD_MEM,
    mem,
  };
}

export function memsFetchedSuccess(mems) {
  console.log(mems);
  return {
    type: action.FETCH_MEMS_SUCCESS,
    mems,
  };
}

export function memsFetched() {
  return function (dispatch) {
    return memsApi
      .getMems()
      .then((mems) => {
        dispatch(memsFetchedSuccess(mems));
      })
      .catch((error) => {
        throw error;
      });
  };
}

export function updateMem(mem) {
  return function (dispatch) {
    return memsApi
      .updateMem(mem)
      .then((changeMem) => {
        dispatch(updateMemSuccess(changeMem));
      })
      .catch((error) => {
        throw error;
      });
  };
}

export function addMem(mem) {
  return function (dispatch) {
    return memsApi
      .postMem(mem)
      .then((addedMem) => {
        dispatch(addMemSuccess(addedMem));
      })
      .catch((error) => {
        throw error;
      });
  };
}
