
import React from "react"




export default class InputField extends React.Component{

    render(){
        return(
           <input placeholder={this.props.name} className="border-2  border-black lg:w-1/2 mb-3"
           onChange={this.props.inputChange} name = {this.props.name}>

           </input>
        )
    }
}