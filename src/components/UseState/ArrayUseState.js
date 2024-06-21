import React,{useState}from "react";


const initState=['Bruce','Wayne']
function ArrayUseState(){

    const [persons,setPersons]=useState(initState)

    const handleClick=()=>{
        const newPersons=[...persons]
        newPersons.push('Rachel')
        newPersons.push('Green')
        setPersons(newPersons)
    }

    console.log('ArrayUseState Rendering');
    return(
        <div>
            <button onClick={handleClick}>Click</button>
            {
                persons.map(person=>(
                    <div key={person}>{person}</div>
                ))
            }

        </div>
    )
}

export default ArrayUseState