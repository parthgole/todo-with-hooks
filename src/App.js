import ToDoMain from './TodoComponent/ToDoMain'
import './App.css';

function App() {
  return (
    <div className="App">
      <ToDoMain/>
    </div>
  );
}

export default App;
/*
   <li key={index}>{data}   <i className="fa-solid fa-trash"  
             onClick={()=>DeleteItem(index)}></i></li> 
*/