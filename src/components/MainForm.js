
import React from "react"
import FormSection from "./FormSection"
import SectionHeader from "./SectionHeader"


const personalInputs = [["name"],["last name"],["adress"],["email"],["phone"]]
const educationInputs = [["institution"],["degree"],["from","edu"],["to","edu"]]
const experienceInputs = [["title"],["company"],["description"],["from","exp"],["to","exp"]]

export default class MainForm extends React.Component{
    addSection(name,inputs,field = 1){
        let sections = []
        for (let i = 1; i < 0 + field; i++) {
        
            sections.push(<FormSection name = {name} inputs = {inputs.map((item)=>{
                return [...item, i]
            })} inputChange = {this.props.inputChange} />)
            }
        return(
             [sections]
        )
    }
   
    render(){
        console.log(this.props);
        return(
           <form  className=" border-2 lg:w-1/2 shadow-md ">
                {/* {console.log(this.props.value)} */}
       
            <SectionHeader name="Personal Details" expandable ={false} fieldsChange  = {this.props.fieldsChange} />



            <FormSection  inputs={personalInputs} inputChange = {this.props.inputChange} />

           {this.addSection("Personal Details", personalInputs)}

           <hr></hr>

        
           <SectionHeader name="Education"  fieldsChange  = {this.props.fieldsChange}/>
           <FormSection  inputs={educationInputs} inputChange = {this.props.inputChange} />

           {this.addSection("Education", educationInputs,this.props.eduFields)}

           <hr></hr>
           <SectionHeader name="Experience" fieldsChange  = {this.props.fieldsChange}/>
           <FormSection  inputs={experienceInputs} inputChange = {this.props.inputChange} />

           {this.addSection("Experience", experienceInputs,this.props.expFields)}

           

          </form>
        )
    }
}