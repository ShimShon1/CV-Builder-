
import React from "react"




export default class InputField extends React.Component{

    render(){
        return(
           <input placeholder={this.props.name[0]} className="border-2  border-gray-600 lg:w-1/2 mb-3 rounded-sm"
           onChange={this.props.inputChange} name = {this.props.name[0]}>

           </input>
        )
    }
}