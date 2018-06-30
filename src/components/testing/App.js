import React from "react";
import CommentBox from "./CommentBox";
import CommentList from "./CommentList";
import { Link } from "react-router-dom";

export default () => {
  return (
    <div>
      <h2 style={{ margin: "40px 0" }}>2. Testing Demo</h2>
      <p>
        <a
          href="https://github.com/limuzi91/Serverside-Rendering"
          target="_blank"
          className="btn btn-primary"
        >
          View Source Code
        </a>
      </p>

      <CommentBox />
      <CommentList />
      <div style={{ height: 100 }} />
    </div>
  );
};
