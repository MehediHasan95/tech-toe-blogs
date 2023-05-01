/* eslint-disable react/prop-types */
import "./News.css";

const News = ({ news }) => {
  console.log(news);
  const { banner, profile, author, create, read, title, hash } = news;
  return (
    <div>
      <h1>News</h1>
    </div>
  );
};

export default News;
