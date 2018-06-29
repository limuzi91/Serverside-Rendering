import { SAVE_COMMENT, FETCH_COMMENTS } from "../actions/actionTypes";

export default function(state = [], action) {
  switch (action.type) {
    case SAVE_COMMENT:
      return [action.payload, ...state];
    case FETCH_COMMENTS:
      const comments = action.payload.map(comment => comment.name);
      return [...comments, ...state];
    default:
      return state;
  }
}
