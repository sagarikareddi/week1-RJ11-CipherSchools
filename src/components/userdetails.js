import React,{Component} from "react";

const Userdetails= ({user ={}})=>{
return (
    <div>
        <h3>
            {user.name}
        </h3>
        <h5>
            Email :{user.email} <br />
            Phone Number :{user.phone}
        </h5>
    </div>
)
}
export default Userdetails;