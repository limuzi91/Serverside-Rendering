import { applyMiddleware, createStore, compose, combineReducers } from "redux";
import thunk from "redux-thunk";
import javaList from "./reducers/java";
import jsList from "./reducers/javascript";
import searchTermFilter from "./reducers/searchTermFilter";
import comments from "./reducers/comments";

const serverStore = () => {
  const composeEnhancers = compose;

  const rootReducer = combineReducers({
    javaList,
    jsList,
    searchTermFilter,
    comments
  });

  const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
  );

  return store;
};

export default serverStore;
