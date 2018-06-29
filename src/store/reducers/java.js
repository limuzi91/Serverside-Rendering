import * as actionTypes from "../actions/actionTypes";

const initialState = {
  javaList: null,
  loading: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_JAVA_START:
      return {
        ...state,
        loading: true
      };

    case actionTypes.FETCH_JAVA_SUCCESS:
      return {
        ...state,
        loading: false,
        javaList: action.payload
      };

    default:
      return state;
  }
};

export default reducer;
