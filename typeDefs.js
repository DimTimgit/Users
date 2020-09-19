const { gql } = require("apollo-server");

module.exports = gql`
  type User {
    id: ID!
    name: String
    email: String
    username: Person!
  }

  type Person {
    id: ID!
    username: String!
    token: String!
    email: String!
  }

  type Query {
    getUsers: [User]
    getUser(id: ID!): User
  }

  type Mutation {
    register(inputData: InputRegister): Person!
    login(username: String!, password: String!): Person!

    addUser(name: String!, email: String!): User!
    deleteUser(id: ID!): User!
  }

  input InputUser {
    name: String!
    email: String!
  }
  input InputRegister {
    email: String!
    password: String!
    confirmPassword: String!
    username: String!
  }

  type Subscription {
    newUser: User!
  }
`;
