import App from "./App";
//import JavaPage from "./pages/JavaPage";
import HomePage from "./pages/HomePage";
import JsPage from "./pages/JsPage";
import SearchPage from "./pages/SearchPage";
//import XssPage from "./pages/XssPage";
import TestingPage from "./pages/TestingPage";
import NotFoundPage from "./pages/NotFoundPage";
import withAsyncRoute from "./HOC/withAsyncRoute";
import { fetchPopularRepos } from "./api";

// const asyncJsPage = withAsyncRoute(() => {
//   return import("./pages/JsPage");
// });

const asyncJavaPage = withAsyncRoute(() => {
  return import("./pages/JavaPage");
});

const asyncXssPage = withAsyncRoute(() => {
  return import("./pages/XssPage");
});

const loadJsData = store => {
  return fetchPopularRepos("javascript").then(repos =>
    store.dispatch({
      type: "FETCH_JS_SUCCESS",
      payload: repos
    })
  );
};

const loadJavaData = store => {
  return fetchPopularRepos("java").then(repos =>
    store.dispatch({
      type: "FETCH_JAVA_SUCCESS",
      payload: repos
    })
  );
};

// const loadSearchData = (path = "") => {
//   return fetchPopularRepos(path.split("/").pop());
// };
// const loadSearchData = store => {
//   return fetchPopularRepos("/").then(repos =>
//     store.dispatch({
//       type: "FETCH_SEARCH_SUCCESS",
//       payload: repos
//     })
//   );
// };

const routes = [
  {
    ...App,
    routes: [
      {
        ...HomePage,
        path: "/",
        exact: true
      },
      {
        component: asyncJavaPage,
        loadData: loadJavaData,
        path: "/java"
      },
      {
        component: JsPage,
        loadData: loadJsData,
        path: "/javascript"
      },
      {
        path: "/search/:id",
        component: SearchPage,
        loadLocalData: (path = "") => {
          return fetchPopularRepos(path.split("/").pop());
        }
      },
      {
        path: "/search",
        component: SearchPage
      },
      {
        path: "/xss",
        component: asyncXssPage
      },
      {
        path: "/testing",
        component: TestingPage
      },
      {
        ...NotFoundPage
      }
    ]
  }
];

export default routes;
