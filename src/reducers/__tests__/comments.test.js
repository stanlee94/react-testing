import commentsReducer from "reducers/comments";
import { SAVE_COMMENT } from "actions/type";

it('handles the action with type "SAVE_COMMENT" appropriately', () => {
  const action = {
    type: SAVE_COMMENT,
    payload: "My new Comment!"
  };

  const comments = commentsReducer([], action);

  expect(comments).toEqual(["My new Comment!"]);
});

it("handles all other action type appropriately", () => {
  const comments = commentsReducer([], {});

  expect(comments).toEqual([]);
});
