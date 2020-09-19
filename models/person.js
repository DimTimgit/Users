const { model, Schema } = require("mongoose");
const newPerson = new Schema({
  username: String,
  password: String,
  email: String,
});
module.exports = model("Person", newPerson);
