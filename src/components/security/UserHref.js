import React, { Component } from "react";
import xssFilters from "xss-filters";
import isURL from "validator/lib/isURL";
import classnames from "classnames";

const inputString = `javascript:alert("XSS attack!")`;

class UserHref extends Component {
  state = { link: "", linkTwo: "" };
  updatelink = event => this.setState({ link: event.target.value });
  updatelinkTwo = event => this.setState({ linkTwo: event.target.value });

  render() {
    return (
      <div>
        <h3>4. User Provided Href</h3>
        <p>
          In some social network app, user may provide their url link to profile
          page, this will bring us the risk of XSS attack
        </p>
        <p className="text-muted">
          Copy and paste the XSS code below into the input field, then click the
          rendered result to see XSS attack in effect
        </p>
        <h5>{inputString}</h5>
        <a target="_blank" href={this.state.link}>
          {this.state.link}
        </a>
        <div className=" mb-3 mt-4" style={{ position: "relative" }}>
          <input
            type="text"
            className="form-control"
            value={this.state.link}
            placeholder="enter the above xss code here..."
            onChange={this.updatelink}
          />

          {this.state.link ? (
            <span
              onClick={() => {
                this.setState({ link: "" });
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
        <p>
          To prevent this kind of attack, we should use{" "}
          <strong>{`validator + xss-filters`}</strong> to validate & sanitize
          any user provided url
        </p>
        <p className="text-muted">
          Copy and paste the XSS code below into the input field, then the
          rendered result will not be able to execute XSS attack
        </p>
        <h5>{inputString}</h5>
        <a
          target="_blank"
          href={xssFilters.uriInUnQuotedAttr(this.state.linkTwo)}
        >
          {xssFilters.uriInHTMLData(this.state.linkTwo)}
        </a>
        <div className=" mb-3 mt-4" style={{ position: "relative" }}>
          <input
            type="text"
            className={classnames("form-control ", {
              "is-invalid": !isURL(this.state.linkTwo)
            })}
            value={this.state.linkTwo}
            placeholder="enter the above xss code here..."
            onChange={this.updatelinkTwo}
          />

          {!isURL(this.state.linkTwo) ? (
            <p>
              <small style={{ color: "red", marginTop: 0 }}>
                Please provide valid url address
              </small>
            </p>
          ) : null}

          {this.state.linkTwo ? (
            <p
              onClick={() => {
                this.setState({ linkTwo: "" });
              }}
              className="text-muted round-border text-center"
              style={{
                position: "absolute",
                background: "white",
                height: 30,
                width: 30,

                border: "1px solid #ddd",
                top: 5,
                right: 20,
                cursor: "pointer",
                zIndex: 5
              }}
            >
              x
            </p>
          ) : null}
        </div>
      </div>
    );
  }
}

export default UserHref;
