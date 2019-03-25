import { saveComment } from "actions";
import { SAVE_COMMENT } from "actions/type";

it("has the correct type and payload", () => {
  const response = saveComment("New Comment");

  expect(response).toEqual({
    type: SAVE_COMMENT,
    payload: "New Comment"
  });
});
