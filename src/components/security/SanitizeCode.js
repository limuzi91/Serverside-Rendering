import React, { Component } from "react";

import DOMPurify from "dompurify";

const inputString = `<a href='javascript:alert("XSS attack!");'>Click Me</a>`;

class SanitizeCode extends Component {
  //   componentDidMount() {
  //     const s = document.createElement("script");
  //     s.innerHTML = "console.log('XSS created with innerHTML')";
  //     document.getElementById("danger-div").appendChild(s);
  //   }

  state = { title: "" };
  updateTitle = event => this.setState({ title: event.target.value });

  render() {
    const clean = DOMPurify.sanitize(this.state.title);

    return (
      <div>
        <h3>3. Sanitizing Code before using dangerouslySetInnerHTML</h3>
        <p>
          If we have to use <strong>{`dangerouslySetInnerHTML`}</strong> to
          render user input as HTML in some case, we must sanitize any user
          input with <strong>{`DOMPurify`}</strong> before rendering the input
          to the DOM. Thus we may prevent possible XSS attacks.
        </p>
        <p className="text-muted">
          Copy and paste the XSS code below into the input field, then the
          rendered result will not be able to execute XSS attack
        </p>
        <h5>{inputString}</h5>
        <div dangerouslySetInnerHTML={{ __html: clean }} />
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

export default SanitizeCode;
