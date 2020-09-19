const { model, Schema } = require("mongoose");
const userSchema = new Schema({
  name: String,
  email: String,
  username: String,
});

module.exports = model("user", userSchema);
