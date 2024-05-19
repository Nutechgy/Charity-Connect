const { buildSchema } = require('graphql');

module.exports = buildSchema(`
  type Charity {
    id: ID!
    name: String!
    description: String!
    url: String!
    donations: Int!
  }

  type Query {
    getCharities: [Charity]
    getCharity(id: ID!): Charity
  }

  type Mutation {
    createCharity(name: String!, description: String!, url: String!): Charity
    updateCharity(id: ID!, name: String, description: String, url: String, donations: Int): Charity
    deleteCharity(id: ID!): String
  }
`);
