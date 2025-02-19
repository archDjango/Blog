import axios from "axios";

const API_URL = "http://localhost:5000/blogs";

export const getBlogs = async () => {
  const res = await axios.get(API_URL);
  return res.data;
};

export const createBlog = async (blog) => {
  await axios.post(API_URL, blog);
};
