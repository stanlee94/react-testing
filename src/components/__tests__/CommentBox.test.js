import React from "react";
import { mount } from "enzyme";
import Root from "Root";

import CommentBox from "components/CommentBox";

let wrapper;

beforeEach(() => {
  wrapper = mount(
    <Root>
      <CommentBox />
    </Root>
  );
});

it("has a text area and two submit button", () => {
  expect(wrapper.find("textarea").length).toEqual(1);
  expect(wrapper.find("button").length).toEqual(2);
});

//returns a reference to the text area element
describe("the text area", () => {
  beforeEach(() => {
    wrapper.find("textarea").simulate("change", {
      target: { value: "new comment!" }
    });
    wrapper.update();
  });

  it("has a text area and user can type in", () => {
    expect(wrapper.find("textarea").prop("value")).toEqual("new comment!");
  });

  it("has a text area to submit a form and clear out after submitted", () => {
    wrapper.find("form").simulate("submit");
    wrapper.update();
    expect(wrapper.find("textarea").prop("value")).toEqual("");
  });
});

afterEach(() => {
  wrapper.unmount();
});
