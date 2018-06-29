import React, { Component } from "react";

class Intro extends Component {
  render() {
    return (
      <div>
        <h2 className="mt-5">1. Testing Design</h2>

        <img
          style={{ margin: "40px 0" }}
          src="/assets/images/testing.png"
          alt=""
          className="mx-auto d-block img-thumbnail img-fluid"
        />

        <img
          style={{ margin: "40px 0" }}
          src="/assets/images/testingtwo.png"
          alt=""
          className="mx-auto d-block img-thumbnail img-fluid"
        />
      </div>
    );
  }
}

export default Intro;
