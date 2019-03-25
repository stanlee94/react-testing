import React from "react";
import moxios from "moxios";
import App from "components/App";
import { mount } from "enzyme";
import Root from "Root";

beforeEach(() => {
  moxios.install();
  moxios.stubRequest("https://jsonplaceholder.typicode.com/comments", {
    status: 200,
    response: [{ name: "Fetch Comment 1" }, { name: "Fetch Comment 2" }]
  });
});

afterEach(() => {
  moxios.uninstall();
});

it("shows a button and able to fetch a list of comments", done => {
  const wrapper = mount(
    <Root>
      <App />
    </Root>
  );

  wrapper.find("#fetch-comments").simulate("click");

  moxios.wait(() => {
    wrapper.update();

    expect(wrapper.find("li").length).toEqual(2);

    done();
  });
});
