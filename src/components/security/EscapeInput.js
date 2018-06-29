import React, { Component } from "react";

const inputString = '<script>alert("XSS attack!");</script>';

class EscapeInput extends Component {
  constructor() {
    super();

    this.state = { title: "" };
  }

  updateTitle = event => this.setState({ title: event.target.value });

  render() {
    return (
      <div>
        <h3>1. Safe React Input</h3>
        <p>
          React escape strings and input by default, replacing dangerous input
          like <strong>{`<h2>Title<h2>`}</strong> with{" "}
          <strong>{`&lt;h2&gt;Title&lt;/h2&gt;`}</strong>
        </p>
        <p className="text-muted">
          Copy and paste the xss code below into the input field to see how
          React prevents xss by default
        </p>
        <h5>{inputString}</h5>
        <h4>{this.state.title}</h4>
        {this.state.title.indexOf("script") >= 0 ? (
          <h5>
            {"👆The above xss script code will not be executed by browser :)"}
          </h5>
        ) : null}

        <div className=" mb-3 mt-4" style={{ position: "relative" }}>
          <input
            type="text"
            className="form-control"
            value={this.state.title}
            placeholder="enter the above xss code here..."
            onChange={this.updateTitle}
          />

          {this.state.title ? (
            <span
              onClick={() => {
                this.setState({ title: "" });
              }}
              className="text-muted"
              style={{
                position: "absolute",
                top: 5,
                right: 20,
                cursor: "pointer",
                zIndex: 5
              }}
            >
              x
            </span>
          ) : null}
        </div>
      </div>
    );
  }
}

export default EscapeInput;
