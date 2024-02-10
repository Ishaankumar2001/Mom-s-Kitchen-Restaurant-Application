
import User from "./User";
import UserClass from "./UserClass";
import React from "react";




class About extends React.Component{


    constructor(){
        super();

        console.log("Parent Constructor");
    };
    componentDidMount(){
        console.log("Parent componentDidMount");
    }        
    


render(){
    console.log("Parent Render");
    return(
        <div>
         <h1>About</h1>
         <h2>This is a Restaurant Website.......</h2>
         <User name={"Bittu"}/>
         <UserClass name={"Ishaan"}/>
         <UserClass name={"Elon"}/>
        </div>
 
 
     );
}

}




export default About;