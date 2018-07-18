/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 13);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
const FETCH_JS_START = exports.FETCH_JS_START = "FETCH_JS_START";
const FETCH_JS_SUCCESS = exports.FETCH_JS_SUCCESS = "FETCH_JS_SUCCESS";
const FETCH_JS_FAIL = exports.FETCH_JS_FAIL = "FETCH_JS_FAIL";

const FETCH_JAVA_START = exports.FETCH_JAVA_START = "FETCH_JAVA_START";
const FETCH_JAVA_SUCCESS = exports.FETCH_JAVA_SUCCESS = "FETCH_JAVA_SUCCESS";
const FETCH_JAVA_FAIL = exports.FETCH_JAVA_FAIL = "FETCH_JAVA_FAIL";

const SET_TEXT_FILTER = exports.SET_TEXT_FILTER = "SET_TEXT_FILTER";
const RESET_FILTERS = exports.RESET_FILTERS = "RESET_FILTERS";

const SAVE_COMMENT = exports.SAVE_COMMENT = "SAVE_COMMENT";
const FETCH_COMMENTS = exports.FETCH_COMMENTS = "FETCH_COMMENTS";

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("react-helmet");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _java = __webpack_require__(20);

Object.defineProperty(exports, "fetchJava", {
  enumerable: true,
  get: function () {
    return _java.fetchJava;
  }
});
Object.defineProperty(exports, "fetchJavaSuccess", {
  enumerable: true,
  get: function () {
    return _java.fetchJavaSuccess;
  }
});

var _javascript = __webpack_require__(21);

Object.defineProperty(exports, "fetchJavascript", {
  enumerable: true,
  get: function () {
    return _javascript.fetchJavascript;
  }
});
Object.defineProperty(exports, "fetchJavascriptSuccess", {
  enumerable: true,
  get: function () {
    return _javascript.fetchJavascriptSuccess;
  }
});

var _searchTermFilter = __webpack_require__(22);

Object.defineProperty(exports, "setSearchTermFilter", {
  enumerable: true,
  get: function () {
    return _searchTermFilter.setSearchTermFilter;
  }
});
Object.defineProperty(exports, "restFilters", {
  enumerable: true,
  get: function () {
    return _searchTermFilter.restFilters;
  }
});

var _comments = __webpack_require__(23);

Object.defineProperty(exports, "fetchComments", {
  enumerable: true,
  get: function () {
    return _comments.fetchComments;
  }
});
Object.defineProperty(exports, "saveComment", {
  enumerable: true,
  get: function () {
    return _comments.saveComment;
  }
});

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchPopularRepos = fetchPopularRepos;

var _axios = __webpack_require__(11);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function fetchPopularRepos(language = "all") {
  const encodedURI = encodeURI(`https://api.github.com/search/repositories?q=stars:>1+language:${language}&sort=stars&order=desc&type=Repositories`);

  return _axios2.default.get(encodedURI).then(response => response.data.items).catch(error => {
    console.warn(error);
    return null;
  });
}

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.searchReposFilterWithCache = exports.searchReposFilter = undefined;

var _reselect = __webpack_require__(59);

const searchReposFilter = exports.searchReposFilter = (array, searchTerm = "") => {
  let reposArray = [];
  if (array) {
    reposArray = array;
  }
  return reposArray.filter(item => `${item.name ? item.name : item} ${item.owner ? item.owner.login : " "} `.toUpperCase().indexOf(searchTerm.trim().toUpperCase()) >= 0);
};

const searchReposFilterWithCache = exports.searchReposFilterWithCache = (getList, getSearchTerm) => {
  return (0, _reselect.createSelector)([getList, getSearchTerm], searchReposFilter);
};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = "/Users/muzili/Desktop/workingfolder/myssrdemo/src/components/ListItem.js"; // import React from "react";

// export default ({ name, owner, stargazers_count, html_url }) => {
//   return (
//     <li key={name} style={{ margin: 30 }}>
//       <ul>
//         <li>
//           <a href={html_url} target="_blank">
//             {name}
//           </a>
//         </li>
//         <li>@{owner.login}</li>
//         <li>{stargazers_count} stars</li>
//       </ul>
//     </li>
//   );
// };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class ListItem extends _react.Component {
  shouldComponentUpdate() {
    return false;
  }
  render() {
    var _props = this.props;
    const name = _props.name,
          owner = _props.owner,
          stargazers_count = _props.stargazers_count,
          html_url = _props.html_url;

    return _react2.default.createElement(
      "li",
      { key: name, style: { margin: 30 }, __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      },
      _react2.default.createElement(
        "ul",
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 29
          },
          __self: this
        },
        _react2.default.createElement(
          "li",
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 30
            },
            __self: this
          },
          _react2.default.createElement(
            "a",
            { href: html_url, target: "_blank", __source: {
                fileName: _jsxFileName,
                lineNumber: 31
              },
              __self: this
            },
            name
          )
        ),
        _react2.default.createElement(
          "li",
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 35
            },
            __self: this
          },
          "@",
          owner.login
        ),
        _react2.default.createElement(
          "li",
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 36
            },
            __self: this
          },
          stargazers_count,
          " stars"
        )
      )
    );
  }
}
exports.default = ListItem;

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("react-router-config");

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _App = __webpack_require__(18);

var _App2 = _interopRequireDefault(_App);

var _HomePage = __webpack_require__(24);

var _HomePage2 = _interopRequireDefault(_HomePage);

var _JsPage = __webpack_require__(25);

var _JsPage2 = _interopRequireDefault(_JsPage);

var _SearchPage = __webpack_require__(27);

var _SearchPage2 = _interopRequireDefault(_SearchPage);

var _TestingPage = __webpack_require__(30);

var _TestingPage2 = _interopRequireDefault(_TestingPage);

var _NotFoundPage = __webpack_require__(35);

var _NotFoundPage2 = _interopRequireDefault(_NotFoundPage);

var _withAsyncRoute = __webpack_require__(36);

var _withAsyncRoute2 = _interopRequireDefault(_withAsyncRoute);

var _api = __webpack_require__(6);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// const asyncJsPage = withAsyncRoute(() => {
//   return import("./pages/JsPage");
// });

//import XssPage from "./pages/XssPage";
const asyncJavaPage = (0, _withAsyncRoute2.default)(() => {
  return Promise.resolve().then(() => __webpack_require__(37));
});
//import JavaPage from "./pages/JavaPage";


const asyncXssPage = (0, _withAsyncRoute2.default)(() => {
  return Promise.resolve().then(() => __webpack_require__(38));
});

const loadJsData = store => {
  return (0, _api.fetchPopularRepos)("javascript").then(repos => store.dispatch({
    type: "FETCH_JS_SUCCESS",
    payload: repos
  }));
};

