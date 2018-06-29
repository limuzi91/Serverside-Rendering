import * as actionTypes from "../actions/actionTypes";

// Filters Reducer

const initialState = {
  searchTerm: ""
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.RESET_FILTERS:
      return initialState;
    //////filter
    case actionTypes.SET_TEXT_FILTER:
      return {
        searchTerm: action.payload
      };

    default:
      return state;
  }
};
