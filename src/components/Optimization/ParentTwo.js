import React,{useState} from 'react';
import {MemoizedChildTwo} from './ChildTwo';



function ParentTwo(){

    const [count,setCount]=useState(0)
    const [name,setName]=useState('regina')

    console.log('ParentTWo render');
    return(
        <div>
            <button onClick={()=>setCount(prevCount=>prevCount+1)}>Count - {count}</button>
            <button onClick={()=>setName('Rahel')}>Change Name</button>
            <MemoizedChildTwo name={name}/>
        </div>
    )
}

export default ParentTwo