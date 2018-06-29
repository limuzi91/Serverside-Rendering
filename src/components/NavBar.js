import React, { Component } from "react";
import { NavLink, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../store/actions/index";
import classnames from "classnames";

const mapStateToProps = state => ({
  ...state.searchTermFilter
});

const mapDispatchToProps = dispatch => ({
  onSetSearchTermFilter: text => dispatch(actions.setSearchTermFilter(text)),
  onRestFilters: () => dispatch(actions.restFilters())
});

class NavBar extends Component {
  state = {
    open: false
  };
  toggleNavbar = () => {
    this.setState(prevState => ({
      open: !prevState.open
    }));
  };
  render() {
    const { searchTerm, onSetSearchTermFilter, onRestFilters } = this.props;
    //console.log(props.match);
    return (
      <div>
        <nav className="navbar navbar-expand-sm bg-primary navbar-dark fixed-top ">
          <NavLink
            className="navbar-brand"
            style={{ color: "rgba(255,255,255,.5)" }}
            activeStyle={{ color: "white" }}
            exact
            to="/"
          >
            Home
          </NavLink>
          <button
            onClick={this.toggleNavbar}
            type="button"
            style={{
              minWidth: 44,
              fontSize: 20,
              padding: "3px 5px"
            }}
            className="navbar-toggler "
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className={classnames("navbar-collapse", {
              "collapse ": !this.state.open
            })}
          >
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  activeStyle={{ color: "white" }}
                  to="/javascript"
                >
                  Javascript
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  activeStyle={{ color: "white" }}
                  to="/java"
                >
                  Java(AsyncRoute/CodeSplit)
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  activeStyle={{ color: "white" }}
                  to="/xss"
                >
                  XssAttack
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  activeStyle={{ color: "white" }}
                  to="/testing"
                >
                  Testing
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  activeStyle={{ color: "white" }}
                  to="/asdfgh"
                >
                  NotFound
                </NavLink>
              </li>
            </ul>
            <form
              className="form-inline my-2 my-lg-0  mr-sm-5"
              onSubmit={event => {
                event.preventDefault();
              }}
            >
              <div style={{ minWidth: 250, position: "relative" }}>
                <input
                  className="form-control"
                  style={{ width: "100%" }}
                  type="text"
                  value={searchTerm}
                  onChange={event => {
                    onSetSearchTermFilter(event.target.value);
                  }}
                  placeholder="Enter keyword to filter result"
                />
                {searchTerm ? (
                  <span
                    onClick={onRestFilters}
                    className="text-muted "
                    style={{
                      position: "absolute",
                      top: 5,
                      right: 10,
                      cursor: "pointer"
                    }}
                  >
                    x
                  </span>
                ) : null}
              </div>
            </form>
          </div>
        </nav>
      </div>
    );
  }
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(NavBar)
);