const loadJavaData = store => {
  return (0, _api.fetchPopularRepos)("java").then(repos => store.dispatch({
    type: "FETCH_JAVA_SUCCESS",
    payload: repos
  }));
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

const routes = [Object.assign({}, _App2.default, {
  routes: [Object.assign({}, _HomePage2.default, {
    path: "/",
    exact: true
  }), {
    component: asyncJavaPage,
    loadData: loadJavaData,
    path: "/java"
  }, {
    component: _JsPage2.default,
    loadData: loadJsData,
    path: "/javascript"
  }, {
    path: "/search/:id",
    component: _SearchPage2.default,
    loadLocalData: (path = "") => {
      return (0, _api.fetchPopularRepos)(path.split("/").pop());
    }
  }, {
    path: "/search",
    component: _SearchPage2.default
  }, {
    path: "/xss",
    component: asyncXssPage
  }, {
    path: "/testing",
    component: _TestingPage2.default
  }, Object.assign({}, _NotFoundPage2.default)]
})];

exports.default = routes;

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _express = __webpack_require__(14);

var _express2 = _interopRequireDefault(_express);

var _renderer = __webpack_require__(15);

var _renderer2 = _interopRequireDefault(_renderer);

var _serverStore = __webpack_require__(49);

var _serverStore2 = _interopRequireDefault(_serverStore);

var _reactRouterDom = __webpack_require__(4);

var _routes = __webpack_require__(10);

var _routes2 = _interopRequireDefault(_routes);

var _cors = __webpack_require__(56);

var _cors2 = _interopRequireDefault(_cors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const bodyParser = __webpack_require__(57);
//import { matchRoutes } from "react-router-config";

const path = __webpack_require__(58);

const app = (0, _express2.default)();

app.use((0, _cors2.default)());

// RESTful API route
app.get("/api/test", (request, response) => {
  response.send("Hello world from nodemedium!");
});

app.use(bodyParser.urlencoded({ extended: false }));
// set static folder
app.use(_express2.default.static(path.resolve("build")));
app.get("*", (request, response, next) => {
  if (request.url.startsWith("/api/")) {
    return next();
  }
  //   console.log("path.resolve", path.resolve("build/index.html"));
  //   return response.sendFile(path.resolve("build/index.html"));

  const store = (0, _serverStore2.default)();

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

  const activeRoute = _routes2.default[0].routes.find(route => (0, _reactRouterDom.matchPath)(request.path, route)) || {};
  const promiseOne = activeRoute.loadLocalData ? activeRoute.loadLocalData(request.path) : Promise.resolve();

  const promiseTwo = activeRoute.loadData ? activeRoute.loadData(store) : Promise.resolve();

  Promise.all([promiseOne, promiseTwo]).then(results => {
    //console.log(store.getState().javaList);
    const localState = results[0];
    //const reduxState = results[1];
    let context = { localState: localState }; // context will give us info if the route has changed

    const content = (0, _renderer2.default)(request, store, context, localState);

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

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = "/Users/muzili/Desktop/workingfolder/myssrdemo/server/helpers/renderer.js";

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(16);

var _reactRouterDom = __webpack_require__(4);

var _reactRedux = __webpack_require__(3);

var _serializeJavascript = __webpack_require__(17);

var _serializeJavascript2 = _interopRequireDefault(_serializeJavascript);

var _reactRouterConfig = __webpack_require__(9);

var _routes = __webpack_require__(10);

var _routes2 = _interopRequireDefault(_routes);

var _assetManifest = __webpack_require__(48);

var _assetManifest2 = _interopRequireDefault(_assetManifest);

var _reactHelmet = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (request, store, context, localState) => {
  //console.log(data["1"]);
  const markup = (0, _server.renderToString)(_react2.default.createElement(
    _reactRedux.Provider,
    { store: store, __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: undefined
    },
    _react2.default.createElement(
      _reactRouterDom.StaticRouter,
      { location: request.url, context: context, __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: undefined
      },
      _react2.default.createElement(
        "div",
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 16
          },
          __self: undefined
        },
        (0, _reactRouterConfig.renderRoutes)(_routes2.default)
      )
    )
  ));

  const helmet = _reactHelmet.Helmet.renderStatic();

  const pageHtml = `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
      <meta name="theme-color" content="#000000">
      <meta name="keywords" content="React,Redux,SSR,React-router,Socket.io" >
      <meta name="author" content="Michael Li" >
      ${helmet.title.toString()}
      ${helmet.meta.toString()}
      <link rel="stylesheet" href="/${_assetManifest2.default["main.css"]}">
      
    </head>
    <body>
      <div id="root">${markup}</div>
      <script>
          window.__INITIAL_STATE__ = ${(0, _serializeJavascript2.default)(store.getState())}
          window.__INITIAL_LOCAL_STATE__ = ${(0, _serializeJavascript2.default)(localState)}
        </script>
      <script src="/${_assetManifest2.default["main.js"]}" ></script>
    </body>
  </html>
  `;
  // Dont use window.__INITIAL_STATE__ = ${JSON.stringify(store.getState())} !!!
  // Otherwise you maybe attacked by Xss like this :
  //   {
  //   user: {
  //     username: "NodeSecurity",
  //     bio: "as</script><script>alert('You have an XSS vulnerability!')</script>"
  //   }
  // }

  return pageHtml;
};

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("serialize-javascript");

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = "/Users/muzili/Desktop/workingfolder/myssrdemo/src/App.js";

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterConfig = __webpack_require__(9);

var _NavBar = __webpack_require__(19);

var _NavBar2 = _interopRequireDefault(_NavBar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import routes from "./routes";
// import NoMatch from "./components/NoMatch";
// import Java from "./components/Java";
// import Home from "./components/Home";
// import Javascript from "./components/Javascript";

const App = ({ route }) => {
  return _react2.default.createElement(
    "div",
    {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: undefined
    },
    _react2.default.createElement(_NavBar2.default, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: undefined
    }),
    _react2.default.createElement("div", { style: { height: 80 }, __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: undefined
    }),
    (0, _reactRouterConfig.renderRoutes)(route.routes)
  );
};

exports.default = {
  component: App
};

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = "/Users/muzili/Desktop/workingfolder/myssrdemo/src/components/NavBar.js";

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(4);

var _reactRedux = __webpack_require__(3);

var _index = __webpack_require__(5);

var actions = _interopRequireWildcard(_index);

var _classnames = __webpack_require__(12);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const mapStateToProps = state => Object.assign({}, state.searchTermFilter);

const mapDispatchToProps = dispatch => ({
  onSetSearchTermFilter: text => dispatch(actions.setSearchTermFilter(text)),
  onRestFilters: () => dispatch(actions.restFilters())
});

class NavBar extends _react.Component {
  constructor(...args) {
    var _temp;

    return _temp = super(...args), this.state = {
      open: false
    }, this.toggleNavbar = () => {
      this.setState(prevState => ({
        open: !prevState.open
      }));
    }, _temp;
  }

  render() {
    var _props = this.props;
    const searchTerm = _props.searchTerm,
          onSetSearchTermFilter = _props.onSetSearchTermFilter,
          onRestFilters = _props.onRestFilters;
    //console.log(props.match);

    return _react2.default.createElement(
      "div",
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      },
      _react2.default.createElement(
        "nav",
        { className: "navbar navbar-expand-sm bg-primary navbar-dark fixed-top ", __source: {
            fileName: _jsxFileName,
            lineNumber: 30
          },
          __self: this
        },
        _react2.default.createElement(
          _reactRouterDom.NavLink,
          {
            className: "navbar-brand",
            style: { color: "rgba(255,255,255,.5)" },
            activeStyle: { color: "white" },
            exact: true,
            to: "/",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 31
            },
            __self: this
          },
          "Home"
        ),
        _react2.default.createElement(
          "button",
          {
            onClick: this.toggleNavbar,
            type: "button",
            style: {
              minWidth: 44,
              fontSize: 20,
              padding: "3px 5px"
            },
            className: "navbar-toggler ",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 40
            },
            __self: this
          },
          _react2.default.createElement("span", { className: "navbar-toggler-icon", __source: {
              fileName: _jsxFileName,
              lineNumber: 50
            },
            __self: this
          })
        ),
        _react2.default.createElement(
          "div",
          {
            className: (0, _classnames2.default)("navbar-collapse", {
              "collapse ": !this.state.open
            }),
            __source: {
              fileName: _jsxFileName,
              lineNumber: 52
            },
            __self: this
          },
          _react2.default.createElement(
            "ul",
            { className: "navbar-nav mr-auto", __source: {
                fileName: _jsxFileName,
                lineNumber: 57
              },
              __self: this
            },
            _react2.default.createElement(
              "li",
              { className: "nav-item", __source: {
                  fileName: _jsxFileName,
                  lineNumber: 58
                },
                __self: this
              },
              _react2.default.createElement(
                _reactRouterDom.NavLink,
                {
                  className: "nav-link",
                  activeStyle: { color: "white" },
                  to: "/javascript",
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 59
                  },
                  __self: this
                },
                "Javascript"
              )
            ),
            _react2.default.createElement(
              "li",
              { className: "nav-item", __source: {
                  fileName: _jsxFileName,
                  lineNumber: 67
                },
                __self: this
              },
              _react2.default.createElement(
                _reactRouterDom.NavLink,
                {
                  className: "nav-link",
                  activeStyle: { color: "white" },
                  to: "/java",
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 68
                  },
                  __self: this
                },
                "Java",
                _react2.default.createElement(
                  "small",
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 73
                    },
                    __self: this
                  },
                  "(AsyncRoute/CodeSplit)"
                )
              )
            ),
            _react2.default.createElement(
              "li",
              { className: "nav-item", __source: {
                  fileName: _jsxFileName,
                  lineNumber: 76
                },
                __self: this
              },
              _react2.default.createElement(
                _reactRouterDom.NavLink,
                {
                  className: "nav-link",
                  activeStyle: { color: "white" },
                  to: "/xss",
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 77
                  },
                  __self: this
                },
                "XssAttack",
                _react2.default.createElement(
                  "small",
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 82
                    },
                    __self: this
                  },
                  "(AsyncRoute/CodeSplit)"
                )
              )
            ),
            _react2.default.createElement(
              "li",
              { className: "nav-item", __source: {
                  fileName: _jsxFileName,
                  lineNumber: 85
                },
                __self: this
              },
              _react2.default.createElement(
                _reactRouterDom.NavLink,
                {
                  className: "nav-link",
                  activeStyle: { color: "white" },
                  to: "/testing",
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 86
                  },
                  __self: this
                },
                "Testing"
              )
            ),
            _react2.default.createElement(
              "li",
              { className: "nav-item", __source: {
                  fileName: _jsxFileName,
                  lineNumber: 94
                },
                __self: this
              },
              _react2.default.createElement(
                _reactRouterDom.NavLink,
                {
                  className: "nav-link",
                  activeStyle: { color: "white" },
                  to: "/asdfgh",
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 95
                  },
                  __self: this
                },
                "NotFound"
              )
            )
          ),
          _react2.default.createElement(
            "form",
            {
              className: "form-inline my-2 my-lg-0  mr-sm-5",
              onSubmit: event => {
                event.preventDefault();
              },
              __source: {
                fileName: _jsxFileName,
                lineNumber: 104
              },
              __self: this
            },
            _react2.default.createElement(
              "div",
              { style: { minWidth: 250, position: "relative" }, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 110
                },
                __self: this
              },
              _react2.default.createElement("input", {
                className: "form-control",
                style: { width: "100%" },
                type: "text",
                value: searchTerm,
                onChange: event => {
                  onSetSearchTermFilter(event.target.value);
                },
                placeholder: "Enter keyword to filter result",
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 111
                },
                __self: this
              }),
              searchTerm ? _react2.default.createElement(
                "span",
                {
                  onClick: onRestFilters,
                  className: "text-muted ",
                  style: {
                    position: "absolute",
                    top: 5,
                    right: 10,
                    cursor: "pointer"
                  },
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 122
                  },
                  __self: this
                },
                "x"
              ) : null
            )
          )
        )
      )
    );
  }
}

