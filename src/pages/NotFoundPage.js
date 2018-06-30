import React from "react";
import { Helmet } from "react-helmet";

const NotFoundPage = ({ staticContext = {} }) => {
  staticContext.notFound = true;

  const head = (
    <Helmet>
      <title>404 Not Found</title>

      <meta name="description" content={`Resource Not Found`} />
    </Helmet>
  );
  return (
    <div>
      {head}
      <div className="container text-center">
        <h1 className="mt-5">{`Ooops :( `}</h1>
        <p className="">{`route not found (404)...`}</p>
      </div>
    </div>
  );
};

export default {
  component: NotFoundPage
};
