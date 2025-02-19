import { useEffect, useState } from "react";
import { getBlogs } from "../services/blogService";
import BlogCard from "../components/BlogCard";
import "../styles/Home.css";

const Home = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    getBlogs().then((data) => setBlogs(data));
  }, []);

  return (
    <div className="home-container">
      <h2>All Blogs</h2>
      <div className="blog-list">
        {blogs.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default Home;
