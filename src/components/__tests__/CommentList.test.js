import React from "react";
import { mount } from "enzyme";

import CommentList from "components/CommentList";
import Root from "Root";

let wrapper;

beforeEach(() => {
  const initialState = {
    comments: ["Comment1", "Comment2", "Comment3"]
  };

  wrapper = mount(
    <Root initialState={initialState}>
      <CommentList />
    </Root>
  );
});

it("contains a <li> tag for each comment", () => {
  expect(wrapper.find("li").length).toEqual(3);
});

it("shows a value with each comment", () => {
  expect(wrapper.render().text()).toContain("Comment1");
  expect(wrapper.render().text()).toContain("Comment2");
  expect(wrapper.render().text()).toContain("Comment3");
});
