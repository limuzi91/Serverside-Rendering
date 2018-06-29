import { applyMiddleware, createStore, compose, combineReducers } from "redux";
import thunk from "redux-thunk";
import javaList from "./reducers/java";
import jsList from "./reducers/javascript";
import searchTermFilter from "./reducers/searchTermFilter";
import comments from "./reducers/comments";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  javaList,
  jsList,
  searchTermFilter,
  comments
});

const testingStore = initialState => {
  const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(thunk))
  );

  return store;
};

export default testingStore;
