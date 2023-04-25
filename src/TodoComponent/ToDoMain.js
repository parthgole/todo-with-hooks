import ToDoUI from './ToDoUI'
import {useState} from 'react'

const InputArray=[{Item:'WorkOut',CheckBoxStatus:false}]
function ToDoMain(){
    const[text,setText]=useState(InputArray)
    const change=()=>{
        console.log('text',text)
        setText(

        )        
    }
    const reset=()=>{

    }
    return(
        <>
        <span>Enter ToDoItem</span>
        <input type='text' value={} onChange={}/>
        <button onClick={reset}></button>
        InputArray.map((item,index)=>
           { <ToDoUI key={index} list={item.Item} button={item.CheckBoxStatus} change={change}/>}
        )
    )
}

export default ToDoMain