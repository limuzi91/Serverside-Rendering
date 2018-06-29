import React, { Component } from "react";
import App from "../components/testing/App";
import Intro from "../components/testing/Intro";

class TestingPage extends Component {
  render() {
    return (
      <div className="container">
        <Intro />
        <App />
      </div>
    );
  }
}
export default TestingPage;
