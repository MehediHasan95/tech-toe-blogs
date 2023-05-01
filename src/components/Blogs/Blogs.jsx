import { useEffect, useState } from "react";
import "./Blogs.css";
import News from "../News/News";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <div className="Blogs">
      <div>
        {blogs.map((blog) => (
          <News key={blog.id} news={blog} />
        ))}
      </div>
      <div>2</div>
    </div>
  );
};

export default Blogs;
