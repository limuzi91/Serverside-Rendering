import React from "react";

const NotFoundPage = ({ staticContext = {} }) => {
  staticContext.notFound = true;
  return (
    <div className="container text-center">
      <h1 className="mt-5">{`Ooops :( `}</h1>
      <p className="">{`route not found (404)...`}</p>
    </div>
  );
};

export default {
  component: NotFoundPage
};
