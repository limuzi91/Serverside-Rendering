import React, { Component } from "react";

class HomePage extends Component {
  state = {
    language: ""
  };
  updateInput = event => {
    this.setState({ language: event.target.value });
  };
  goToSearch = event => {
    event.preventDefault();

    this.props.history.push(
      `/search/${encodeURIComponent(this.state.language.trim())}`
    );
  };

  render() {
    return (
      <div
        className="container text-center d-flex align-items-center justify-content-center"
        style={{ minHeight: "100vh" }}
      >
        <div>
          <p className="text-center">
            <a
              href="https://github.com/limuzi91/Serverside-Rendering"
              target="_blank"
              className="btn btn-primary"
            >
              View Source Code
            </a>
          </p>
          <h3 className="font-weight-light mb-1">A Demo project that shows</h3>
          <h4 className="display-4 mb-5">
            <small>
              Server Rendering + ServerSide Redux + CodeSplitting / LazyLoading
              + SEO + Security + Testing
            </small>
          </h4>
          <div className="card bg-light text-dark col-md-8 mx-auto">
            <div className="card-body">
              <h4 className="font-weight-light mb-3">
                Click navtab or enter a language to search
              </h4>
              <form onSubmit={this.goToSearch}>
                <div
                  className="landing__search"
                  style={{ position: "relative" }}
                >
                  <div className="input-group mb-3">
                    <input
                      type="text"
                      className="form-control"
                      value={this.state.language}
                      onChange={this.updateInput}
                      placeholder="Search popular repos in github of any language"
                    />
                    <div className="input-group-append">
                      <button className="btn btn-primary" type="submit">
                        Go
                      </button>
                    </div>
                  </div>
                  {this.state.language ? (
                    <span
                      onClick={() => {
                        this.setState({ language: "" });
                      }}
                      className="text-muted"
                      style={{
                        position: "absolute",
                        top: 5,
                        right: 60,
                        cursor: "pointer",
                        zIndex: 4
                      }}
                    >
                      x
                    </span>
                  ) : null}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default {
  component: HomePage
};
