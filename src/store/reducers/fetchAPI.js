import { ERROR_API, REQUEST_API, RESPONSE_API } from "../actions";

const INITIAL_STATE = {
  isFetching: false,
  data: 'empty',
  error: '',
}

export default function fetchAPI(state = INITIAL_STATE, action) {
  switch (action.type) {
    case REQUEST_API: 
      return {
        ...state,
        isFetching: true,
        error:'',
      }
    case RESPONSE_API: 
      return {
        ...state,
        data: action.payload,
        isFetching: false,
        error:'',
      }
    case ERROR_API: 
      return {
        ...state,
        error: action.error,
        isFetching: false,
      }
    default:
      return state;
    }
  }