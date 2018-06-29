import React from "react";
import CommentBox from "./CommentBox";
import CommentList from "./CommentList";

export default () => {
  return (
    <div>
      <h2 style={{ margin: "40px 0" }}>2. Testing Demo</h2>
      <CommentBox />
      <CommentList />
      <div style={{ height: 100 }} />
    </div>
  );
};
