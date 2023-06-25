import { RestaurentCard } from "./RestaurentCard";
import { useState, useEffect } from "react";
import Shimer from "./Shimmer";

const Body = () => {
  // local state variable -- superpowerfull  variable
  const [lsitOfResturants, setLsitOfResturants] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    // fetch function return the promise
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.7036656&lng=76.713567&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    setLsitOfResturants(json?.data?.cards[2]?.data?.data?.cards);
  };
  // Conditional rendering
  // if (lsitOfResturants.length === 0) {
  //   return <Shimer />;
  // }
  return lsitOfResturants.length === 0 ? (
    <Shimer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input type="text" className="search-box" />
          <button className="search-btn" onClick={()=>{
            // filter the resturant cards and update the ui
            // search
          }}>Search</button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = lsitOfResturants.filter((res) => {
              return res.data.avgRating > 4;
            });
            setLsitOfResturants(filteredList);
            console.log("buttonCLick🙋", filteredList);
          }}
        >
          Top Rated Restaurent
        </button>
      </div>
      <div className="res-container">
        {lsitOfResturants.map((restaurant) => (
          <RestaurentCard key={restaurant.data.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};
export default Body;