exports.default = (0, _reactRouterDom.withRouter)((0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(NavBar));

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.serverFetchJava = exports.fetchJava = exports.fetchJavaSuccess = undefined;

var _api = __webpack_require__(6);

var _actionTypes = __webpack_require__(1);

var actionTypes = _interopRequireWildcard(_actionTypes);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

const fetchJavaStart = () => {
  return {
    type: actionTypes.FETCH_JAVA_START
  };
};

const fetchJavaSuccess = exports.fetchJavaSuccess = repos => {
  return {
    type: actionTypes.FETCH_JAVA_SUCCESS,
    payload: repos
  };
};

const fetchJava = exports.fetchJava = () => {
  return dispatch => {
    dispatch(fetchJavaStart());
    (0, _api.fetchPopularRepos)("java").then(repos => dispatch(fetchJavaSuccess(repos)));
  };
};

const serverFetchJava = exports.serverFetchJava = () => {
  return dispatch => {
    (0, _api.fetchPopularRepos)("java").then(repos => dispatch(fetchJavaSuccess(repos)));
  };
};

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchJavascript = undefined;

var _api = __webpack_require__(6);

var _actionTypes = __webpack_require__(1);

var actionTypes = _interopRequireWildcard(_actionTypes);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

const fetchJavascriptStart = () => {
  return {
    type: actionTypes.FETCH_JS_START
  };
};

const fetchJavascriptSuccess = repos => {
  return {
    type: actionTypes.FETCH_JS_SUCCESS,
    payload: repos
  };
};

const fetchJavascript = exports.fetchJavascript = () => {
  return dispatch => {
    dispatch(fetchJavascriptStart());
    (0, _api.fetchPopularRepos)("javascript").then(repos => dispatch(fetchJavascriptSuccess(repos)));
  };
};

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.restFilters = exports.setSearchTermFilter = undefined;

var _actionTypes = __webpack_require__(1);

var actionTypes = _interopRequireWildcard(_actionTypes);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

const setSearchTermFilter = exports.setSearchTermFilter = (text = "") => ({
  type: actionTypes.SET_TEXT_FILTER,
  payload: text
});

const restFilters = exports.restFilters = () => ({
  type: actionTypes.RESET_FILTERS
});

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchComments = exports.fetchCommentsSuccess = exports.saveComment = undefined;

var _axios = __webpack_require__(11);

var _axios2 = _interopRequireDefault(_axios);

var _actionTypes = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const saveComment = exports.saveComment = comment => {
  return {
    type: _actionTypes.SAVE_COMMENT,
    payload: comment
  };
};

const fetchCommentsSuccess = exports.fetchCommentsSuccess = comments => ({
  type: _actionTypes.FETCH_COMMENTS,
  payload: comments
});

const fetchComments = exports.fetchComments = () => {
  return dispatch => {
    _axios2.default.get("https://jsonplaceholder.typicode.com/comments").then(response => {
      //console.log(response.data.slice(0, 50));
      dispatch(fetchCommentsSuccess(response.data.slice(0, 50)));
    });
  };
};

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = "/Users/muzili/Desktop/workingfolder/myssrdemo/src/pages/HomePage.js";

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactHelmet = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class HomePage extends _react.Component {
  constructor(...args) {
    var _temp;

    return _temp = super(...args), this.state = {
      language: ""
    }, this.updateInput = event => {
      this.setState({ language: event.target.value });
    }, this.goToSearch = event => {
      event.preventDefault();

      this.props.history.push(`/search/${encodeURIComponent(this.state.language.trim())}`);
    }, this.head = () => {
      return _react2.default.createElement(
        _reactHelmet.Helmet,
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 21
          },
          __self: this
        },
        _react2.default.createElement(
          "title",
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 22
            },
            __self: this
          },
          "SSR Demo App"
        ),
        _react2.default.createElement("meta", {
          property: "og:title",
          content: "A demo app of Serverside Rendering and other topics",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 23
          },
          __self: this
        }),
        _react2.default.createElement("meta", {
          name: "description",
          content: `A Demo project that showcases Serverside Rendering + ServerSide Redux + CodeSplitting / LazyLoading + SEO + Security + Testing`,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 27
          },
          __self: this
        })
      );
    }, _temp;
  }

  render() {
    return _react2.default.createElement(
      "div",
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      },
      this.head(),
      _react2.default.createElement(
        "div",
        {
          className: "container text-center d-flex align-items-center justify-content-center",
          style: { minHeight: "100vh", marginTop: "-100px" },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 39
          },
          __self: this
        },
        _react2.default.createElement(
          "div",
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 43
            },
            __self: this
          },
          _react2.default.createElement(
            "h4",
            { className: "font-weight-light", __source: {
                fileName: _jsxFileName,
                lineNumber: 44
              },
              __self: this
            },
            "A Demo project that showcases"
          ),
          _react2.default.createElement(
            "h4",
            { className: "display-4 mb-5", __source: {
                fileName: _jsxFileName,
                lineNumber: 45
              },
              __self: this
            },
            _react2.default.createElement(
              "small",
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 46
                },
                __self: this
              },
              "Serverside Rendering + ServerSide Redux + CodeSplitting / LazyLoading + SEO + Security + Testing"
            )
          ),
          _react2.default.createElement(
            "div",
            { className: "card bg-light text-dark col-md-8 mx-auto", __source: {
                fileName: _jsxFileName,
                lineNumber: 51
              },
              __self: this
            },
            _react2.default.createElement(
              "div",
              { className: "card-body", __source: {
                  fileName: _jsxFileName,
                  lineNumber: 52
                },
                __self: this
              },
              _react2.default.createElement(
                "h4",
                { className: "font-weight-light mb-3", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 53
                  },
                  __self: this
                },
                "Click NavTab or enter a language to search"
              ),
              _react2.default.createElement(
                "form",
                { onSubmit: this.goToSearch, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 56
                  },
                  __self: this
                },
                _react2.default.createElement(
                  "div",
                  {
                    className: "landing__search",
                    style: { position: "relative" },
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 57
                    },
                    __self: this
                  },
                  _react2.default.createElement(
                    "div",
                    { className: "input-group mb-3", __source: {
                        fileName: _jsxFileName,
                        lineNumber: 61
                      },
                      __self: this
                    },
                    _react2.default.createElement("input", {
                      type: "text",
                      className: "form-control",
                      value: this.state.language,
                      onChange: this.updateInput,
                      placeholder: "Search popular repos in github of any language",
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 62
                      },
                      __self: this
                    }),
                    _react2.default.createElement(
                      "div",
                      { className: "input-group-append", __source: {
                          fileName: _jsxFileName,
                          lineNumber: 69
                        },
                        __self: this
                      },
                      _react2.default.createElement(
                        "button",
                        { className: "btn btn-primary", type: "submit", __source: {
                            fileName: _jsxFileName,
                            lineNumber: 70
                          },
                          __self: this
                        },
                        "Go"
                      )
                    )
                  ),
                  this.state.language ? _react2.default.createElement(
                    "span",
                    {
                      onClick: () => {
                        this.setState({ language: "" });
                      },
                      className: "text-muted",
                      style: {
                        position: "absolute",
                        top: 5,
                        right: 60,
                        cursor: "pointer",
                        zIndex: 4
                      },
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 76
                      },
                      __self: this
                    },
                    "x"
                  ) : null
                )
              )
            )
          ),
          _react2.default.createElement(
            "p",
            { className: "text-center mt-5", __source: {
                fileName: _jsxFileName,
                lineNumber: 97
              },
              __self: this
            },
            _react2.default.createElement(
              "a",
              {
                href: "https://github.com/limuzi91/Serverside-Rendering",
                target: "_blank",
                className: "btn btn-primary",
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 98
                },
                __self: this
              },
              "View Source Code"
            )
          )
        )
      ),
      _react2.default.createElement("div", { style: { height: 200 }, __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        },
        __self: this
      })
    );
  }
}

