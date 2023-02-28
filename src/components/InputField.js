
import React from "react"




export default class InputField extends React.Component{

    render(){
        console.log(this.props.name[0] +
        this.props.name[this.props.name.length - 1])
        let name = this.props.name.length > 1? this.props.name[0] + this.props.name[this.props.name.length - 1]:this.props.name[0]

        return(
           <input placeholder={this.props.name[0]} 
           className="w-1/2 border-2 
            border-gray-600 
           flex-grow-2 mb-3 rounded-sm"
           onChange={this.props.inputChange} name = {name}>


           </input>
        )
    }
}