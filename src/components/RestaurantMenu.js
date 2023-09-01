import { useEffect, useState} from "react";
import Shimmer from "./Shimmer";


const RestaurantMenu = () => {

    const [resInfo, setResInfo] = useState(null);

useEffect(()=>{
    fetchMenu();
}, []);

const fetchMenu = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.7954108&lng=83.34742279999999&restaurantId=441106&catalog_qa=undefined&submitAction=ENTER"
    );
    const json = await data.json();
    console.log(json);
    setResInfo(json.data);
};

const {itemCards} = (resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card) || {} ;
console.log(itemCards);

const { name, city, cuisines } = resInfo?.cards[0]?.card?.card?.info || {} ;



    return resInfo===null ? (
    <Shimmer/> 
    ): (
        <div className="menu">
        <h1>{name}</h1>
        <h3>{city}</h3>
        <p>{cuisines.join(", ")}</p>
        <h2>Menu</h2>
        <img/>
        <ul>
  {itemCards && itemCards.length > 0 ? (
    itemCards.map((item) => (
      <li key={item.card.info.id}>{item.card.info.name}</li>
    ))
  ) : (
    <li>No items available</li>
  )}
</ul>
        </div>
    );
};

export default RestaurantMenu;