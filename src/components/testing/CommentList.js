import React, { Component } from "react";
import { connect } from "react-redux";
import searchReposFilter from "../../selectors/searchReposFilter";

const mapStateToProps = state => ({
  comments: searchReposFilter(state.comments, state.searchTermFilter.searchTerm)
});

class CommentList extends Component {
  render() {
    let comments = this.props.comments;
    if (!comments) {
      return null;
    }
    if (comments.length === 0) {
      return null;
    }
    return comments.map((comment, index) => {
      return <li key={index}>{comment}</li>;
    });
  }
}

export default connect(mapStateToProps)(CommentList);
