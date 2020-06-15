import {
  FETCH_MEMS_SUCCESS,
  UPDATE_MEM,
  ADD_MEM,
} from "../actions/actionsType";

const INIT_STATE = {
  hots:[],
  regulars:[],
};

const mems = (state = INIT_STATE, action) => {
  switch (action.type) {
    case FETCH_MEMS_SUCCESS:
      return {...state,
        hots: action.payload.filter((mem)=> mem.upvotes + mem.downvotes > 5),
      regulars: action.payload.filter((mem)=> mem.upvotes + mem.downvotes < 6)};
    case UPDATE_MEM:
      return{...state, hots: state.hots.map((mem) =>
      mem.id === action.payload.id ? action.payload : mem
    ).filter((mem)=> mem.upvotes + mem.downvotes > 5 ),
      regulars: state.regulars.map((mem) =>
      mem.id === action.payload.id ? action.payload : mem
    ).filter((mem)=> mem.upvotes + mem.downvotes < 6)};
    case ADD_MEM:
      return{...state, regulars: [...state.regulars, { ...action.peyload }]};
    default:
      return state;
  }
};

export default mems;
