import ToDoUI from './ToDoUI'
import {useState} from 'react'

function ToDoMain(){
    const[inputData,setInputData]=useState('')
    const[items,setItems]=useState([])
    const[replace,setReplace]=useState({id:null,item:'',status:null,toggle:true})
    const addItem=()=>{
        if(!inputData){
            
        }else{
            setItems([...items,{item:inputData,status:false}])
            setInputData('')
           }  
    }
    const reset=()=>{
     setItems([])   
    }
    const DeleteItem=(id)=>{
        // console.log(id)
        const updatedList=items.filter((item,index)=>{
            return index !== id
        })
        setItems(updatedList)
    }
    const change=(e)=>{
        // console.log(e,e.target.id,e.target.checked)
        const updatedList=[...items];
        const Length=updatedList.length
        if(e.target.checked){
            updatedList.push(updatedList.splice(e.target.id, 1)[0])
            updatedList[Length-1].status=true
            setItems([...updatedList])

        }else{
            updatedList[e.target.id].status=false
            updatedList.unshift(updatedList.splice(e.target.id, 1)[0])            
            setItems(updatedList)
        }                
        // console.log(updatedList)
    }
    const update=()=>{
        const demo={...replace}
        demo.toggle=false;
        setReplace(demo)
        // console.log(demo)
        const updateList=[...items]
        updateList[demo.id].item=inputData;
        updateList[demo.id].status=false;
        setItems(updateList)
        setInputData('')
        setReplace({id:null,item:'',status:null,toggle:true})
        // console.log(items)

    }
    const edit=(u)=>{
        // console.log("edit",u)
        const updatedList=[...items];
        const repl={id:u,item:updatedList[u].item,status:updatedList[u].status}
        setInputData(updatedList[u].item); 
        setReplace(repl)
    }
    // console.log(replace)   
    return(
        <>
        <input type='text' value={inputData} onChange={(e)=>setInputData(e.target.value)}/><br/><br/>
        {replace.toggle?<button onClick={addItem}>AddItem</button>:
        <button onClick={update}>update</button>}
        <button onClick={reset}>Reset</button>
            <div style={{width:'40%',height:'auto',margin:'30px auto 10px'}}>
            {items.map((data,index)=>
           
            <ToDoUI   key={index} data={data.item} index={index} remove={DeleteItem} 
            change={change} status={data.status} edit={edit}/>
            
            )}
         </div>
      </>
                )
              
            }

export default ToDoMain