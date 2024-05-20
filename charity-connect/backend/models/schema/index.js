const { GraphQLObjectType, GraphQLSchema, GraphQLString, GraphQLID, GraphQLList, GraphQLInt } = require('graphql');
const Charity = require('../models/Charity');

// Define CharityType
const CharityType = new GraphQLObjectType({
  name: 'Charity',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    description: { type: GraphQLString },
    url: { type: GraphQLString },
    donations: { type: GraphQLInt },
  }),
});

// Define RootQuery
const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    charities: {
      type: new GraphQLList(CharityType),
      resolve(parent, args) {
        return Charity.find();
      },
    },
    charity: {
      type: CharityType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return Charity.findById(args.id);
      },
    },
  },
});

// Define Mutations
const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addCharity: {
      type: CharityType,
      args: {
        name: { type: GraphQLString },
        description: { type: GraphQLString },
        url: { type: GraphQLString },
      },
      resolve(parent, args) {
        const charity = new Charity({
          name: args.name,
          description: args.description,
          url: args.url,
          donations: 0,
        });
        return charity.save();
      },
    },
    updateCharity: {
      type: CharityType,
      args: {
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        description: { type: GraphQLString },
        url: { type: GraphQLString },
        donations: { type: GraphQLInt },
      },
      resolve(parent, args) {
        return Charity.findByIdAndUpdate(args.id, {
          $set: {
            name: args.name,
            description: args.description,
            url: args.url,
            donations: args.donations,
          },
        }, { new: true });
      },
    },
    deleteCharity: {
      type: CharityType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return Charity.findByIdAndRemove(args.id);
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
});
