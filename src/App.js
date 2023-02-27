import React from "react";
import "./styles/tailwind.css"
import MainForm from "./components/MainForm"
import Preview from "./components/Preview"


class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      expFields:2,
      eduFields:1,
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
        
          <MainForm inputChange = {this.inputChange} eduFields={this.state.eduFields} expFields={this.state.expFields}/>

          <Preview state = {this.state}/>

        
        </div>
    )}
}

export default App;
