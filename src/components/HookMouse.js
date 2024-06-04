import React,{useState,useEffect} from "react";

function HookMouse(){

    const [x,setX] = useState(0)

    const [y,setY] = useState(0)

    const logMousePosition=(e)=>{
        console.log('MOuse event')
        setX(e.clientX)
        setY(e.clientY)
    }


    useEffect(()=>{
        console.log('MOuseEvent called')
        window.addEventListener('mousemove',logMousePosition)
    },[])


    return(
        <div>
             X:{x}  Y:{y}
        </div>
    )
}

export default HookMouse