const contacts = require('../data/contacts');

const list = (req, res) => {
    res.json(contacts);
};

const show = (req, res) => {
    let contact = contacts.find(contact => contact._id == req.params.id);
    res.json(contact)
};
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

  module.exports = {
    list, show, create
  }
