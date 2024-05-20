const Charity = require('../models/Charity');
const { GraphQLID, GraphQLString } = require('graphql');
const CharityType = require('../types/CharityType');

const addCharity = {
  type: CharityType,
  args: {
    name: { type: GraphQLString },
    description: { type: GraphQLString },
  },
  resolve: (parent, args) => {
    const charity = new Charity({
      name: args.name,
      description: args.description,
    });
    return charity.save();
  },
};

const updateCharity = {
  type: CharityType,
  args: {
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    description: { type: GraphQLString },
  },
  resolve: (parent, args) => Charity.findByIdAndUpdate(
    args.id,
    { $set: { name: args.name, description: args.description } },
    { new: true },
  ),
};

const deleteCharity = {
  type: CharityType,
  args: { id: { type: GraphQLID } },
  resolve: (parent, args) => Charity.findByIdAndRemove(args.id),
};

module.exports = { addCharity, updateCharity, deleteCharity };
