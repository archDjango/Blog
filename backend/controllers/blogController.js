const Blog = require("../models/blogModel");

exports.getAllBlogs = (req, res) => {
  Blog.getAllBlogs((err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(200).json(results);
  });
};

exports.getBlogById = (req, res) => {
  Blog.getBlogById(req.params.id, (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    if (results.length === 0) return res.status(404).json({ message: "Blog not found" });
    res.status(200).json(results[0]);
  });
};

exports.createBlog = (req, res) => {
  const { title, content, author } = req.body;
  if (!title || !content || !author) return res.status(400).json({ message: "All fields are required" });

  Blog.createBlog(title, content, author, (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({ message: "Blog created successfully", blogId: result.insertId });
  });
};

exports.updateBlog = (req, res) => {
  const { title, content, author } = req.body;
  Blog.updateBlog(req.params.id, title, content, author, (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    if (result.affectedRows === 0) return res.status(404).json({ message: "Blog not found" });
    res.status(200).json({ message: "Blog updated successfully" });
  });
};

exports.deleteBlog = (req, res) => {
  Blog.deleteBlog(req.params.id, (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    if (result.affectedRows === 0) return res.status(404).json({ message: "Blog not found" });
    res.status(200).json({ message: "Blog deleted successfully" });
  });
};
