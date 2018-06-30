import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import { Provider } from "react-redux";
import serialize from "serialize-javascript";
import { renderRoutes } from "react-router-config";
import routes from "../../src/routes";
import staticPath from "../../build/asset-manifest.json";
import { Helmet } from "react-helmet";

export default (request, store, context, localState) => {
  //console.log(data["1"]);
  const markup = renderToString(
    <Provider store={store}>
      <StaticRouter location={request.url} context={context}>
        <div>{renderRoutes(routes)}</div>
      </StaticRouter>
    </Provider>
  );

  const helmet = Helmet.renderStatic();

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
      <link rel="stylesheet" href="/${staticPath["main.css"]}">
      
    </head>
    <body>
      <div id="root">${markup}</div>
      <script>
          window.__INITIAL_STATE__ = ${serialize(store.getState())}
          window.__INITIAL_LOCAL_STATE__ = ${serialize(localState)}
        </script>
      <script src="/${staticPath["main.js"]}" ></script>
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
