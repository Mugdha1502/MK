import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './Blog.module.css'; // Import CSS module

const Blog = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const [posts, setPosts] = useState([]); // Initialize posts as an empty array
  const [newPost, setNewPost] = useState({ title: '', content: '', author: '', date: '' });
  const [editPost, setEditPost] = useState(null);
  const [newComment, setNewComment] = useState('');

  useEffect(() => {
    axios.get('http://localhost:5000/api/posts')
      .then(response => {
        console.log(response.data); // Log response to check the format
        if (Array.isArray(response.data)) {
          setPosts(response.data);
        } else {
          console.error('Unexpected response format:', response.data);
        }
      })
      .catch(error => console.error('Error fetching posts:', error));
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === 'Mugdha15' && password === 'Mugdha@1502') {
      setLoggedIn(true);
    } else {
      alert('Invalid credentials. Please try again.');
      setUsername('Mugdha15');
      setPassword('Mugdha@1502');
    }
  };

  const handleLogout = () => {
    setLoggedIn(false);
    setUsername('');
    setPassword('');
  };

  const handleCreatePost = (e) => {
    e.preventDefault();
    const dateCreated = new Date().toLocaleDateString();
    const newPostWithDetails = { ...newPost, date: dateCreated, comments: [] };

    axios.post('http://localhost:5000/api/posts', newPostWithDetails)
      .then(response => {
        setPosts([...posts, response.data]);
        setNewPost({ title: '', content: '', author: '', date: '' });
      })
      .catch(error => console.error('Error creating post:', error));
  };

  const handleEditPost = (e) => {
    e.preventDefault();

    axios.put(`http://localhost:5000/api/posts/${editPost}`, newPost)
      .then(response => {
        const updatedPosts = posts.map((post) =>
          post._id === editPost ? response.data : post
        );
        setPosts(updatedPosts);
        setEditPost(null);
        setNewPost({ title: '', content: '', author: '', date: '' });
      })
      .catch(error => console.error('Error updating post:', error));
  };

  const handleDeletePost = (id) => {
    axios.delete(`http://localhost:5000/api/posts/${id}`)
      .then(() => {
        const updatedPosts = posts.filter((post) => post._id !== id);
        setPosts(updatedPosts);
      })
      .catch(error => console.error('Error deleting post:', error));
  };

  const handleAddComment = (postId) => {
    const comment = { content: newComment, author: username || 'Guest', date: new Date().toLocaleDateString() };

    axios.post(`http://localhost:5000/api/posts/${postId}/comments`, comment)
      .then(response => {
        const updatedPosts = posts.map((post) =>
          post._id === postId ? response.data : post
        );
        setPosts(updatedPosts);
        setNewComment('');
      })
      .catch(error => console.error('Error adding comment:', error));
  };

  return (
    <div className={styles.blog}>
      <div className={styles['blog-container']}>
        {!loggedIn ? (
          <div>
            <h2>Admin Login</h2>
            <form onSubmit={handleLogin}>
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
              <br />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <br />
              <button type="submit">Login</button>
            </form>
          </div>
        ) : (
          <div>
            <h2>Welcome, {username}!</h2>
            <button className={styles.logout} onClick={handleLogout}>Logout</button>

            <form onSubmit={editPost !== null ? handleEditPost : handleCreatePost}>
              <input
                type="text"
                placeholder="Title"
                value={newPost.title}
                onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
                required
              />
              <br />
              <input
                type="text"
                placeholder="Author"
                value={newPost.author}
                onChange={(e) => setNewPost({ ...newPost, author: e.target.value })}
                required
              />
              <br />
              <textarea
                placeholder="Content"
                value={newPost.content}
                onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
                required
              />
              <br />
              <button type="submit">{editPost !== null ? 'Update Post' : 'Create Post'}</button>
            </form>
          </div>
        )}

        {Array.isArray(posts) && posts.map((post) => (
          <div key={post._id} className={styles.post}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
            <p>Author: {post.author}</p>
            <p>Date: {post.date}</p>

            <div className={styles.comments}>
              <h4>Comments:</h4>
              {post.comments.length === 0 ? (
                <p>No comments yet.</p>
              ) : (
                post.comments.map((comment) => (
                  <div key={comment._id} className={styles.comment}>
                    <p>{comment.content}</p>
                    <p>By: {comment.author}</p>
                    <p>Date: {comment.date}</p>
                  </div>
                ))
              )}

              <form onSubmit={(e) => { e.preventDefault(); handleAddComment(post._id); }}>
                <input
                  type="text"
                  placeholder="Your comment"
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  required
                />
                <button type="submit">Add Comment</button>
              </form>
            </div>

            {loggedIn && (
              <>
                <button onClick={() => setEditPost(post._id)}>Edit</button>
                <button onClick={() => handleDeletePost(post._id)}>Delete</button>
              </>
            )}
          </div>
        ))}

        <div className={styles['blog-section']}>
          <h2>Latest Posts</h2>
          {Array.isArray(posts) && posts.length === 0 ? (
            <p>No posts available.</p>
          ) : (
            posts.map((post) => (
              <div key={post._id} className={styles.post}>
                <h3>{post.title}</h3>
                <p>{post.content}</p>
                <p>Author: {post.author}</p>
                <p>Date: {post.date}</p>
              </div>
            ))
          )}
        </div>
      </div>

      <footer className={styles.footer}>
        <p>&copy; 2024 Mugdha Kamble.</p>
      </footer>
    </div>
  );
};

export default Blog;
