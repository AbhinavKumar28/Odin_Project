// src/utils/validateTodo.js
import Ajv from "ajv";

const allowedStatuses=["active", "archived", "deleted"];

const schema = {
  type: "object",
  properties: {
    status: {
      type: "string",
      enum: allowedStatuses
    },
    title: {
      type: "string",
      minLength: 1
    }
  },
  required: ["status", "title"],
  additionalProperties: false
};

const ajv = new Ajv();
const validate = ajv.compile(schema);

export function validateTodo(todoItem) {
  const valid = validate(todoItem);
  if (!valid) {
    console.error("Invalid:", validate.errors);
  } else {
    console.log("Valid To-Do item");
  }
  return valid;
}
