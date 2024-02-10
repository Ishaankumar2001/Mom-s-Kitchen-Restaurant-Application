import { useEffect,useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";



const ResMenu=()=>{

    const [resInfo,setresInfo]=useState(null);
    const {resId}=useParams();


    useEffect(()=>{
        fetchMenu();
    },[]);

console.log(resId);
    const fetchMenu=async()=>{
       const data=await fetch(MENU_API+resId);
        const json= await data.json();
        console.log(json);
        setresInfo(json.data)
    };


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