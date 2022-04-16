const comments = require('../data/comments');

const list = (req, res) => {
    res.json(comments);
};

const show = (req, res) => {
    let comment = comments.find(comment => comment._id == req.params.id);
    res.json(comment)
};
const create = (req, res) => {
    let id = comments.length + 1;
    let newComment = {
      _id: id,
      body: req.body.body,
      postId: 1
    }
    comments.push(newComment);
    res.json(comments);
  }

  module.exports = {
    list, show, create
  }