exports.default = {
  component: HomePage
};

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = "/Users/muzili/Desktop/workingfolder/myssrdemo/src/pages/JsPage.js";

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(3);

var _actions = __webpack_require__(5);

var actions = _interopRequireWildcard(_actions);

var _reactHelmet = __webpack_require__(2);

var _immutable = __webpack_require__(26);

var _ListItem = __webpack_require__(8);

var _ListItem2 = _interopRequireDefault(_ListItem);

var _searchReposFilter = __webpack_require__(7);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const mapStateToProps = state => Object.assign({
  jsListAfterFilter: (0, _searchReposFilter.searchReposFilterWithCache)(state => state.jsList.jsList, state => state.searchTermFilter.searchTerm)(state)
}, state.jsList);

const mapDispatchToProps = dispatch => ({
  onFetchJavascript: () => dispatch(actions.fetchJavascript())
});

class JsPage extends _react.Component {
  constructor(props) {
    super(props);

    // let repos;
    // if (__isBrowser__) {
    //   repos = window.__INITIAL_DATA__;
    //   delete window.__INITIAL_DATA__;
    // } else {
    //   repos = props.staticContext.data;
    // }

    // this.state = {
    //   repos: null,
    //   loading: false
    // };

    // this.fetchRepos = this.fetchRepos.bind(this);

    this.head = () => {
      return _react2.default.createElement(
        _reactHelmet.Helmet,
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 78
          },
          __self: this
        },
        _react2.default.createElement(
          "title",
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 79
            },
            __self: this
          },
          `${this.props.jsList.length} Javascript repos Loaded`
        ),
        _react2.default.createElement("meta", {
          property: "og:title",
          content: "Popular Javascript repos on github",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 80
          },
          __self: this
        })
      );
    };
  }

  //   fetchRepos() {
  //     this.setState({
  //       loading: true
  //     });
  //     fetchPopularRepos("java").then(repos =>
  //       this.setState(() => ({
  //         repos,
  //         loading: false
  //       }))
  //     );
  //   }

  componentDidMount() {
    if (!this.props.jsList) {
      this.props.onFetchJavascript();
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    const $$thisProps = (0, _immutable.fromJS)(this.props || {});
    const $$nextProps = (0, _immutable.fromJS)(nextProps || {});
    const $$thisState = (0, _immutable.fromJS)(this.state || {});
    const $$nextState = (0, _immutable.fromJS)(nextState || {});
    // console.log("thisProps", this.props || {});
    // console.log("nextProps", nextProps || {});

    // console.log(!is($$thisProps, $$nextProps));

    return !(0, _immutable.is)($$thisProps, $$nextProps) || !(0, _immutable.is)($$thisState, $$nextState);
  }
  componentDidUpdate() {
    console.log("updated!");
  }

  render() {
    const loading = this.props.loading;

    const repos = this.props.jsListAfterFilter;
    if (loading === true || !repos) {
      return _react2.default.createElement(
        "h3",
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 92
          },
          __self: this
        },
        "Loading..."
      );
    }
    if (repos.length === 0) {
      return _react2.default.createElement(
        "h3",
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 95
          },
          __self: this
        },
        "No repos there yet..."
      );
    }
    return _react2.default.createElement(
      "div",
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        },
        __self: this
      },
      this.head(),
      _react2.default.createElement(
        "div",
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 100
          },
          __self: this
        },
        _react2.default.createElement("img", {
          style: { maxWidth: 300 },
          src: "/assets/images/learn-javascript.png",
          alt: "",
          className: "mx-auto d-block img-thumbnail img-fluid",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 101
          },
          __self: this
        }),
        _react2.default.createElement(
          "h3",
          { style: { textAlign: "center", marginTop: 30 }, __source: {
              fileName: _jsxFileName,
              lineNumber: 107
            },
            __self: this
          },
          "Popular Javascript repos on github"
        ),
        _react2.default.createElement(
          "ul",
          { style: { display: "flex", flexWrap: "wrap" }, __source: {
              fileName: _jsxFileName,
              lineNumber: 110
            },
            __self: this
          },
          repos.map(({ name, owner, stargazers_count, html_url }) => _react2.default.createElement(_ListItem2.default, {
            key: html_url,
            name: name,
            owner: owner,
            stargazers_count: stargazers_count,
            html_url: html_url,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 112
            },
            __self: this
          }))
        )
      )
    );
  }
}

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(JsPage);

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = require("immutable");

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = "/Users/muzili/Desktop/workingfolder/myssrdemo/src/pages/SearchPage.js";

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _withLoadLocalData = __webpack_require__(28);

var _withLoadLocalData2 = _interopRequireDefault(_withLoadLocalData);

var _searchReposFilter = __webpack_require__(7);

var _reactRedux = __webpack_require__(3);

var _ListItem = __webpack_require__(8);

var _ListItem2 = _interopRequireDefault(_ListItem);

var _isBrowser = __webpack_require__(29);

var _isBrowser2 = _interopRequireDefault(_isBrowser);

var _reactHelmet = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const mapStateToProps = state => Object.assign({}, state.searchTermFilter);

class SearchPage extends _react.Component {
  constructor(props) {
    super(props);

    this.head = () => {
      return _react2.default.createElement(
        _reactHelmet.Helmet,
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 48
          },
          __self: this
        },
        _react2.default.createElement(
          "title",
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 49
            },
            __self: this
          },
          `${this.state.repos.length} ${this.props.match.params.id} repos Loaded`
        ),
        _react2.default.createElement("meta", {
          property: "og:title",
          content: `Popular ${this.props.match.params.id} repos on github`,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 52
          },
          __self: this
        })
      );
    };

    let repos;
    if (_isBrowser2.default) {
      repos = window.__INITIAL_LOCAL_STATE__;
      delete window.__INITIAL_LOCAL_STATE__;
    } else {
      repos = props.staticContext.localState;
    }

    this.state = {
      loading: false,
      repos: repos
    };
  }

  componentDidMount() {
    if (!this.state.repos) {
      this.setState({
        loading: true
      });
      //console.log(this.props.match.params.id);
      this.props.loadLocalData(this.props.match.params.id).then(repos => this.setState(() => ({
        repos,
        loading: false
      })));
    }
  }

  render() {
    const loading = this.state.loading;

    const repos = (0, _searchReposFilter.searchReposFilter)(this.state.repos, this.props.searchTerm);

    if (loading === true || !repos) {
      return _react2.default.createElement(
        "h3",
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 65
          },
          __self: this
        },
        "Loading..."
      );
    }
    if (repos.length === 0) {
      return _react2.default.createElement(
        "h3",
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 68
          },
          __self: this
        },
        "No repos there yet..."
      );
    }
    return _react2.default.createElement(
      "div",
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      },
      this.head(),
      _react2.default.createElement(
        "div",
        { className: "container", __source: {
            fileName: _jsxFileName,
            lineNumber: 73
          },
          __self: this
        },
        _react2.default.createElement(
          "h3",
          { style: { textAlign: "center", marginTop: 30 }, __source: {
              fileName: _jsxFileName,
              lineNumber: 74
            },
            __self: this
          },
          "Popular ",
          this.props.match.params.id,
          " repos on github"
        ),
        _react2.default.createElement(
          "ul",
          { style: { display: "flex", flexWrap: "wrap" }, __source: {
              fileName: _jsxFileName,
              lineNumber: 78
            },
            __self: this
          },
          repos.map(({ name, owner, stargazers_count, html_url }) => _react2.default.createElement(_ListItem2.default, {
            key: html_url,
            name: name,
            owner: owner,
            stargazers_count: stargazers_count,
            html_url: html_url,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 80
            },
            __self: this
          }))
        )
      )
    );
  }
}
exports.default = (0, _reactRedux.connect)(mapStateToProps)((0, _withLoadLocalData2.default)(SearchPage));

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = "/Users/muzili/Desktop/workingfolder/myssrdemo/src/HOC/withLoadLocalData.js";

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _api = __webpack_require__(6);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const withLoadLocalData = WrappedComponent => {
  return class withLoadSearchData extends _react.Component {
    constructor(...args) {
      var _temp;

      return _temp = super(...args), this.loadLocalData = id => {
        return (0, _api.fetchPopularRepos)(id);
      }, _temp;
    }

    render() {
      return _react2.default.createElement(WrappedComponent, Object.assign({}, this.props, { loadLocalData: this.loadLocalData, __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        },
        __self: this
      }));
    }
  };
};

