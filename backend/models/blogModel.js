const db = require("../config/db");

// Fetch all blogs
const getAllBlogs = (callback) => {
  db.query("SELECT * FROM blogs ORDER BY created_at DESC", callback);
};

// Fetch a single blog by ID
const getBlogById = (id, callback) => {
  db.query("SELECT * FROM blogs WHERE id = ?", [id], callback);
};

// Create a new blog
const createBlog = (title, content, author, callback) => {
  db.query("INSERT INTO blogs (title, content, author) VALUES (?, ?, ?)", [title, content, author], callback);
};

// Update a blog
const updateBlog = (id, title, content, author, callback) => {
  db.query("UPDATE blogs SET title=?, content=?, author=? WHERE id=?", [title, content, author, id], callback);
};

// Delete a blog
const deleteBlog = (id, callback) => {
  db.query("DELETE FROM blogs WHERE id=?", [id], callback);
};

module.exports = { getAllBlogs, getBlogById, createBlog, updateBlog, deleteBlog };
