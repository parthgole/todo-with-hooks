function ToDoUI({data,index,remove,change,status,edit}){
    return(
        <>
        <div style={{width:'100%',height:'auto',backgroundColor:'yellow',
        border:'1px solid black',margin:'10px auto 10px'}}>
        <div>
           {index+1}..
           <span style={{textDecoration:status?'line-through':'',
           color:status?'blue':'black'           
           }}>{data} 
           </span>
        </div><br/>
        <div style={{justifyItems:'center'}}>
           <i className="fa-solid fa-trash"  onClick={()=>remove(index)}></i>
           <input type="checkbox" id={index} onChange={(e)=>change(e)} checked={status}/>
           <i className="fas fa-edit" onClick={()=>edit(index)}></i>
        </div>
        </div>
        </>
    )
}

export default ToDoUI