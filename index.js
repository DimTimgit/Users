const { ApolloServer, PubSub } = require("apollo-server");
const resolvers = require("./resolvers");
const typeDefs = require("./typeDefs.js");
let pubSub = new PubSub();

let mongoose = require("mongoose");
mongoose.set("useUnifiedTopology", true);

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => ({ req, pubSub }),
});

mongoose
  .connect(
    "mongodb+srv://dimbyzin:dhl78asd@cluster0.nlnrc.mongodb.net/byzin?retryWrites=true&w=majority",
    { useNewUrlParser: true }
  )
  .then(() => {
    console.log("database connected");
    return server.listen();
  })
  .then((res) => {
    console.log(`server is runnig at ${res.url}`);
  })
  .catch((err) => {
    console.log(err);
  });
