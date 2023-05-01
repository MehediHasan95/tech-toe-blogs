import { useEffect, useState } from "react";
import "./Blogs.css";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <div className="Blogs">
      <div>1{blogs.length}</div>
      <div>2</div>
    </div>
  );
};

export default Blogs;
