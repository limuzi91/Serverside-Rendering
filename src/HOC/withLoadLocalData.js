import React, { Component } from "react";
import { fetchPopularRepos } from "../api";

const withLoadLocalData = WrappedComponent =>
  class withLoadSearchData extends Component {
    loadLocalData = id => {
      return fetchPopularRepos(id);
    };
    render() {
      return (
        <WrappedComponent {...this.props} loadLocalData={this.loadLocalData} />
      );
    }
  };

export default withLoadLocalData;
