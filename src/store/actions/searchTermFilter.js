import * as actionTypes from "./actionTypes";

export const setSearchTermFilter = (text = "") => ({
  type: actionTypes.SET_TEXT_FILTER,
  payload: text
});

export const restFilters = () => ({
  type: actionTypes.RESET_FILTERS
});
