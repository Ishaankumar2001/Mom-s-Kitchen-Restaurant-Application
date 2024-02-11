
import RestaurantCard from "./RestaurantCard";
import { useState,useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";






const Body=()=>{
    const [listres,setlistres]=useState([]);
    const [searchText,setsearchText]=useState([]);
    const [filterRes,setfilterRes]=useState([]);

    useEffect(()=>{fetchData();},[]);
    
    const fetchData=async ()=>{
        const data=await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"

        );
        const json=await data.json();
       

        //optional chaining
        setlistres(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setfilterRes(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        console.log(filterRes);
    };

        const onlineStatus=useOnlineStatus();

        if(onlineStatus==false){
            return <h1>Looks like you are Offline please check your Internet</h1>
        }



    //Conditional Rendring
    // if(listres.length ==0){
    //     return <Shimmer/>;
    // }


    return listres.length ==0 ? <Shimmer/> :(
        <div className='body'>
            <div className='filter flex'>
                <div className="search m-4 p-4 ">
                    <input type="text" className="border px-3  py-1 border-solid border-black" value={searchText} onChange={(e)=>{setsearchText(e.target.value)}}/>
                    <button className="px-3  py-1 m-4 bg-green-200 rounded-lg" onClick={()=>{
                        const filteredRes=listres.filter((res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                        setfilterRes(filteredRes);

                    }}>Search</button>
                </div>


                <div className="search m-4 p-4 flex items-center">

                <button className="  px-4 py-2 bg-gray-100 rounded-lg hover:bg-blue-300 " 
                onClick={()=>{
                    const filteredObj=listres.filter((x) => x.info.avgRating > 4.3);
                    setfilterRes(filteredObj);
                }
            }
                >Top Rated Restaurant</button>

                
                </div>
                 
               
            </div>
            
             

            <div>
                  
            </div>

            <div className='res-container flex flex-wrap '>
                
               
               { filterRes.map((resturant) => (<Link to={"/restaurants/"+resturant.info.id}><RestaurantCard key={resturant.info.id} resData={resturant}/></Link>))}
               
            </div>
        </div>

    );

};

export default Body;