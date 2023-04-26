import ToDoUI from './ToDoUI'
import {useState} from 'react'

function ToDoMain(){
    const[inputData,setInputData]=useState('')
    const[items,setItems]=useState([])
    
    const addItem=()=>{
        if(!inputData){
            
        }else{
        // const newEntry=[].push({item:inputData,status:false})
            setItems([...items,{item:inputData,status:false}])
            setInputData('')
           }  
    }
    const reset=()=>{
     setItems([])   
    }
    const DeleteItem=(id)=>{
        console.log(id)
        const updatedList=items.filter((item,index)=>{
            return index !== id
        })
        setItems(updatedList)
    }
    const change=(e)=>{
        console.log(e,e.target.id,e.target.checked)
        const updatedList=items.filter((item,index)=>{
            return item.status=(index === e.target.id?true:false)
        })
        setItems(updatedList)
        console.log(updatedList)
    
    }
    return(
        <>
        <input type='text' value={inputData} onChange={(e)=>setInputData(e.target.value)}/><br/><br/>
        <button onClick={addItem}>AddItem</button>
        <button onClick={reset}>Reset</button>
            <ul style={{width:'40px',height:'auto',border:'1px solid black',margin:'30px auto 10px'}}>
            {items.map((data,index)=>
           
            <ToDoUI   key={index} data={data.item} index={index} remove={DeleteItem} 
            change={change} status={data.status}/>
            
            )}
         </ul>

            </>
                )
              
            }

export default ToDoMain