exports.default = withLoadLocalData;

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = require("is-browser");

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = "/Users/muzili/Desktop/workingfolder/myssrdemo/src/pages/TestingPage.js";

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _App = __webpack_require__(31);

var _App2 = _interopRequireDefault(_App);

var _Intro = __webpack_require__(34);

var _Intro2 = _interopRequireDefault(_Intro);

var _reactHelmet = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class TestingPage extends _react.Component {
  constructor(...args) {
    var _temp;

    return _temp = super(...args), this.head = () => {
      return _react2.default.createElement(
        _reactHelmet.Helmet,
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 9
          },
          __self: this
        },
        _react2.default.createElement(
          "title",
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 10
            },
            __self: this
          },
          "React Testing"
        ),
        _react2.default.createElement("meta", {
          property: "og:title",
          content: "React Testing Design and Source Code for Demo Test Case",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 11
          },
          __self: this
        }),
        _react2.default.createElement("meta", {
          name: "description",
          content: `React Testing Design and Source Code for Demo Test Case`,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 15
          },
          __self: this
        })
      );
    }, _temp;
  }

  render() {
    return _react2.default.createElement(
      "div",
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      },
      this.head(),
      _react2.default.createElement(
        "div",
        { className: "container", __source: {
            fileName: _jsxFileName,
            lineNumber: 26
          },
          __self: this
        },
        _react2.default.createElement(_Intro2.default, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 27
          },
          __self: this
        }),
        _react2.default.createElement(_App2.default, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 28
          },
          __self: this
        })
      )
    );
  }
}
exports.default = TestingPage;

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = "/Users/muzili/Desktop/workingfolder/myssrdemo/src/components/testing/App.js";

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _CommentBox = __webpack_require__(32);

var _CommentBox2 = _interopRequireDefault(_CommentBox);

var _CommentList = __webpack_require__(33);

var _CommentList2 = _interopRequireDefault(_CommentList);

var _reactRouterDom = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = () => {
  return _react2.default.createElement(
    "div",
    {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: undefined
    },
    _react2.default.createElement(
      "h2",
      { style: { margin: "40px 0" }, __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        },
        __self: undefined
      },
      "2. Testing Demo"
    ),
    _react2.default.createElement(
      "p",
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        },
        __self: undefined
      },
      _react2.default.createElement(
        "a",
        {
          href: "https://github.com/limuzi91/Serverside-Rendering",
          target: "_blank",
          className: "btn btn-primary",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 11
          },
          __self: undefined
        },
        "View Source Code"
      )
    ),
    _react2.default.createElement(_CommentBox2.default, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: undefined
    }),
    _react2.default.createElement(_CommentList2.default, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: undefined
    }),
    _react2.default.createElement("div", { style: { height: 100 }, __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: undefined
    })
  );
};

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = "/Users/muzili/Desktop/workingfolder/myssrdemo/src/components/testing/CommentBox.js";

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(3);

var _actions = __webpack_require__(5);

var actions = _interopRequireWildcard(_actions);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const mapDispatchToProps = dispatch => ({
  onSaveComment: comment => dispatch(actions.saveComment(comment)),
  onFetchComments: () => dispatch(actions.fetchComments())
});

class CommentBox extends _react.Component {
  constructor(...args) {
    var _temp;

    return _temp = super(...args), this.state = { comment: "" }, this.handleChange = event => {
      this.setState({ comment: event.target.value });
    }, this.handleSubmit = event => {
      event.preventDefault();

      if (this.state.comment.trim()) {
        this.props.onSaveComment(this.state.comment);
        this.setState({ comment: "" });
      }
    }, _temp;
  }

  render() {
    return _react2.default.createElement(
      "div",
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      },
      _react2.default.createElement(
        "form",
        { onSubmit: this.handleSubmit, __source: {
            fileName: _jsxFileName,
            lineNumber: 28
          },
          __self: this
        },
        _react2.default.createElement(
          "div",
          { className: "form-group", __source: {
              fileName: _jsxFileName,
              lineNumber: 29
            },
            __self: this
          },
          _react2.default.createElement(
            "label",
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 30
              },
              __self: this
            },
            "Add Comment:"
          ),
          _react2.default.createElement("textarea", {
            className: "form-control",
            rows: "5",
            onChange: this.handleChange,
            value: this.state.comment,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 31
            },
            __self: this
          })
        ),
        _react2.default.createElement(
          "button",
          { type: "submit", className: "btn btn-primary mr-2", __source: {
              fileName: _jsxFileName,
              lineNumber: 38
            },
            __self: this
          },
          "Submit Comment"
        ),
        _react2.default.createElement(
          "button",
          {
            type: "button",
            className: "fetch-comments btn btn-info",
            onClick: this.props.onFetchComments,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 42
            },
            __self: this
          },
          "Fetch Comments"
        )
      )
    );
  }
}

exports.default = (0, _reactRedux.connect)(null, mapDispatchToProps)(CommentBox);

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = "/Users/muzili/Desktop/workingfolder/myssrdemo/src/components/testing/CommentList.js";

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(3);

var _searchReposFilter = __webpack_require__(7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const mapStateToProps = state => ({
  comments: (0, _searchReposFilter.searchReposFilter)(state.comments, state.searchTermFilter.searchTerm)
});

class CommentList extends _react.Component {
  render() {
    let comments = this.props.comments;
    if (!comments) {
      return null;
    }
    if (comments.length === 0) {
      return null;
    }
    return comments.map((comment, index) => {
      return _react2.default.createElement(
        "li",
        { key: index, __source: {
            fileName: _jsxFileName,
            lineNumber: 19
          },
          __self: this
        },
        comment
      );
    });
  }
}

exports.default = (0, _reactRedux.connect)(mapStateToProps)(CommentList);

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = "/Users/muzili/Desktop/workingfolder/myssrdemo/src/components/testing/Intro.js";

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Intro extends _react.Component {
  render() {
    return _react2.default.createElement(
      "div",
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 6
        },
        __self: this
      },
      _react2.default.createElement(
        "h2",
        { className: "mt-5", __source: {
            fileName: _jsxFileName,
            lineNumber: 7
          },
          __self: this
        },
        "1. Testing Design"
      ),
      _react2.default.createElement("img", {
        style: { margin: "40px 0" },
        src: "/assets/images/testing.jpg",
        alt: "",
        className: "mx-auto d-block img-thumbnail img-fluid",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        },
        __self: this
      }),
      _react2.default.createElement("img", {
        style: { margin: "40px 0" },
        src: "/assets/images/testingtwo.jpg",
        alt: "",
        className: "mx-auto d-block img-thumbnail img-fluid",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      })
    );
  }
}

exports.default = Intro;

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = "/Users/muzili/Desktop/workingfolder/myssrdemo/src/pages/NotFoundPage.js";

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactHelmet = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const NotFoundPage = ({ staticContext = {} }) => {
  staticContext.notFound = true;

  const head = _react2.default.createElement(
    _reactHelmet.Helmet,
    {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: undefined
    },
    _react2.default.createElement(
      "title",
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        },
        __self: undefined
      },
      "404 Not Found"
    ),
    _react2.default.createElement("meta", { name: "description", content: `Resource Not Found`, __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: undefined
    })
  );
  return _react2.default.createElement(
    "div",
    {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: undefined
    },
    head,
    _react2.default.createElement(
      "div",
      { className: "container text-center", __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: undefined
      },
      _react2.default.createElement(
        "h1",
        { className: "mt-5", __source: {
            fileName: _jsxFileName,
            lineNumber: 18
          },
          __self: undefined
        },
        `Ooops :( `
      ),
      _react2.default.createElement(
        "p",
        { className: "", __source: {
            fileName: _jsxFileName,
            lineNumber: 19
          },
          __self: undefined
        },
        `route not found (404)...`
      )
    )
  );
};

exports.default = {
  component: NotFoundPage
};

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = "/Users/muzili/Desktop/workingfolder/myssrdemo/src/HOC/withAsyncRoute.js";

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// importComponent expected to be a function that returns a promise

