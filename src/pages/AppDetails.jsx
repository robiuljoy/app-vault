import { Download, Star, ThumbsUp } from "lucide-react";
import React from "react";
import { useLoaderData, useParams } from "react-router";

const AppDetails = () => {
  const { id } = useParams();
  const appId = parseInt(id);
  const data = useLoaderData();
  const singleData = data.find((app) => app.id === appId);
  console.log(singleData);
  return (
    <>
      <div>
        <div>
          <div className="top-left-part">
            <img src="" alt="" />
          </div>
          <div className="top-right-part">
            <div className="title-part ">
              <h2>{singleData.title}</h2>
              <span>
                Developed by <span>Productive.io</span>
              </span>
            </div>
            <div className="review-part">
              <div className="downloads">
                <Download /> <span>Downloads</span>
                <span>8M</span>
              </div>
              <div className="avgRating">
                <Star /> <span>Average Ratings</span>
                <span>4.9</span>
              </div>
              <div className="totalReviews">
                <ThumbsUp /> <span>Total Reviews</span>
                <span>54K</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppDetails;
