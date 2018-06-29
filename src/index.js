import React from "react";
import { hydrate } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import store from "./store/store";
import { Provider } from "react-redux";
import { renderRoutes } from "react-router-config";
import routes from "./routes";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

const app = (
  <Provider store={store}>
    <BrowserRouter>
      <div>{renderRoutes(routes)}</div>
    </BrowserRouter>
  </Provider>
);

hydrate(app, document.getElementById("root"));
