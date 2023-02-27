
import React from "react"
import InputField from "./InputField"




export default class FormSection extends React.Component{
  
    CreateInputFields = ()=>{
        
        return this.props.inputs.map((item)=>{
            return <InputField name={item} inputChange = {this.props.inputChange}/>
        })
    }
    render(){
        return(

            <div className=" mb-2">
                <h2 className="text-3xl text-gray-200 bg-slate-600 p-1" >{this.props.name}</h2>
                <div className="flex flex-col justify-around mt-2 p-2">
                    {
                        this.CreateInputFields()
                    }
                </div>
                
               


            </div>
        
        )
    }
}