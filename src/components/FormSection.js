
import React from "react"
import InputField from "./InputField"




export default class FormSection extends React.Component{
  
    CreateInputFields = ()=>{
        
        return this.props.inputs.map((item,i)=>{
            return <InputField name={item} inputChange = {this.props.inputChange}/>
        })
    }

    displayArea(){
        if(this.props.name === "personal"){

            return (
            <div className={`grow ml-10 inline-block absolute right-1 w-2/5 lg:w-1/4 lg:right-10 2xl:right-40`}>
                <textarea onChange={this.props.inputChange} name ="about"
                className="border-2 border-black w-full h-40"  placeholder="About"/>
            </div>
    
            )

        }
      
    }
    render(){
        return(

            <div className=" mb-2  flex relative items-center ">
                {/* <h2 className="text-3xl text-gray-200 bg-slate-600 p-1" >{this.props.name}</h2> */}
                <div className=" flex flex-col  mt-2 p-2 grow">
                    {
                        this.CreateInputFields()
                    }
                </div>
                   
                    

                    {
                            this.displayArea()
                        }

               


            </div>
        
        )
    }
}