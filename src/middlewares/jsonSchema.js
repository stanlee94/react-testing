export default {
  definitions: {},
  $schema: "http://json-schema.org/draft-07/schema#",
  $id: "http://example.com/root.json",
  type: "object",
  title: "The Root Schema",
  required: ["comments", "authStatus"],
  properties: {
    comments: {
      $id: "#/properties/comments",
      type: "array",
      title: "The Comments Schema",
      items: {
        $id: "#/properties/comments/items",
        type: "string",
        title: "The Items Schema",
        default: "",
        examples: ["Comment 1", "Comment 2"],
        pattern: "^(.*)$"
      }
    },
    authStatus: {
      $id: "#/properties/authStatus",
      type: "boolean",
      title: "The Authstatus Schema",
      default: false,
      examples: [false]
    }
  }
};
