import React, { Component } from "react";

import { connect } from "react-redux";
import * as actions from "../store/actions";
import { Helmet } from "react-helmet";
import ListItem from "../components/ListItem";
import { searchReposFilterWithCache } from "../selectors/searchReposFilter";

const mapStateToProps = state => ({
  // javaListAfterFilter: searchReposFilter(
  //   state.javaList.javaList,
  //   state.searchTermFilter.searchTerm
  // )

  javaListAfterFilter: searchReposFilterWithCache(
    state => state.javaList.javaList,

    state => state.searchTermFilter.searchTerm
  )(state),

  ...state.javaList
});

const mapDispatchToProps = dispatch => ({
  onFetchJava: () => dispatch(actions.fetchJava())
});

class JavaPage extends Component {
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
    if (!this.props.javaList) {
      this.props.onFetchJava();
    }
  }

  head = () => {
    return (
      <Helmet>
        <title>{`${this.props.javaList.length} Java repos Loaded`}</title>
        <meta property="og:title" content="Popular Java repos on github" />
      </Helmet>
    );
  };

  render() {
    const { loading } = this.props;
    const repos = this.props.javaListAfterFilter;
    if (loading === true || !repos) {
      return <h3>Loading...</h3>;
    }
    if (repos.length === 0) {
      return <h3>No repos there yet...</h3>;
    }
    return (
      <div>
        {this.head()}

        <div className="container">
          <img
            style={{ maxWidth: 300 }}
            src="/assets/images/java.jpg"
            alt=""
            className="mx-auto d-block img-thumbnail img-fluid"
          />
          <h3 style={{ textAlign: "center", marginTop: 30 }}>
            Popular Java repos on github
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
)(JavaPage);
