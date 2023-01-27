import React,{useState} from "react";
import Userdetails from "./userdetails";
import Test from "../test";

const Alluserlist=()=>{
    const [state, setState] = useState({
      name: "sweety"
    });
    let alluser = [
      { name: "sagarika", email: "abc@email.com", phone: 1201214589 },
      { name: "sweety", email: "hyijjkf@email.com", phone: 5252665230 },
      { name: "sagarika", email: "fghj@email.com", phone: 7896541230 },
    ];
    let setStatename=(name)=>{
        setState({...state,name})
    }
    return (
    <div>
        <Test name={state.name} setName={setStatename} />
        {
            alluser.map((user,index)=>(
            <Userdetails key={index} user={user} />
        ))}
    </div>
    );
}
export default Alluserlist