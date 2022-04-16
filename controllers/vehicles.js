const vehicles = require('../data/vehicles');

const list = (req, res) => {
    res.json(vehicles);
};

const show = (req, res) => {
    let vehicle = vehicles.find(vehicle => vehicle._id == req.params.id);
    res.json(vehicle)
};
const create = (req, res) => {
    let id = vehicles.length + 1;
    let newVehicle = {
      _id: id,
      body: req.body.body,
      postId: 1
    }
    vehicles.push(newVehicle);
    res.json(vehicles);
  }

  module.exports = {
    list, show, create
  }