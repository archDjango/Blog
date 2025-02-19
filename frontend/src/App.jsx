import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import BlogForm from "./pages/BlogForm";
import BlogDetails from "./pages/BlogDetails";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<BlogForm />} />
        <Route path="/blogs/:id" element={<BlogDetails />} />
      </Routes>
    </>
  );
}

export default App;
