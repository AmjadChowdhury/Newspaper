import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const NewsCard = ({ news }) => {
  const { _id,title,details,image_url } = news;
  return (
    <div className="card bg-base-100 shadow-xl mb-10">
      <figure>
        <img
          src={image_url}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        {
            details.length > 200 ?
            <p>{details.slice(0,200)} <Link to={`/news/${_id}`} className="font-bold text-blue-600">Read More .....</Link></p> :
            <p>{details}</p>
        }
        
      </div>
    </div>
  );
};

NewsCard.propTypes = {
  news: PropTypes.object,
};
export default NewsCard;
