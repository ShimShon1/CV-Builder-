
import React from "react"

export default class Preview extends React.Component{
    createEduFields(){
        let allFields = []
        for(let i = 0;i < this.props.state.eduFields;i++){
            allFields.push(
                <li>I'M EDUCATED</li>
            )
        }
        return(
            allFields
        )
    }

    createExpFields(){
        let allFields = []
        console.log(this.props.state);
        for(let i = 0;i < this.props.state.expFields;i++){
            let index = i>0?i:""
            allFields.push(
                <div className="ml-2 p-4 border-b border-dashed">
                    <span className="text-gray-600 text-sm" >{this.props.state['fromexp'+ index]}  
                        - {this.props.state['toexp'+ index]} </span>
                    
                    <br/>
                    <h3 className="text-lg inline-block">
                        {this.props.state['company' + index]} - 
                    </h3>
                    <span className="text-base "> {this.props.state['title' + index]}</span>



                    <p className="text-sm">{this.props.state['description' + index]}</p>
                </div>
            )
        }
        return(
            allFields
        )
    }

    render(){
        return(
           <div className="border-2 border-black lg:w-1/2 min-h-screen h-fit shadow-md">
            <section className="bg-slate-600 text-gray-100 h-fit p-5" >

                <h1 className="text-4xl">{this.props.state.name + " " + this.props.state["last name"]} </h1> 
                <span className="text-gray-300 text-sm">Personal Details</span>
                <hr className=" bg-gray-500 h-[1px] border-0"></hr>

            <div className="mt-3 space-y-5">
                <p>Adress:{" " + this.props.state.adress}</p>
                <p>E-mail:{" " + this.props.state.email} </p>
                <p>Phone: {" " + this.props.state.phone}</p>
            </div>
            </section>
            

            <section className="p-4 space-y-8">

            <section>
                <h1 className="text-3xl bold">Education</h1>
                <hr></hr>

                        {this.createEduFields()}

                   
                    
            </section>
               

            <section>
                <h1 className="text-3xl bold ">Experience</h1>
                <hr></hr>

                    {this.createExpFields()}
            </section>


            </section>
       

           </div>
        )
    }
}