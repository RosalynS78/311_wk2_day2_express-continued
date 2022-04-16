const vehicles = require('../data/vehicles');
// const vehicles = require("/data/vehicles");

const list = (req, res) => {
    res.json(vehicles);
};
// app.get("/vehicles", function (req, res) {
//   let input = res.json(vehicles);
// });

const show = (req, res) => {
    let vehicle = vehicles.find(vehicle => vehicle._id == req.params.id);
    res.json(vehicle)
};
// app.get("/vehicles/:id", function (req, res) {
//   let vehicle = vehicles.find(vehicle => vehicle._id == req.params.id);
//   res.json(vehicle);
// });

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
// app.post("/vehicles", function (req, res) {
//     let vehicleAdd = {
//         "postId": 1
//     };
//     vehicles.push(vehicleAdd);
//     res.json(vehicles);
//   });
// app.post("/vehicles", function (req, res) {
//     let vehiclesPlus = req.body
//     console.log(vehiclesPlus);
//     vehiclesPlus._id = counter + 1
//     vehicles.push(vehiclesPlus)
//     return res.json(vehicles)
// });


  module.exports = {
    list, show, create
  }