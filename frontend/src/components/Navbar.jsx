import { Link } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Blog App</h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/create">Add Blog</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
