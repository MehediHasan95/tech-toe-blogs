/* eslint-disable react/prop-types */
import "./BookMark.css";

const BookMark = ({ bookmark, readTime }) => {
  let totalTime = 0;

  for (const minutes of readTime) {
    totalTime = totalTime + minutes;
  }

  return (
    <div className="BookMark">
      <div className="spent-time">
        <h3>Spent time on read: {totalTime} min</h3>
      </div>

      <div className="marked-blogs">
        <h3> Bookmarked Blogs: {bookmark.length}</h3>
        {bookmark.map((e) => (
          <h4 key={e.id}>{e.title}</h4>
        ))}
      </div>
    </div>
  );
};

export default BookMark;
