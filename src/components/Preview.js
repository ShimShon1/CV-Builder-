
import React from "react"

export default class Preview extends React.Component{
 
    render(){
        return(
           <div className="border-2 max-h-screen lg:w-1/2 border-black">
                <h1>Name: {this.props.state.name}</h1>
                <h1>Last Name : {this.props.state["last name"]}</h1>

           </div>
        )
    }
}