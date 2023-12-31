import { useEffect, useState } from "react";
import "./Blogs.css";
import News from "../News/News";
import BookMark from "../BookMark/BookMark";
import { toast } from "react-hot-toast";
import Question from "../Question/Question";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [bookmark, setBookmark] = useState([]);
  const [readTime, setReadTime] = useState([]);

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

  const handleMarkAsRead = (min) => {
    setReadTime([...readTime, min]);
  };

  return (
    <div className="Blogs">
      <div>
        {blogs.map((blog) => (
          <News
            key={blog.id}
            news={blog}
            handleBookmarked={handleBookmarked}
            handleMarkAsRead={handleMarkAsRead}
          />
        ))}
        <Question />
      </div>
      <div>
        <BookMark bookmark={bookmark} readTime={readTime} />
      </div>
    </div>
  );
};

export default Blogs;
