import axios from "axios";
import { SAVE_COMMENT, FETCH_COMMENTS } from "./actionTypes";

export const saveComment = comment => {
  return {
    type: SAVE_COMMENT,
    payload: comment
  };
};

export const fetchCommentsSuccess = comments => ({
  type: FETCH_COMMENTS,
  payload: comments
});

export const fetchComments = () => {
  return dispatch => {
    axios.get("http://jsonplaceholder.typicode.com/comments").then(response => {
      //console.log(response.data.slice(0, 50));
      dispatch(fetchCommentsSuccess(response.data.slice(0, 50)));
    });
  };
};
