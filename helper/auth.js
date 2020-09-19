const jwt = require("jsonwebtoken");
const { AuthenticationError } = require("apollo-server");
module.exports.auth = (context) => {
  const authHeader = context.req.headers.authorization;
  if (authHeader) {
    try {
      const person = jwt.verify(authHeader, "SOME PRIVAT KEY");
      return person;
    } catch (err) {
      throw new AuthenticationError("Inavalid token");
    }
  } else {
    throw new AuthenticationError("Вы не залогинены");
  }
};
