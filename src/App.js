import React from "react";
import "./styles/tailwind.css"
import MainForm from "./components/MainForm"
import Preview from "./components/Preview"


class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      expFields:2,
      eduFields:2,
    }
  }

  fieldsChange = (field,action)=>{
    console.log('called',this.state);

    if(action === "+"){
      this.setState(
        {[field]:(this.state[field] + 1)}
      )


    }else{
      if(this.state[field] > 1 ){
        this.setState(
          {[field]:(this.state[field] - 1)}
        )
      }
    
    }
  }


  inputChange = (e)=>{
    console.log(e.target.name);

    console.log(e.target.value);

    this.setState(
      {[e.target.name]: [e.target.value]}
    )
  }
  render(){
      return (
        <div className="App text-xl lg:flex p-4 justify-around gap-5 min-h-screen
        ">
        
          <MainForm inputChange = {this.inputChange} eduFields={this.state.eduFields} expFields={this.state.expFields}
           fieldsChange = {this.fieldsChange}/>

          <Preview state = {this.state}/>

        
        </div>
    )}
}

export default App;
