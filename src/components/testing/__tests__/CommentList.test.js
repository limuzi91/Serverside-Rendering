import React from "react";
import { mount } from "enzyme";
import CommentList from "../CommentList";
import Root from "../Root";

import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
Enzyme.configure({ adapter: new Adapter() });

let wrapped;

beforeEach(() => {
  let initialState = {
    comments: ["Comment 1", "Comment 2", "Comment 3", "Comment 22"]
  };

  wrapped = mount(
    <Root initialState={initialState}>
      <CommentList />
    </Root>
  );
});

afterEach(() => {
  wrapped.unmount();
});

it("creates one LI per comment, i.e. render correct amount of comments ", () => {
  expect(wrapped.find("li").length).toEqual(4);
});

it("shows the text for each comment", () => {
  const texts = wrapped.find("li").map(node => node.text());
  expect(texts).toEqual(["Comment 1", "Comment 2", "Comment 3", "Comment 22"]);
  // expect(wrapped.render().text()).toContain("Comment 3");
  //expect(wrapped.render().text()).toContain("Comment 2");
});

it("should render correct amount of comments based on searchTerm", () => {
  const initialState = {
    comments: ["Comment 1", "Comment 2", "Comment 3", "Comment 22"],
    searchTermFilter: {
      searchTerm: "Comment 2"
    }
  };

  const wrapped = mount(
    <Root initialState={initialState}>
      <CommentList />
    </Root>
  );

  const commentCount = initialState.comments.filter(comment =>
    `${comment.toUpperCase()} `.includes(
      initialState.searchTermFilter.searchTerm.toUpperCase()
    )
  ).length;

  expect(wrapped.find("li").length).toEqual(commentCount);
});
