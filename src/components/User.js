
import { useState } from "react";
const User=(props)=>{

    const [count,setCount]= useState([0]);
   
   
    return (
       
        <div className="user-card">
            <h1>..........Function based Component........</h1>
            <h1>Count : {count}</h1>
             <button onClick={() => {
                      
                        setCount(prevCount => prevCount + 1);

             }
                
               
                
                
                }>Increase Counter</button>

        </div>
    );
};

export default User;
