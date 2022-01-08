import { INPUT_HANDLER } from "../actions";

const INITIAL_STATE = {
  name: ''
}

export default function input(state = INITIAL_STATE, action) {
  switch(action.type) {
    case INPUT_HANDLER: 
      return {
        ...state,
        name: action.name,
      }
    default:
      return state;
  }
}