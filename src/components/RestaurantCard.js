import { CDN_URL } from "../utils/constants";


const RestaurantCard = ({
  cloudinaryImageId,
  name,
  locality,
  areaName,
  cuisines,
  costForTwo,
  avgRatingString,
}) => {
  return (
        <div className="res-card">
            
            <div>
                <img 
                className="res-logo"
                alt= "res-logo"
                src={CDN_URL + cloudinaryImageId}
                />
            </div>
            <h4>{name}</h4>
            <h4>{locality},</h4>
            <h4>{areaName}, Gorakhpur</h4>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRatingString} stars</h4>
            <h4>{costForTwo} For Two</h4>
        </div>
    );
};

export default RestaurantCard;
