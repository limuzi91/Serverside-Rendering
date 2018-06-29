import React, { Component } from "react";

class ServerRedux extends Component {
  render() {
    return (
      <div>
        <h3>5. XSS from Serverside Rendering</h3>
        <p>
          When we implement <strong>{`Serveside Rendering`}</strong> and fetch
          data from server side, we may be exposed to the XSS attack from{" "}
          <strong>{`Serverside Rendering`}</strong>
        </p>

        <p>
          To prevent this kind of attack, we should use{" "}
          <strong>{`serialize-javascript`}</strong> rather than{" "}
          <strong>{`JSON.stringify`}</strong> to stringify any data rendered
          from serveside
        </p>
        <img
          style={{ maxWidth: "90%" }}
          src="/assets/images/serverredux.png"
          alt=""
          className="mx-auto d-block img-thumbnail img-fluid"
        />
        <h5 className="mt-4">
          {"Correct: window.__INITIAL_STATE__ = ${serialize(store.getState())}"}
        </h5>
        <h5 className="mt-4">
          {
            "Wrong: window.__INITIAL_STATE__ = ${JSON.stringify(store.getState())}"
          }
        </h5>
      </div>
    );
  }
}

export default ServerRedux;