const withAsyncRoute = importComponent => {
  return class extends _react.Component {
    constructor(...args) {
      var _temp;

      return _temp = super(...args), this.state = {
        component: null
      }, _temp;
    }

    componentDidMount() {
      importComponent().then(cmp => {
        this.setState({ component: cmp.default });
      });
    }

    render() {
      const C = this.state.component;

      return C ? _react2.default.createElement(C, Object.assign({}, this.props, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      })) : null;
    }
  };
};

exports.default = withAsyncRoute;

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = "/Users/muzili/Desktop/workingfolder/myssrdemo/src/pages/JavaPage.js";

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(3);

var _actions = __webpack_require__(5);

var actions = _interopRequireWildcard(_actions);

var _reactHelmet = __webpack_require__(2);

var _ListItem = __webpack_require__(8);

var _ListItem2 = _interopRequireDefault(_ListItem);

var _searchReposFilter = __webpack_require__(7);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const mapStateToProps = state => Object.assign({
  // javaListAfterFilter: searchReposFilter(
  //   state.javaList.javaList,
  //   state.searchTermFilter.searchTerm
  // )

  javaListAfterFilter: (0, _searchReposFilter.searchReposFilterWithCache)(state => state.javaList.javaList, state => state.searchTermFilter.searchTerm)(state)

}, state.javaList);

const mapDispatchToProps = dispatch => ({
  onFetchJava: () => dispatch(actions.fetchJava())
});

class JavaPage extends _react.Component {
  constructor(props) {
    super(props);

    // let repos;
    // if (__isBrowser__) {
    //   repos = window.__INITIAL_DATA__;
    //   delete window.__INITIAL_DATA__;
    // } else {
    //   repos = props.staticContext.data;
    // }

    // this.state = {
    //   repos: null,
    //   loading: false
    // };

    // this.fetchRepos = this.fetchRepos.bind(this);

    this.head = () => {
      return _react2.default.createElement(
        _reactHelmet.Helmet,
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 68
          },
          __self: this
        },
        _react2.default.createElement(
          "title",
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 69
            },
            __self: this
          },
          `${this.props.javaList.length} Java repos Loaded`
        ),
        _react2.default.createElement("meta", { property: "og:title", content: "Popular Java repos on github", __source: {
            fileName: _jsxFileName,
            lineNumber: 70
          },
          __self: this
        })
      );
    };
  }

  //   fetchRepos() {
  //     this.setState({
  //       loading: true
  //     });
  //     fetchPopularRepos("java").then(repos =>
  //       this.setState(() => ({
  //         repos,
  //         loading: false
  //       }))
  //     );
  //   }

  componentDidMount() {
    if (!this.props.javaList) {
      this.props.onFetchJava();
    }
  }

  render() {
    const loading = this.props.loading;

    const repos = this.props.javaListAfterFilter;
    if (loading === true || !repos) {
      return _react2.default.createElement(
        "h3",
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 79
          },
          __self: this
        },
        "Loading..."
      );
    }
    if (repos.length === 0) {
      return _react2.default.createElement(
        "h3",
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 82
          },
          __self: this
        },
        "No repos there yet..."
      );
    }
    return _react2.default.createElement(
      "div",
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      },
      this.head(),
      _react2.default.createElement(
        "div",
        { className: "container", __source: {
            fileName: _jsxFileName,
            lineNumber: 88
          },
          __self: this
        },
        _react2.default.createElement("img", {
          style: { maxWidth: 300 },
          src: "/assets/images/java.jpg",
          alt: "",
          className: "mx-auto d-block img-thumbnail img-fluid",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 89
          },
          __self: this
        }),
        _react2.default.createElement(
          "h3",
          { style: { textAlign: "center", marginTop: 30 }, __source: {
              fileName: _jsxFileName,
              lineNumber: 95
            },
            __self: this
          },
          "Popular Java repos on github"
        ),
        _react2.default.createElement(
          "ul",
          { style: { display: "flex", flexWrap: "wrap" }, __source: {
              fileName: _jsxFileName,
              lineNumber: 99
            },
            __self: this
          },
          repos.map(({ name, owner, stargazers_count, html_url }) => _react2.default.createElement(_ListItem2.default, {
            key: html_url,
            name: name,
            owner: owner,
            stargazers_count: stargazers_count,
            html_url: html_url,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 101
            },
            __self: this
          }))
        )
      )
    );
  }
}

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(JavaPage);

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = "/Users/muzili/Desktop/workingfolder/myssrdemo/src/pages/XssPage.js";

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _EscapeInput = __webpack_require__(39);

var _EscapeInput2 = _interopRequireDefault(_EscapeInput);

var _DangerousHTML = __webpack_require__(40);

var _DangerousHTML2 = _interopRequireDefault(_DangerousHTML);

var _SanitizeCode = __webpack_require__(41);

var _SanitizeCode2 = _interopRequireDefault(_SanitizeCode);

var _UserHref = __webpack_require__(43);

var _UserHref2 = _interopRequireDefault(_UserHref);

var _ServerRedux = __webpack_require__(47);

var _ServerRedux2 = _interopRequireDefault(_ServerRedux);

var _reactHelmet = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class XssPage extends _react.Component {
  constructor(...args) {
    var _temp;

    return _temp = super(...args), this.head = () => {
      return _react2.default.createElement(
        _reactHelmet.Helmet,
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 12
          },
          __self: this
        },
        _react2.default.createElement(
          "title",
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 13
            },
            __self: this
          },
          "React Security"
        ),
        _react2.default.createElement("meta", {
          property: "og:title",
          content: "How to prevent XSS attack in React",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 14
          },
          __self: this
        }),
        _react2.default.createElement("meta", {
          name: "description",
          content: `React Security: How to prevent XSS attack in React`,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 18
          },
          __self: this
        })
      );
    }, _temp;
  }

  render() {
    return _react2.default.createElement(
      "div",
      { className: "container", __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      },
      this.head(),
      _react2.default.createElement(
        "h2",
        { className: "mt-4", __source: {
            fileName: _jsxFileName,
            lineNumber: 29
          },
          __self: this
        },
        "React Security Examples"
      ),
      _react2.default.createElement("hr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }),
      _react2.default.createElement(_EscapeInput2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }),
      _react2.default.createElement("hr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }),
      _react2.default.createElement(_DangerousHTML2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }),
      _react2.default.createElement("hr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }),
      _react2.default.createElement(_SanitizeCode2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }),
      _react2.default.createElement("hr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }),
      _react2.default.createElement(_UserHref2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }),
      _react2.default.createElement("hr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }),
      _react2.default.createElement(_ServerRedux2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }),
      _react2.default.createElement("div", { style: { minHeight: 300 }, __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      })
    );
  }
}
exports.default = XssPage;

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = "/Users/muzili/Desktop/workingfolder/myssrdemo/src/components/security/EscapeInput.js";

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const inputString = '<script>alert("XSS attack!");</script>';

class EscapeInput extends _react.Component {
  constructor() {
    super();

    this.updateTitle = event => this.setState({ title: event.target.value });

    this.state = { title: "" };
  }

  render() {
    return _react2.default.createElement(
      "div",
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      },
      _react2.default.createElement(
        "h3",
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 17
          },
          __self: this
        },
        "1. Safe React Input"
      ),
      _react2.default.createElement(
        "p",
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 18
          },
          __self: this
        },
        "React escape strings and input by default, replacing dangerous input like ",
        _react2.default.createElement(
          "strong",
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 20
            },
            __self: this
          },
          `<h2>Title<h2>`
        ),
        " with",
        " ",
        _react2.default.createElement(
          "strong",
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 21
            },
            __self: this
          },
          `&lt;h2&gt;Title&lt;/h2&gt;`
        )
      ),
      _react2.default.createElement(
        "p",
        { className: "text-muted", __source: {
            fileName: _jsxFileName,
            lineNumber: 23
          },
          __self: this
        },
        "Copy and paste the xss code below into the input field to see how React prevents xss by default"
      ),
      _react2.default.createElement(
        "h5",
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 27
          },
          __self: this
        },
        inputString
      ),
      _react2.default.createElement(
        "h4",
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 28
          },
          __self: this
        },
        this.state.title
      ),
      this.state.title.indexOf("script") >= 0 ? _react2.default.createElement(
        "h5",
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 30
          },
          __self: this
        },
        "👆The above xss script code will not be executed by browser :)"
      ) : null,
      _react2.default.createElement(
        "div",
        { className: " mb-3 mt-4", style: { position: "relative" }, __source: {
            fileName: _jsxFileName,
            lineNumber: 35
          },
          __self: this
        },
        _react2.default.createElement("input", {
          type: "text",
          className: "form-control",
          value: this.state.title,
          placeholder: "enter the above xss code here...",
          onChange: this.updateTitle,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 36
          },
          __self: this
        }),
        this.state.title ? _react2.default.createElement(
          "span",
          {
            onClick: () => {
              this.setState({ title: "" });
            },
            className: "text-muted",
            style: {
              position: "absolute",
              top: 5,
              right: 20,
              cursor: "pointer",
              zIndex: 5
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 45
            },
            __self: this
          },
          "x"
        ) : null
      )
    );
  }
}

