import React from "react";

import { renderRoutes } from "react-router-config";
import Navbar from "./components/NavBar";
// import routes from "./routes";
// import NoMatch from "./components/NoMatch";
// import Java from "./components/Java";
// import Home from "./components/Home";
// import Javascript from "./components/Javascript";

const App = ({ route }) => {
  return (
    <div>
      <Navbar />
      <div style={{ height: 80 }} />
      {renderRoutes(route.routes)}
    </div>
  );
};

export default {
  component: App
};
