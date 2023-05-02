import ToDoUI from './ToDoUI'
import {useState} from 'react'

function ToDoMain(){
    
    //Define All Variable   
    let createDate=new Date();
    const[inputData,setInputData]=useState('')
    const[items,setItems]=useState([])
    const[replace,setReplace]=useState({id:null,item:'',status:null,toggle:true,createDate:null,titleStatus:null})
    
    //title change where edit of item take place
    document.title=(replace.item)===''?'ToDOList':replace.titleStatus;

    //addItem set the data in the list
    const addItem=()=>{
        if(!inputData){
            
        }else{
            setItems([...items,{item:inputData.toUpperCase(),status:false,
                createDate:`${createDate.getFullYear()}:${createDate.getMonth()+1}:${createDate.getDate()}<=>${createDate.getHours()}:
                ${createDate.getMinutes()}:${createDate.getSeconds()}:${createDate.getMilliseconds()}`,
                titleStatus:'Created:: '}])
            setInputData('')
        }  
 
    }
    
    //reset all list item
    const reset=()=>{
     setItems([])   
    }

    //delete selected item
    const DeleteItem=(id)=>{
        // console.log(id)
        const updatedList=items.filter((item,index)=>{
            return index !== id
        })
        setItems(updatedList)
    }

    //change the position of selected item
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

    //edit the selected item and update
    const update=()=>{
        let UpdateDate=new Date()
        const demo={...replace}
        const updateList=[...items]
        updateList[demo.id].item=inputData.toUpperCase();
        updateList[demo.id].status=demo.status;
        updateList[demo.id].createDate=`${UpdateDate.getFullYear()}:${UpdateDate.getMonth()+1}:
        ${UpdateDate.getDate()}<=>${UpdateDate.getHours()}:
        ${UpdateDate.getMinutes()}:${UpdateDate.getSeconds()}:${UpdateDate.getMilliseconds()}`;
        updateList[demo.id].titleStatus='Last Update:: ';
        setItems(updateList)
        setInputData('')
        setReplace({id:null,item:'',status:null,toggle:true,createDate:null})
        // console.log(items)

    }

    //set the list item values when edit button press
    const edit=(u)=>{
        // console.log("edit",u)
        const updatedList=[...items];
        const repl={id:u,item:updatedList[u].item,toggle:false,status:updatedList[u].status,createDate:null,titleStatus:'Last Update:: '}
        setInputData(updatedList[u].item); 
        setReplace(repl)
    }
    const [hoverData,setHoverData]=useState('')
    const hoverEnter=(index,data)=>{
        // console.log(index,data)
        setHoverData(data)
    }
    const hoverOut=(index,data)=>{
        // console.log(index,data)
        setHoverData('')
    }
    return(
        <>
        <input type='text' value={inputData} onChange={(e)=>setInputData(e.target.value)} 
        placeholder={hoverData===''?'Create New ToDo Task':hoverData.substring(0,4)+'.....'} 
        style={{margin:'5% 0px 0px 0px' ,height:'30px'}}/>
        <br/><br/>
        {replace.toggle?<button onClick={addItem}>AddItem</button>:
        <button onClick={update}>update</button>}
        <button onClick={reset}>Reset</button>
            <div style={{width:'40%',height:'auto',margin:'30px auto 10px'}}>
            {items.map((data,index)=>
           
            <ToDoUI   key={index} data={data.item} index={index} remove={DeleteItem} 
            change={change} status={data.status} edit={edit} createDate={data.createDate} 
            titleStatus={data.titleStatus} hoverEnter={hoverEnter} hoverOut={hoverOut}
            replace={replace}
            />
            
            )}
         </div>
      </>
        )
}

export default ToDoMain