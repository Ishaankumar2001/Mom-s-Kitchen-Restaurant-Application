import { useEffect,useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";
import useRestaurantMenu from "../utils/userestaurantMenu";
import ResCategory from "./ResCategory";



const ResMenu=()=>{

   
    const {resId}=useParams();
    const resInfo=useRestaurantMenu(resId);

    const [showIndex,setshowIndex]=useState(0);

   


    if(resInfo==null){
      return <Shimmer/>; 
    }


    const { name,cuisines,costForTwoMessage}=resInfo?.cards[0]?.card?.card?.info;
    
    const {itemCards}=resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

    const categories=resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        (c)=> c.card?.card?.["@type"]=="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
    console.log(categories);


   
    return(
        
        <div className="menu text-center">
            <h1 className="font-bold my-6 text-2xl">{name}</h1>
           <p className="font-bold text-lg">{cuisines.join(", ")} -   {costForTwoMessage}</p>

            {/* categories accordions */}

            {/* Controlled Component */}

         {categories.map((c,index)=>
         <ResCategory key={c?.card?.card.title}
                     data={c?.card?.card}
                     showItems={index==showIndex ?  true : false}
                     setshowIndex={()=>setshowIndex(index)}
                     />)}   



        </div>
    );

};


export default ResMenu;