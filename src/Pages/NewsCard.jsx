import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { FcRating } from "react-icons/fc";
import { FaEye } from "react-icons/fa";

const NewsCard = ({ news }) => {
  const { _id,title,details,image_url,total_view,rating } = news;
  return (
    <div className="card bg-base-100 shadow-xl mb-10 border-b-4 border-b-black">
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
        {
          <div className="p-4 flex justify-between ">
            <p className="flex items-center gap-2 text-xl font-bold"><FcRating></FcRating>{rating.number}</p>
            <p className="flex items-center justify-end gap-2 text-xl font-bold"><FaEye></FaEye>{total_view}</p>
          </div>
        }
        
      </div>
    </div>
  );
};

NewsCard.propTypes = {
  news: PropTypes.object,
};
export default NewsCard;
