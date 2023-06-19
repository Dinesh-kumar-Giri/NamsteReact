import { RestaurentCard } from "./RestaurentCard";
import { useState } from "react";

import resList from "../utils/mockdata";

const Body = () => {
  // local state variable -- superpowerfull  variable
  const [lsitOfResturants, setLsitOfResturants] = useState(resList);

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            //
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
// export { Body };
export default Body;
