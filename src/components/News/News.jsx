/* eslint-disable react/prop-types */
import "./News.css";

const News = ({ news }) => {
  console.log(news);
  const { banner, profile, author, create, read, title, hash } = news;
  return (
    <div className="news-card">
      <div className="banner">
        <img src={banner} alt="" />
      </div>
      <div className="details">
        <div className="profile"></div>
      </div>
    </div>
  );
};

export default News;
