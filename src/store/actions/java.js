import { fetchPopularRepos } from "../../api";
import * as actionTypes from "./actionTypes";

const fetchJavaStart = () => {
  return {
    type: actionTypes.FETCH_JAVA_START
  };
};

export const fetchJavaSuccess = repos => {
  return {
    type: actionTypes.FETCH_JAVA_SUCCESS,
    payload: repos
  };
};

export const fetchJava = () => {
  return dispatch => {
    dispatch(fetchJavaStart());
    fetchPopularRepos("java").then(repos => dispatch(fetchJavaSuccess(repos)));
  };
};

export const serverFetchJava = () => {
  return dispatch => {
    fetchPopularRepos("java").then(repos => dispatch(fetchJavaSuccess(repos)));
  };
};
