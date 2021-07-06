import React,{useState} from 'react'
import "./todoapp.css"
function TodoApp() {
    const [task, settask] = useState("");
    const [tasklist,setTasklist]=useState([]);
    const handleChange=(e)=>{
        settask(e.target.value);
    }
    const AddTask=()=>{
        if(task!==""){
            const taskDetails={
                id:Math.floor(Math.random()*1000),
                value:task,
                isCompleted:false,
            }
        
        setTasklist([...tasklist,taskDetails]);
        }
    }
    const deletetask=(e,id)=>{
        e.preventDefault();
        setTasklist(tasklist.filter(t=>t.id!=id));
    }
    const taskCompleted=(e,id)=>{
        e.preventDefault();
        const element =tasklist.findIndex(elem=>elem.id==id);

        const newTaskList=[...tasklist];
        newTaskList[element]={
            ...newTaskList[element],
            isCompleted:true,
        }
        setTasklist(newTaskList);
    }
    return (
        <div className="todo">
            <h1>Todo App</h1>
            <input onChange={(e)=>handleChange(e)} type="text" name="text" placeholder="Add task here "/>
            <button onClick={AddTask} className="add-btn">Add</button>
            <br/>
            {tasklist!==[]?(
            <ul>
                {tasklist.map((t)=>(
                <li className={t.isCompleted?"completedText":"listitem"}>{t.value}
                <button className="completed" onClick={(e)=>taskCompleted(e,t.id)}>Completed</button>
                <button className="delete" onClick={(e)=>deletetask(e,t.id)}>Delete</button>
                </li>
                
                    ))}
            </ul>)
            :null}
        </div>
    )
}

export default TodoApp