exports.default = EscapeInput;

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = "/Users/muzili/Desktop/workingfolder/myssrdemo/src/components/security/DangerousHTML.js";

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const foo = "<input placeholder='Mixed in input...' />";
const bar = "<script>alert('XSS')</script>";
const inputString = `<a href='javascript:alert("XSS attack!");'>Click Me</a>`;

class DangerousHTML extends _react.Component {
  constructor(...args) {
    var _temp;

    return _temp = super(...args), this.state = { title: "" }, this.updateTitle = event => this.setState({ title: event.target.value }), _temp;
  }
  //   componentDidMount() {
  //     const s = document.createElement("script");
  //     s.innerHTML = "console.log('XSS created with innerHTML')";
  //     document.getElementById("danger-div").appendChild(s);
  //   }

  render() {
    return _react2.default.createElement(
      "div",
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      },
      _react2.default.createElement(
        "h3",
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 20
          },
          __self: this
        },
        "2. Dangerously Set Inner Html"
      ),
      _react2.default.createElement(
        "p",
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 21
          },
          __self: this
        },
        "In some case, we need to deliberately render some user input as HTML within our component(i.e. Text Editor application), we need to use",
        " ",
        _react2.default.createElement(
          "strong",
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 24
            },
            __self: this
          },
          `dangerouslySetInnerHTML`
        ),
        " property to achieve it. But it also brings us the risk of XSS attack."
      ),
      _react2.default.createElement(
        "p",
        { className: "text-muted", __source: {
            fileName: _jsxFileName,
            lineNumber: 27
          },
          __self: this
        },
        "Copy and paste the XSS code below into the input field, then click the rendered result to see XSS attack in effect"
      ),
      _react2.default.createElement(
        "h5",
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 31
          },
          __self: this
        },
        inputString
      ),
      _react2.default.createElement("div", { dangerouslySetInnerHTML: { __html: this.state.title }, __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }),
      _react2.default.createElement(
        "div",
        { className: " mb-3 mt-4", style: { position: "relative" }, __source: {
            fileName: _jsxFileName,
            lineNumber: 33
          },
          __self: this
        },
        _react2.default.createElement("input", {
          type: "text",
          className: "form-control",
          value: this.state.title,
          placeholder: "enter the above xss code here...",
          onChange: this.updateTitle,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 34
          },
          __self: this
        }),
        this.state.title ? _react2.default.createElement(
          "span",
          {
            onClick: () => {
              this.setState({ title: "" });
            },
            className: "text-muted",
            style: {
              position: "absolute",
              top: 5,
              right: 20,
              cursor: "pointer",
              zIndex: 5
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 43
            },
            __self: this
          },
          "x"
        ) : null
      )
    );
  }
}

exports.default = DangerousHTML;

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = "/Users/muzili/Desktop/workingfolder/myssrdemo/src/components/security/SanitizeCode.js";

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _dompurify = __webpack_require__(42);

var _dompurify2 = _interopRequireDefault(_dompurify);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const inputString = `<a href='javascript:alert("XSS attack!");'>Click Me</a>`;

class SanitizeCode extends _react.Component {
  constructor(...args) {
    var _temp;

    return _temp = super(...args), this.state = { title: "" }, this.updateTitle = event => this.setState({ title: event.target.value }), _temp;
  }
  //   componentDidMount() {
  //     const s = document.createElement("script");
  //     s.innerHTML = "console.log('XSS created with innerHTML')";
  //     document.getElementById("danger-div").appendChild(s);
  //   }

  render() {
    const clean = _dompurify2.default.sanitize(this.state.title);

    return _react2.default.createElement(
      "div",
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      },
      _react2.default.createElement(
        "h3",
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 22
          },
          __self: this
        },
        "3. Sanitizing Code before using dangerouslySetInnerHTML"
      ),
      _react2.default.createElement(
        "p",
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 23
          },
          __self: this
        },
        "If we have to use ",
        _react2.default.createElement(
          "strong",
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 24
            },
            __self: this
          },
          `dangerouslySetInnerHTML`
        ),
        " to render user input as HTML in some case, we must sanitize any user input with ",
        _react2.default.createElement(
          "strong",
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 26
            },
            __self: this
          },
          `DOMPurify`
        ),
        " before rendering the input to the DOM. Thus we may prevent possible XSS attacks."
      ),
      _react2.default.createElement(
        "p",
        { className: "text-muted", __source: {
            fileName: _jsxFileName,
            lineNumber: 29
          },
          __self: this
        },
        "Copy and paste the XSS code below into the input field, then the rendered result will not be able to execute XSS attack"
      ),
      _react2.default.createElement(
        "h5",
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 33
          },
          __self: this
        },
        inputString
      ),
      _react2.default.createElement("div", { dangerouslySetInnerHTML: { __html: clean }, __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }),
      _react2.default.createElement(
        "div",
        { className: " mb-3 mt-4", style: { position: "relative" }, __source: {
            fileName: _jsxFileName,
            lineNumber: 35
          },
          __self: this
        },
        _react2.default.createElement("input", {
          type: "text",
          className: "form-control",
          value: this.state.title,
          placeholder: "enter the above xss code here...",
          onChange: this.updateTitle,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 36
          },
          __self: this
        }),
        this.state.title ? _react2.default.createElement(
          "span",
          {
            onClick: () => {
              this.setState({ title: "" });
            },
            className: "text-muted",
            style: {
              position: "absolute",
              top: 5,
              right: 20,
              cursor: "pointer",
              zIndex: 5
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 45
            },
            __self: this
          },
          "x"
        ) : null
      )
    );
  }
}

exports.default = SanitizeCode;

/***/ }),
/* 42 */
/***/ (function(module, exports) {

module.exports = require("dompurify");

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = "/Users/muzili/Desktop/workingfolder/myssrdemo/src/components/security/UserHref.js";

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _xssFilters = __webpack_require__(44);

var _xssFilters2 = _interopRequireDefault(_xssFilters);

var _isURL = __webpack_require__(45);

var _isURL2 = _interopRequireDefault(_isURL);

var _classnames = __webpack_require__(12);

var _classnames2 = _interopRequireDefault(_classnames);

var _prependHttp = __webpack_require__(46);

var _prependHttp2 = _interopRequireDefault(_prependHttp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const inputString = `javascript:alert("XSS attack!")`;

class UserHref extends _react.Component {
  constructor(...args) {
    var _temp;

    return _temp = super(...args), this.state = { link: "", linkTwo: "" }, this.updatelink = event => this.setState({ link: event.target.value }), this.updatelinkTwo = event => this.setState({ linkTwo: event.target.value }), _temp;
  }

  render() {
    return _react2.default.createElement(
      "div",
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      },
      _react2.default.createElement(
        "h3",
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 17
          },
          __self: this
        },
        "4. User Provided Href"
      ),
      _react2.default.createElement(
        "p",
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 18
          },
          __self: this
        },
        "In some social network app, user may provide their url link to profile page, this will bring us the risk of XSS attack"
      ),
      _react2.default.createElement(
        "p",
        { className: "text-muted", __source: {
            fileName: _jsxFileName,
            lineNumber: 22
          },
          __self: this
        },
        "Copy and paste the XSS code below into the input field, then click the rendered result to see XSS attack in effect"
      ),
      _react2.default.createElement(
        "h5",
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 26
          },
          __self: this
        },
        inputString
      ),
      _react2.default.createElement(
        "a",
        { target: "_blank", href: (0, _prependHttp2.default)(this.state.link), __source: {
            fileName: _jsxFileName,
            lineNumber: 27
          },
          __self: this
        },
        this.state.link
      ),
      _react2.default.createElement(
        "div",
        { className: " mb-3 mt-4", style: { position: "relative" }, __source: {
            fileName: _jsxFileName,
            lineNumber: 30
          },
          __self: this
        },
        _react2.default.createElement("input", {
          type: "text",
          className: "form-control",
          value: this.state.link,
          placeholder: "enter the above xss code here...",
          onChange: this.updatelink,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 31
          },
          __self: this
        }),
        this.state.link ? _react2.default.createElement(
          "span",
          {
            onClick: () => {
              this.setState({ link: "" });
            },
            className: "text-muted",
            style: {
              position: "absolute",
              top: 5,
              right: 20,
              cursor: "pointer",
              zIndex: 5
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 40
            },
            __self: this
          },
          "x"
        ) : null
      ),
      _react2.default.createElement(
        "p",
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 57
          },
          __self: this
        },
        "To prevent this kind of attack, we should use",
        " ",
        _react2.default.createElement(
          "strong",
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 59
            },
            __self: this
          },
          `validator + xss-filters`
        ),
        " to validate & sanitize any user provided url"
      ),
      _react2.default.createElement(
        "p",
        { className: "text-muted", __source: {
            fileName: _jsxFileName,
            lineNumber: 62
          },
          __self: this
        },
        "Copy and paste the XSS code below into the input field, then the rendered result will not be able to execute XSS attack"
      ),
      _react2.default.createElement(
        "h5",
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 66
          },
          __self: this
        },
        inputString
      ),
      _react2.default.createElement(
        "a",
        {
          target: "_blank",
          href: (0, _prependHttp2.default)(_xssFilters2.default.uriInUnQuotedAttr(this.state.linkTwo)),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 67
          },
          __self: this
        },
        this.state.linkTwo
      ),
      _react2.default.createElement(
        "div",
        { className: " mb-3 mt-4", style: { position: "relative" }, __source: {
            fileName: _jsxFileName,
            lineNumber: 73
          },
          __self: this
        },
        _react2.default.createElement("input", {
          type: "text",
          className: (0, _classnames2.default)("form-control ", {
            "is-invalid": !(0, _isURL2.default)(this.state.linkTwo)
          }),
          value: this.state.linkTwo,
          placeholder: "enter the above xss code here...",
          onChange: this.updatelinkTwo,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 74
          },
          __self: this
        }),
        !(0, _isURL2.default)(this.state.linkTwo) ? _react2.default.createElement(
          "p",
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 85
            },
            __self: this
          },
          _react2.default.createElement(
            "small",
            { style: { color: "red", marginTop: 0 }, __source: {
                fileName: _jsxFileName,
                lineNumber: 86
              },
              __self: this
            },
            "Please provide valid url address"
          )
        ) : null,
        this.state.linkTwo ? _react2.default.createElement(
          "p",
          {
            onClick: () => {
              this.setState({ linkTwo: "" });
            },
            className: "text-muted round-border text-center",
            style: {
              position: "absolute",
              background: "white",
              height: 30,
              width: 30,

              border: "1px solid #ddd",
              top: 5,
              right: 20,
              cursor: "pointer",
              zIndex: 5
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 93
            },
            __self: this
          },
          "x"
        ) : null
      )
    );
  }
}

