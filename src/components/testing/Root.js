import React from "react";
import { Provider } from "react-redux";
import testingStore from "../../store/testingStore";

export default ({ children, initialState = {} }) => {
  return <Provider store={testingStore(initialState)}>{children}</Provider>;
};
