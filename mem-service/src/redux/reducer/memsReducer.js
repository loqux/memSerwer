import {
  FETCH_MEMS_SUCCESS,
  UPDATE_MEM,
  ADD_MEM,
} from "../actions/actionsType";

const mems = (state = [], action) => {
  switch (action.type) {
    case FETCH_MEMS_SUCCESS:
      return [...action.payload];
    case UPDATE_MEM:
      return state.map((mem) =>
        mem.id === action.payload.id ? action.payload : mem
      );
    case ADD_MEM:
      return [...state, { ...action.peyload }];
    default:
      return state;
  }
};

export default mems;
