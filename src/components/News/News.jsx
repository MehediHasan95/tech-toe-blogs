/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./News.css";
import { faBookmark } from "@fortawesome/free-regular-svg-icons";

const News = ({ news, handleBookmarked }) => {
  const { banner, profile, author, create, read, title, hash } = news;
  return (
    <div className="news-card">
      <div className="banner">
        <img src={banner} alt={title} />
      </div>
      <div className="details">
        <div className="profile-header">
          <div className="profile">
            <img src={profile} alt={author} />
            <div>
              <h3>{author}</h3>
              <p>{create}</p>
            </div>
          </div>
          <p>
            {read} min read{" "}
            <FontAwesomeIcon
              className="faBookmark"
              icon={faBookmark}
              onClick={() => handleBookmarked(news)}
            />
          </p>
        </div>
        <h1>{title}</h1>
        <p>{hash.join(" ")}</p>
        <p className="mark-as-read-btn">Mark as read</p>
      </div>
    </div>
  );
};

export default News;
