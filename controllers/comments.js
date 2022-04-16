const comments = require('../data/comments');
// const comments = require("/data/comments");

const list = (req, res) => {
    res.json(comments);
};
// app.get("/comments", function (req, res) {
//   let input = res.json(comments);
// });

const show = (req, res) => {
    let comment = comments.find(comment => comment._id == req.params.id);
    res.json(comment)
};
// app.get("/comments/:id", function (req, res) {
//   let comment = comments.find(comment => comment._id == req.params.id);
//   res.json(comment);
// });

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
// app.post("/comments", function (req, res) {
//     let commentAdd = {
//       "postId": 1
//   };
//   comments.push(commentAdd);
//   res.json(comments);
// });
// app.post("/comments", function (req, res) {
//   let commentsPlus = req.body
//   console.log(commentsPlus);
//   commentsPlus._id = counter + 1
//   comments.push(commentsPlus)
//   return res.json(comments)
// });

  module.exports = {
    list, show, create
  }
