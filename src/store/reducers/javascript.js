import * as actionTypes from "../actions/actionTypes";

const initialState = {
  jsList: null,
  loading: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_JS_START:
      return {
        ...state,
        loading: true
      };

    case actionTypes.FETCH_JS_SUCCESS:
      return {
        ...state,
        loading: false,
        jsList: action.payload
      };

    default:
      return state;
  }
};

export default reducer;
