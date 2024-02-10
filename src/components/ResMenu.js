import { useEffect,useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";
import useRestaurantMenu from "../utils/userestaurantMenu";



const ResMenu=()=>{

   
    const {resId}=useParams();
    const resInfo=useRestaurantMenu(resId);

   


    if(resInfo==null){
      return <Shimmer/>; 
    }


    const { name,cuisines,costForTwoMessage}=resInfo?.cards[0]?.card?.card?.info;
    
    const {itemCards}=resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;


   
    return(
        
        <div className="menu">
            <h1>{name}</h1>
           <h3>{cuisines.join(", ")} -{costForTwoMessage}</h3>
            <ul>
                
                {itemCards.map((item)=>(<li key={item.card.info.id}>{item?.card?.info?.name} - Rs. {item?.card?.info?.defaultPrice/100 || item?.card?.info?.price/100 }</li>))}
                
            </ul>
        </div>
    );

};


export default ResMenu;