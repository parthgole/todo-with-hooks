function ToDoUI({data,index,remove,change,status,edit,createDate,titleStatus,replace,hoverEnter
,hoverOut
}){
    return(
        <>
        <div style={{width:'100%',height:'auto',backgroundColor:index===replace.id?'orange':'green',
        border:'1px solid black',borderRadius:'40px',margin:'10px auto 10px'        
        }}>
                <div>
                {index+1}..   
                <span style={{textDecoration:status?'line-through':'',
                color:status?'blue':'black'           
                }} onMouseEnter={()=>hoverEnter(index,data)} onMouseOut={()=>hoverOut(index,data)}>{data} 
                </span>
                </div><br/>
                <div style={{justifyItems:'center'}}>
                <i className="fa-solid fa-trash"  onClick={()=>remove(index)} title="Delete"></i>
                <input type="checkbox" id={index} onChange={(e)=>change(e)} checked={status} title="Set Priority"/>
                <i className="fas fa-edit" onClick={()=>edit(index)} title={`UpdateList:: ${data}`}></i>
                </div>
                <div style={{margin:'10px',
                color:index===replace.id?'black':'white'
                }}>{titleStatus}{createDate}</div>
        </div>
        </>
    )
}

export default ToDoUI