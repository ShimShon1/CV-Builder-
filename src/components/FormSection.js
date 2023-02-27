
import React from "react"
import InputField from "./InputField"




export default class FormSection extends React.Component{
    constructor(props){
        super(props)
    }

    CreateInputFields = ()=>{
        
        return this.props.inputs.map((item)=>{
            return <InputField name={item} inputChange = {this.props.inputChange}/>
        })
    }
    render(){
        return(

            <div className="p-1 mb-2">
                <h2 className="text-3xl" >{this.props.name}</h2>
                <div className="flex flex-col justify-around mt-2 ">
                    {
                        this.CreateInputFields()
                    }
                </div>
                
               


            </div>
        
        )
    }
}