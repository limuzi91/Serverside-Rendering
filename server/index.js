import express from "express";
import renderer from "./helpers/renderer";
import serverStore from "../src/store/serverStore";
//import { matchRoutes } from "react-router-config";
import { matchPath } from "react-router-dom";

import routes from "../src/routes";
import cors from "cors";
const compression = require("compression");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();

app.use(cors());

// RESTful API route
app.get("/api/test", (request, response) => {
  response.send("Hello world from nodemedium!");
});

app.use(bodyParser.urlencoded({ extended: false }));

///compress
app.use(compression());

// set static folder
app.use(express.static(path.resolve("build")));
app.get("*", (request, response, next) => {
  if (request.url.startsWith("/api/")) {
    return next();
  }
  //   console.log("path.resolve", path.resolve("build/index.html"));
  //   return response.sendFile(path.resolve("build/index.html"));

  const store = serverStore();

  // const promises = matchRoutes(routes, request.path).map(({ route }) => {
  //   //console.log(route);
  //   //console.log("pathname:", request.url);

  //   if (route.loadLocalData) {
  //     return route.loadLocalData(request.path);
  //   }

  //   if (route.loadData) {
  //     return route.loadData(store);
  //   }

  //   return null;

  //   // return route.loadData ? route.loadData(store) : null;
  // });

  const activeRoute =
    routes[0].routes.find(route => matchPath(request.path, route)) || {};
  const promiseOne = activeRoute.loadLocalData
    ? activeRoute.loadLocalData(request.path)
    : Promise.resolve();

  const promiseTwo = activeRoute.loadData
    ? activeRoute.loadData(store)
    : Promise.resolve();

  Promise.all([promiseOne, promiseTwo]).then(results => {
    //console.log(store.getState().javaList);
    const localState = results[0];
    //const reduxState = results[1];
    let context = { localState: localState }; // context will give us info if the route has changed

    const content = renderer(request, store, context, localState);

    if (context.notFound) {
      response.status(404);
    }

    response.send(content);
  });
});

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`Server is listening on port: ${port}`);
});
