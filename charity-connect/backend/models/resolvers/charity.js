const Charity = require('../models/Charity');

const getCharities = async () => {
  return await Charity.find();
};

const getCharity = async (args) => {
  return await Charity.findById(args.id);
};

const createCharity = async (args) => {
  const { name, description, url } = args;
  const charity = new Charity({
    name,
    description,
    url,
  });
  await charity.save();
  return charity;
};

const updateCharity = async (args) => {
  const { id, name, description, url, donations } = args;
  return await Charity.findByIdAndUpdate(id, { name, description, url, donations }, { new: true });
};

const deleteCharity = async (args) => {
  await Charity.findByIdAndRemove(args.id);
  return 'Charity deleted';
};

module.exports = {
  getCharities,
  getCharity,
  createCharity,
  updateCharity,
  deleteCharity,
};
