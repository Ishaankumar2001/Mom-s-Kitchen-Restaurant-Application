//named Import
import { CDN_URL } from '../utils/constants';


const RestaurantCard=(props)=>{
    const {resData}=props;
    const {name,cuisines,avgRating,cloudinaryImageId} =resData?.info;
    const {deliveryTime}=resData?.info?.sla;

    return(
        <div className="res-card m-4 p-2 w-[255px] h-[550px] shadow-lg bg-gray-100 hover:bg-gray-300 rounded-lg">
            <img className='res-logo w-[300px] h-[250px] rounded-lg '
            atl="res-logo"
            src={CDN_URL+cloudinaryImageId}></img>
            <h3 className=" font-bold py-4 px-2 text-lg">{name}</h3>
            <h4 className=" py-4 px-2 ">{cuisines.join(", ")}</h4>
            <h4 className=" py-4 px-2 ">{avgRating}</h4>
            <h4 className="py-4 px-2 ">{deliveryTime} minutes</h4>
       
        </div>
    );
};
export default RestaurantCard;