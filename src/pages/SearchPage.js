import React, { Component } from "react";
import withLoadLocalData from "../HOC/withLoadLocalData";
import searchReposFilter from "../selectors/searchReposFilter";
import { connect } from "react-redux";
import ListItem from "../components/ListItem";
import isBrowser from "is-browser";

const mapStateToProps = state => ({
  ...state.searchTermFilter
});

class SearchPage extends Component {
  constructor(props) {
    super(props);

    let repos;
    if (isBrowser) {
      repos = window.__INITIAL_LOCAL_STATE__;
      delete window.__INITIAL_LOCAL_STATE__;
    } else {
      repos = props.staticContext.localState;
    }

    this.state = {
      loading: false,
      repos: repos
    };
  }

  componentDidMount() {
    if (!this.state.repos) {
      this.setState({
        loading: true
      });
      console.log(this.props.match.params.id);
      this.props.loadLocalData(this.props.match.params.id).then(repos =>
        this.setState(() => ({
          repos,
          loading: false
        }))
      );
    }
  }
  render() {
    const { loading } = this.state;
    const repos = searchReposFilter(this.state.repos, this.props.searchTerm);

    if (loading === true || !repos) {
      return <h3>Loading...</h3>;
    }
    if (repos.length === 0) {
      return <h3>No repos there yet...</h3>;
    }
    return (
      <div>
        <div className="container">
          <h3 style={{ textAlign: "center", marginTop: 30 }}>
            Popular {this.props.match.params.id} repos on github
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
export default connect(mapStateToProps)(withLoadLocalData(SearchPage));
