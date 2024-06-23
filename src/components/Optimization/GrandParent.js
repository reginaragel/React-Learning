import React,{useState} from "react";
import ChildOne from "./ChildOne";
import ParentOne from "./ParentOne";

function GrandParent(){

    const [newcount,setNewCount]=useState(0)
    return(
        <div>
            <button onClick={()=>setNewCount(prevCount=>prevCount+1)}>Count - {newcount}</button>
            <ParentOne newcount={newcount}>
                <ChildOne/>
            </ParentOne>

        </div>
    )
}

export default GrandParent