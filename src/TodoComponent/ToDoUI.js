function ToDoUI({key,list,button,change}){
    return(
        <>
        <ul>
           <li id={key}>{list}<input type="checkbox" onChange={change} checked={button}/></li>
        </ul>
        </>
    )
}

export default ToDoUI