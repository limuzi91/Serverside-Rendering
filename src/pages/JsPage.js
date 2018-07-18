import React, { Component } from "react";

import { connect } from "react-redux";
import * as actions from "../store/actions";
import { Helmet } from "react-helmet";
import { fromJS, is } from "immutable";
import ListItem from "../components/ListItem";
import { searchReposFilterWithCache } from "../selectors/searchReposFilter";

const mapStateToProps = state => ({
  jsListAfterFilter: searchReposFilterWithCache(
    state => state.jsList.jsList,
    state => state.searchTermFilter.searchTerm
  )(state),
  ...state.jsList
});

const mapDispatchToProps = dispatch => ({
  onFetchJavascript: () => dispatch(actions.fetchJavascript())
});

class JsPage extends Component {
  constructor(props) {
    super(props);

    // let repos;
    // if (__isBrowser__) {
    //   repos = window.__INITIAL_DATA__;
    //   delete window.__INITIAL_DATA__;
    // } else {
    //   repos = props.staticContext.data;
    // }

    // this.state = {
    //   repos: null,
    //   loading: false
    // };

    // this.fetchRepos = this.fetchRepos.bind(this);
  }

  //   fetchRepos() {
  //     this.setState({
  //       loading: true
  //     });
  //     fetchPopularRepos("java").then(repos =>
  //       this.setState(() => ({
  //         repos,
  //         loading: false
  //       }))
  //     );
  //   }

  componentDidMount() {
    if (!this.props.jsList) {
      this.props.onFetchJavascript();
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    const $$thisProps = fromJS(this.props || {});
    const $$nextProps = fromJS(nextProps || {});
    const $$thisState = fromJS(this.state || {});
    const $$nextState = fromJS(nextState || {});
    // console.log("thisProps", this.props || {});
    // console.log("nextProps", nextProps || {});

    // console.log(!is($$thisProps, $$nextProps));

    return !is($$thisProps, $$nextProps) || !is($$thisState, $$nextState);
  }
  componentDidUpdate() {
    console.log("updated!");
  }

  head = () => {
    return (
      <Helmet>
        <title>{`${this.props.jsList.length} Javascript repos Loaded`}</title>
        <meta
          property="og:title"
          content="Popular Javascript repos on github"
        />
      </Helmet>
    );
  };

  render() {
    const { loading } = this.props;
    const repos = this.props.jsListAfterFilter;
    if (loading === true || !repos) {
      return <h3>Loading...</h3>;
    }
    if (repos.length === 0) {
      return <h3>No repos there yet...</h3>;
    }
    return (
      <div>
        {this.head()}
        <div>
          <img
            style={{ maxWidth: 300 }}
            src="/assets/images/learn-javascript.png"
            alt=""
            className="mx-auto d-block img-thumbnail img-fluid"
          />
          <h3 style={{ textAlign: "center", marginTop: 30 }}>
            Popular Javascript repos on github
          </h3>
          <ul style={{ display: "flex", flexWrap: "wrap" }}>
            {repos.map(({ name, owner, stargazers_count, html_url }) => (
              <ListItem
                key={html_url}
                name={name}
                owner={owner}
                stargazers_count={stargazers_count}
                html_url={html_url}
              />
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(JsPage);
