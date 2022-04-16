const products = require('../data/products');
// const products = require("/data/products");

const list = (req, res) => {
    res.json(products);
};
// app.get("/products", function (req, res) {
//   let input = res.json(products);
// });

const show = (req, res) => {
    let product = products.find(product => product._id == req.params.id);
    res.json(product)
};
// app.get("/products/:id", function (req, res) {
//   let product = products.find(product => product._id == req.params.id);
//   res.json(product);
// });

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
// app.post("/products", function (req, res) {
//     let productAdd = {
//         "postId": 1
//     };
//     products.push(productAdd);
//     res.json(products);
//   });
// app.post("/products", function (req, res) {
//     let productsPlus = req.body
//     console.log(productsPlus);
//     productsPlus._id = counter + 1
//     products.push(productsPlus)
//     return res.json(products)
// });

  module.exports = {
    list, show, create
  }