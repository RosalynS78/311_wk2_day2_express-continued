const products = require('../data/products');

const list = (req, res) => {
    res.json(products);
};

const show = (req, res) => {
    let product = products.find(product => product._id == req.params.id);
    res.json(product)
};
const create = (req, res) => {
    let id = products.length + 1;
    let newProduct = {
      _id: id,
      body: req.body.body,
      postId: 1
    }
    products.push(newProduct);
    res.json(products);
  }

  module.exports = {
    list, show, create
  }