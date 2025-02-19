import { Link } from "react-router-dom";
import "../styles/BlogCard.css";

const BlogCard = ({ blog }) => {
  return (
    <div className="blog-card">
      <h3>{blog.title}</h3>
      <p>{blog.author}</p>
      <Link to={`/blogs/${blog.id}`}>Read More</Link>
    </div>
  );
};

export default BlogCard;
