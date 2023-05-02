import { useEffect, useState } from "react";
import "./Blogs.css";
import News from "../News/News";
import BookMark from "../BookMark/BookMark";
import { toast } from "react-hot-toast";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [bookmark, setBookmark] = useState([]);

  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  const handleBookmarked = (news) => {
    const isExist = bookmark.find((e) => e.id === news.id);
    if (isExist) {
      toast.error("Already Bookmarked");
    } else {
      setBookmark([...bookmark, news]);
      toast.success("Bookmark succeeded");
    }
  };

  return (
    <div className="Blogs">
      <div>
        {blogs.map((blog) => (
          <News key={blog.id} news={blog} handleBookmarked={handleBookmarked} />
        ))}
      </div>
      <div>
        <BookMark bookmark={bookmark} />
      </div>
    </div>
  );
};

export default Blogs;
