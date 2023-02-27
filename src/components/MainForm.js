
import React from "react"
import FormSection from "./FormSection"

const personalInputs = ["name","last name","adress","email","phone"]
const educationInputs = ["Instutsion","Degree","From","To"]
const experienceInputs = ["Title","Company","Description","From","To"]

export default class MainForm extends React.Component{
   
    render(){
        return(
           <form  className=" border-2 lg:w-1/2 border-black p-4">
                {/* {console.log(this.props.value)} */}
       
            <FormSection name = "Personal Details" inputs = {personalInputs} inputChange = {this.props.inputChange} />
            
            <hr></hr>

            <FormSection name = "Education" inputs = {educationInputs} inputChange = {this.props.inputChange} />
            
            <hr></hr>

           
           
            <FormSection name = "Experience" inputs = {experienceInputs} inputChange = {this.props.inputChange} />


          </form>
        )
    }
}