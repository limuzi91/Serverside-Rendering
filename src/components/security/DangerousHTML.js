import React, { Component } from "react";

const foo = "<input placeholder='Mixed in input...' />";
const bar = "<script>alert('XSS')</script>";
const inputString = `<a href='javascript:alert("XSS attack!");'>Click Me</a>`;

class DangerousHTML extends Component {
  //   componentDidMount() {
  //     const s = document.createElement("script");
  //     s.innerHTML = "console.log('XSS created with innerHTML')";
  //     document.getElementById("danger-div").appendChild(s);
  //   }

  state = { title: "" };
  updateTitle = event => this.setState({ title: event.target.value });

  render() {
    return (
      <div>
        <h3>2. Dangerously Set Inner Html</h3>
        <p>
          In some case, we need to deliberately render some user input as HTML
          within our component(i.e. Text Editor application), we need to use{" "}
          <strong>{`dangerouslySetInnerHTML`}</strong> property to achieve it.
          But it also brings us the risk of XSS attack.
        </p>
        <p className="text-muted">
          Copy and paste the XSS code below into the input field, then click the
          rendered result to see XSS attack in effect
        </p>
        <h5>{inputString}</h5>
        <div dangerouslySetInnerHTML={{ __html: this.state.title }} />
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

export default DangerousHTML;
