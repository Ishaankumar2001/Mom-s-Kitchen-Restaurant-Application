import resObj from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";







const Body=()=>{
    const [listres,setlistres]=useState(resObj);
    return(
        <div className='body'>
            <div className='filter'>
                <button className="filter-btn" 
                onClick={()=>{
                    const filteredObj=listres.filter((x) => x.info.avgRating > 4.3);
                    setlistres(filteredObj);
                }
            }
                >Top Rated Restaurant</button>

                
            </div>
            <div className='res-container'>
               
               { listres.map((resturant) => (<RestaurantCard key={resturant.info.id} resData={resturant}/>))}
               
            </div>
        </div>

    );

};

export default Body;