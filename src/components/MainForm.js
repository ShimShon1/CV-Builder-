
import React from "react"
import FormSection from "./FormSection"

const personalInputs = [["name"],["last name"],["adress"],["email"],["phone"]]
const educationInputs = [["Instutsion"],["Degree"],["From","Edu"],["To","Edu"]]
const experienceInputs = [["Title"],["Company"],["Description"],["From","Exp"],["To","Exp"]]

export default class MainForm extends React.Component{
    addSection(name,inputs,field = 1){
        let sections = []
        for (let i = 0; i < 0 + field; i++) {
        
        sections.push(<FormSection name = {name} inputs = {inputs.map((item)=>{
            return [...item, i]
        })} inputChange = {this.props.inputChange} />)
        }
        return(
             [sections]
        )
    }
   
    render(){
        return(
           <form  className=" border-2 lg:w-1/2 shadow-md ">
                {/* {console.log(this.props.value)} */}
       
            

            

           {this.addSection("Personal Details", personalInputs)}
           <hr></hr>
           {this.addSection("Education", educationInputs,this.props.eduFields)}
           <hr></hr>
           {this.addSection("Experience", experienceInputs,this.props.expFields)}

           


          </form>
        )
    }
}