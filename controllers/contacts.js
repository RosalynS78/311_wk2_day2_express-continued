const contacts = require('../data/contacts');
// const contacts = require('./data/contacts');

const list = (req, res) => {
    res.json(contacts);
};
// app.get("/contacts", function (req, res) {
//   let input = res.json(contacts);
// });

const show = (req, res) => {
    let contact = contacts.find(contact => contact._id == req.params.id);
    res.json(contact)
};
// app.get("/contacts/:id", function (req, res) {
//   let contact = contacts.find(contact => contact._id == req.params.id);
//   res.json(contact)
// });

const create = (req, res) => {
    let id = contacts.length + 1;
    let newContact = {
      _id: id,
      body: req.body.body,
      postId: 1
    }
    contacts.push(newContact);
    res.json(contacts);
  }
// app.post("/contacts", function (req, res) {
//     let contactAdd = {
//         "postId": 1
//     };
//     contacts.push(contactAdd);
//     res.json(contacts);
//   });
// app.post("/contacts", function (req, res) {
//     let contactsPlus = req.body
//     console.log(contactsPlus);
//     contactsPlus._id = counter + 1
//     contacts.push(contactsPlus)
//     return res.json(contacts)
// });

  module.exports = {
    list, show, create
  }