exports.default = UserHref;

/***/ }),
/* 44 */
/***/ (function(module, exports) {

module.exports = require("xss-filters");

/***/ }),
/* 45 */
/***/ (function(module, exports) {

module.exports = require("validator/lib/isURL");

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = (url, opts) => {
  if (typeof url !== "string") {
    throw new TypeError(`Expected \`url\` to be of type \`string\`, got \`${typeof url}\``);
  }

  url = url.trim();
  opts = Object.assign({ https: false }, opts);

  if (/^\.*\/|^(?!localhost)\w+:/.test(url)) {
    return url;
  }

  return url.replace(/^(?!(?:\w+:)?\/\/)/, opts.https ? "https://" : "http://");
};

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = "/Users/muzili/Desktop/workingfolder/myssrdemo/src/components/security/ServerRedux.js";

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class ServerRedux extends _react.Component {
  render() {
    return _react2.default.createElement(
      "div",
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 6
        },
        __self: this
      },
      _react2.default.createElement(
        "h3",
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 7
          },
          __self: this
        },
        "5. XSS from Serverside Rendering"
      ),
      _react2.default.createElement(
        "p",
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 8
          },
          __self: this
        },
        "When we implement ",
        _react2.default.createElement(
          "strong",
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 9
            },
            __self: this
          },
          `Serveside Rendering`
        ),
        " and fetch data from server side, we may be exposed to the XSS attack from",
        " ",
        _react2.default.createElement(
          "strong",
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 11
            },
            __self: this
          },
          `Serverside Rendering`
        )
      ),
      _react2.default.createElement(
        "p",
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 14
          },
          __self: this
        },
        "To prevent this kind of attack, we should use",
        " ",
        _react2.default.createElement(
          "strong",
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 16
            },
            __self: this
          },
          `serialize-javascript`
        ),
        " rather than",
        " ",
        _react2.default.createElement(
          "strong",
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 17
            },
            __self: this
          },
          `JSON.stringify`
        ),
        " to stringify any data rendered from serveside"
      ),
      _react2.default.createElement("img", {
        style: { maxWidth: "90%" },
        src: "/assets/images/serverredux.png",
        alt: "",
        className: "mx-auto d-block img-thumbnail img-fluid",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }),
      _react2.default.createElement(
        "h5",
        { className: "mt-4", __source: {
            fileName: _jsxFileName,
            lineNumber: 26
          },
          __self: this
        },
        "Correct: window.__INITIAL_STATE__ = ${serialize(store.getState())}"
      ),
      _react2.default.createElement(
        "h5",
        { className: "mt-4", __source: {
            fileName: _jsxFileName,
            lineNumber: 29
          },
          __self: this
        },
        "Wrong: window.__INITIAL_STATE__ = ${JSON.stringify(store.getState())}"
      )
    );
  }
}

exports.default = ServerRedux;

/***/ }),
/* 48 */
/***/ (function(module, exports) {

module.exports = {"main.css":"static/css/main.d78078a6.css","main.css.map":"static/css/main.d78078a6.css.map","main.js":"static/js/main.1ca15916.js","main.js.map":"static/js/main.1ca15916.js.map","static/js/0.b4d360ed.chunk.js":"static/js/0.b4d360ed.chunk.js","static/js/0.b4d360ed.chunk.js.map":"static/js/0.b4d360ed.chunk.js.map","static/js/1.4b4e8f2c.chunk.js":"static/js/1.4b4e8f2c.chunk.js","static/js/1.4b4e8f2c.chunk.js.map":"static/js/1.4b4e8f2c.chunk.js.map"}

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(50);

var _reduxThunk = __webpack_require__(51);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _java = __webpack_require__(52);

var _java2 = _interopRequireDefault(_java);

var _javascript = __webpack_require__(53);

var _javascript2 = _interopRequireDefault(_javascript);

var _searchTermFilter = __webpack_require__(54);

var _searchTermFilter2 = _interopRequireDefault(_searchTermFilter);

var _comments = __webpack_require__(55);

var _comments2 = _interopRequireDefault(_comments);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const serverStore = () => {
  const composeEnhancers = _redux.compose;

  const rootReducer = (0, _redux.combineReducers)({
    javaList: _java2.default,
    jsList: _javascript2.default,
    searchTermFilter: _searchTermFilter2.default,
    comments: _comments2.default
  });

  const store = (0, _redux.createStore)(rootReducer, composeEnhancers((0, _redux.applyMiddleware)(_reduxThunk2.default)));

  return store;
};

exports.default = serverStore;

/***/ }),
/* 50 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 51 */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _actionTypes = __webpack_require__(1);

var actionTypes = _interopRequireWildcard(_actionTypes);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

const initialState = {
  javaList: null,
  loading: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_JAVA_START:
      return Object.assign({}, state, {
        loading: true
      });

    case actionTypes.FETCH_JAVA_SUCCESS:
      return Object.assign({}, state, {
        loading: false,
        javaList: action.payload
      });

    default:
      return state;
  }
};

exports.default = reducer;

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _actionTypes = __webpack_require__(1);

var actionTypes = _interopRequireWildcard(_actionTypes);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

const initialState = {
  jsList: null,
  loading: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_JS_START:
      return Object.assign({}, state, {
        loading: true
      });

    case actionTypes.FETCH_JS_SUCCESS:
      return Object.assign({}, state, {
        loading: false,
        jsList: action.payload
      });

    default:
      return state;
  }
};

exports.default = reducer;

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _actionTypes = __webpack_require__(1);

var actionTypes = _interopRequireWildcard(_actionTypes);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

// Filters Reducer

const initialState = {
  searchTerm: ""
};

exports.default = (state = initialState, action) => {
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

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (state = [], action) {
  switch (action.type) {
    case _actionTypes.SAVE_COMMENT:
      return [action.payload, ...state];
    case _actionTypes.FETCH_COMMENTS:
      const comments = action.payload.map(comment => comment.name);
      return [...comments, ...state];
    default:
      return state;
  }
};

var _actionTypes = __webpack_require__(1);

/***/ }),
/* 56 */
/***/ (function(module, exports) {

module.exports = require("cors");

/***/ }),
/* 57 */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),
/* 58 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 59 */
/***/ (function(module, exports) {

module.exports = require("reselect");

/***/ })
/******/ ]);