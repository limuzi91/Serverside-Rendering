import React, { Component } from "react";
import App from "../components/testing/App";
import Intro from "../components/testing/Intro";
import { Helmet } from "react-helmet";

class TestingPage extends Component {
  head = () => {
    return (
      <Helmet>
        <title>React Testing</title>
        <meta
          property="og:title"
          content="React Testing Design and Source Code for Demo Test Case"
        />
        <meta
          name="description"
          content={`React Testing Design and Source Code for Demo Test Case`}
        />
      </Helmet>
    );
  };
  render() {
    return (
      <div>
        {this.head()}
        <div className="container">
          <Intro />
          <App />
        </div>
      </div>
    );
  }
}
export default TestingPage;
