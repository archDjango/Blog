import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../styles/BlogDetails.css";

const BlogDetails = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5000/blogs/${id}`)
      .then((response) => {
        setBlog(response.data);
      })
      .catch((error) => console.error("Error fetching blog:", error));
  }, [id]);

  if (!blog) {
    return <p className="loading">Loading...</p>;
  }

  return (
    <div className="blog-details">
      <h2>{blog.title}</h2>
      <p><strong>Author:</strong> {blog.author}</p>
      <p className="content">{blog.content}</p>
      <p className="timestamp">Published on: {new Date(blog.created_at).toLocaleDateString()}</p>
    </div>
  );
};

export default BlogDetails;
