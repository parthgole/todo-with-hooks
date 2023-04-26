function ToDoUI({data,index,remove,change,status}){
    return(
        <>
           <li style={{textDecoration:status?'line-through':'',color:status?'blue':'black'}}>{data} 
           <i className="fa-solid fa-trash"  onClick={()=>remove(index)}></i>
           <input type="checkbox" id={index} onChange={(e)=>change(e)}/>
           </li>

        </>
    )
}

export default ToDoUI