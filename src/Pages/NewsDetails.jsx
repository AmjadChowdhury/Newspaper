import { useLoaderData, useParams } from "react-router-dom";
import Header from "../shared/Header";
import Navbar from "../shared/Navbar";
import RightSideNav from "../shared/RightSideNav";

const NewsDetails = () => {
  const { id } = useParams();
  const news = useLoaderData();
  const newsD = news.find((aNews) => aNews._id == id);
  console.log(newsD);
  const {details,image_url,title} = newsD

  return (
    <div>
      <Header></Header>
      <Navbar></Navbar>
      <div className="grid grid-cols-1 lg:grid-cols-4">
        <div className="lg:col-span-3">
          <div className="card bg-base-100 shadow-xl">
            <figure>
              <img
                src={image_url}
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{title}</h2>
              <p>{details}</p>
            </div>
          </div>
        </div>
        <div>
          <RightSideNav></RightSideNav>
        </div>
      </div>
    </div>
  );
};

export default NewsDetails;
