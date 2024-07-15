import express from 'express';
import Post from '../models/Post.js'; 

const router = express.Router();

// Create a new post
router.post('/', async (req, res) => {
  const { title, content, author } = req.body;
  try {
    const newPost = new Post({ title, content, author });
    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get all posts
router.get('/', async (req, res) => {
  try {
    const posts = await Post.find();
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update a post
router.put('/:id', async (req, res) => {
  const { title, content } = req.body;
  try {
    const updatedPost = await Post.findByIdAndUpdate(req.params.id, { title, content }, { new: true });
    res.status(200).json(updatedPost);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Delete a post
router.delete('/:id', async (req, res) => {
  try {
    await Post.findByIdAndDelete(req.params.id);
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Add a comment to a post
router.post('/:id/comments', async (req, res) => {
  const { content, author } = req.body;
  try {
    const post = await Post.findById(req.params.id);
    post.comments.push({ content, author });
    await post.save();
    res.status(201).json(post);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
