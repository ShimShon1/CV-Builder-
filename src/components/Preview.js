
import React from "react"

export default class Preview extends React.Component{

    render(){
        return(
           <div className="border-2 max-h-screen lg:w-1/2 min-h-screen shadow-md">
            <section className="bg-slate-600 text-gray-100 h-1/4 p-5" >

                <h1 className="text-4xl">{this.props.state.name + " " + this.props.state["last name"]} </h1> 
                <span className="text-gray-300 text-sm">Personal Details</span>
                <hr className=" bg-gray-500 h-[1px] border-0"></hr>

            <div className="mt-3 space-y-5">

                <p>Adress:{" " + this.props.state.adress}</p>
                <p>E-mail:{" " + this.props.state.email} </p>
                <p>Phone: {" " + this.props.state.phone}</p>

                {console.log(this.props.state)}
            </div>
                




            </section>
               

           </div>
        )
    }
}