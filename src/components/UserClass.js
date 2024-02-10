import React from 'react';

class UserClass extends React.Component{


        constructor(props){
            super(props);

            console.log(this.props.name +"Child Constructor");

                            
            this.state={
                count:0,
              
            };
        };

        componentDidMount(){
            console.log(this.props.name +"Child componentDidMount");
        }

        render(){
            console.log(this.props.name +"Child Render");
            return(
                <div className="user-card">
                     <h1>..........Class based Component........</h1>
            <h1>Count : {this.state.count}</h1>
            <button onClick={()=>
                {this.setState({
                    count:this.state.count+1,
                });
            }}  >Increment Counter</button>

        </div>
            );
        };

}

export default UserClass;


