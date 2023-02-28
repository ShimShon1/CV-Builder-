
import React from "react"
import FormSection from "./FormSection"
import SectionHeader from "./SectionHeader"


const personalInputs = [["name"],["last name"],["address"],["email"],["phone"]]
const educationInputs = [["institution"],["degree"],["fromedu"],["toedu"]]
const experienceInputs = [["company"],["title"],["fromexp"],["toexp"],["description"],]

export default class MainForm extends React.Component{
    showPreview(){
       document.querySelector(".preview").classList.remove("hidden")
       document.querySelector("form").classList.add("hidden")
    }

    addSection(name,inputs,field = 1){
        let sections = []
        for (let i = 1; i < 0 + field; i++) {
        
            sections.push(<FormSection name = {name} inputs = {inputs.map((item)=>{
                if(i > 0){

                    return [...item, i]

                }else{
                    return [...item,]
                }
            })} inputChange = {this.props.inputChange} />)
            }
        return(
             [sections]
        )
    }
   
    render(){
        return(
           <form  className=" border-2 lg:w-1/2 shadow-md ">
       
            <SectionHeader name="Personal Details" expandable ={false} fieldsChange  = {this.props.fieldsChange} />



            <FormSection  inputs={personalInputs} inputChange = {this.props.inputChange} name="personal" />

           {this.addSection("Personal Details", personalInputs)}

           <hr></hr>

        
           <SectionHeader name="Education"  fieldsChange  = {this.props.fieldsChange}/>
           <FormSection  inputs={educationInputs} inputChange = {this.props.inputChange} />

           {this.addSection("Education", educationInputs,this.props.eduFields)}

           <hr></hr>
           <SectionHeader name="Experience" fieldsChange  = {this.props.fieldsChange}/>
           <FormSection  inputs={experienceInputs} inputChange = {this.props.inputChange} />

           {this.addSection("Experience", experienceInputs,this.props.expFields)}
           <hr></hr>
            <div className="w-full flex p-2 lg:hidden">
                <button type="button" className=" border text-white bg-slate-500 px-5 py-3 w-40 m-auto rounded-md
                hover:bg-slate-600" onClick={this.showPreview}>Preview</button>
            </div>
          </form>
        )
    }
}