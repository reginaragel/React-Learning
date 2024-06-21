import React,{useState} from 'react'

const initialState={
    fname:'Bruce',
    lname:'Wayne'
}
function ObjectUseState(){

    const [person,setPerson]=useState(initialState)
     
    const changeName=()=>{
       const newPerson={...person}
       newPerson.fname='Rachel'
       newPerson.lname='Green'
       setPerson(newPerson)
    }

    console.log('ObjectUseState render');
    return(
        <div>
            <button onClick={changeName}>{person.fname} {person.lname}</button>
        </div>
    )

}
export default ObjectUseState