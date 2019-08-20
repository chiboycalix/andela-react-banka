import { GET_ERRORS } from '../actions/types';

const initState = {};

export default function (state = initState, action) {
  switch (action.types) {
    case GET_ERRORS:
      return action.payload;
    default:
      return state;
  }
}
