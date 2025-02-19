import { useState } from "react";
import { createBlog } from "../services/blogService";
import { useNavigate } from "react-router-dom";
import "../styles/BlogForm.css";

const BlogForm = () => {
  const [blog, setBlog] = useState({ title: "", content: "", author: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setBlog({ ...blog, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createBlog(blog);
    navigate("/");
  };

  return (
    <div className="form-container">
      <h2>Add New Blog</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="title" placeholder="Title" onChange={handleChange} required />
        <textarea name="content" placeholder="Content" onChange={handleChange} required />
        <input type="text" name="author" placeholder="Author" onChange={handleChange} required />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default BlogForm;
