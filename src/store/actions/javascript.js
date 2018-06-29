import { fetchPopularRepos } from "../../api";
import * as actionTypes from "./actionTypes";

const fetchJavascriptStart = () => {
  return {
    type: actionTypes.FETCH_JS_START
  };
};

const fetchJavascriptSuccess = repos => {
  return {
    type: actionTypes.FETCH_JS_SUCCESS,
    payload: repos
  };
};

export const fetchJavascript = () => {
  return dispatch => {
    dispatch(fetchJavascriptStart());
    fetchPopularRepos("javascript").then(repos =>
      dispatch(fetchJavascriptSuccess(repos))
    );
  };
};
