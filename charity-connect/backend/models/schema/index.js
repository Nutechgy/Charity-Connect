const { buildSchema } = require('graphql');
const { charities, charity } = require('../resolvers/charityResolvers');
const { addCharity, updateCharity, deleteCharity } = require('../resolvers/mutationResolvers');

const Query = new GraphQLObjectType({
  name: 'Query',
  fields: {
    charities,
    charity,
  },
});

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addCharity,
    updateCharity,
    deleteCharity,
  },
});

module.exports = new GraphQLSchema({
  query: Query,
  mutation: Mutation,
});
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
