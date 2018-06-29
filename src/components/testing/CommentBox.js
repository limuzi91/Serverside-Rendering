import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions";
const mapDispatchToProps = dispatch => ({
  onSaveComment: comment => dispatch(actions.saveComment(comment)),
  onFetchComments: () => dispatch(actions.fetchComments())
});

class CommentBox extends Component {
  state = { comment: "" };

  handleChange = event => {
    this.setState({ comment: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();

    if (this.state.comment.trim()) {
      this.props.onSaveComment(this.state.comment);
      this.setState({ comment: "" });
    }
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Add Comment:</label>
            <textarea
              className="form-control"
              rows="5"
              onChange={this.handleChange}
              value={this.state.comment}
            />
          </div>
          <button type="submit" className="btn btn-primary mr-2">
            Submit Comment
          </button>

          <button
            type="button"
            className="fetch-comments btn btn-info"
            onClick={this.props.onFetchComments}
          >
            Fetch Comments
          </button>
        </form>
      </div>
    );
  }
}

export default connect(
  null,
  mapDispatchToProps
)(CommentBox);
