// Create web server
// Create a comment route
// Create a comment controller
// Create a comment model
// Create a comment service
// Create a comment data access object
// Create a comment repository
// Create a comment database
// Create a comment table

// Path: comment.js
// Create a comment route
const express = require('express');
const router = express.Router();
const commentController = require('./commentController');

router.post('/', commentController.createComment);
router.get('/', commentController.getAllComments);
router.get('/:id', commentController.getCommentById);
router.put('/:id', commentController.updateComment);
router.delete('/:id', commentController.deleteComment);

module.exports = router;

// Path: commentController.js
// Create a comment controller
const commentService = require('./commentService');

const createComment = (req, res) => {
  const comment = req.body;
  commentService.createComment(comment, (err, result) => {
    if (err) {
      return res.status(400).json({ message: err });
    }
    res.json({ message: 'Comment created successfully' });
  });
};

const getAllComments = (req, res) => {
  commentService.getAllComments((err, comments) => {
    if (err) {
      return res.status(400).json({ message: err });
    }
    res.json(comments);
  });
};

const getCommentById = (req, res) => {
  const id = req.params.id;
  commentService.getCommentById(id, (err, comment) => {
    if (err) {
      return res.status(400).json({ message: err });
    }
    res.json(comment);
  });
}