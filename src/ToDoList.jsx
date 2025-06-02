import React, {useState} from "react";
function ToDoList(){
    const [tasks,setTasks]=useState([]);
    const [newTask,setNewTask]=useState("");

    function handleInputChange(e) {
        setNewTask(e.target.value);
    }
    function AddTask(){
        if(newTask.trim() !== ""){
        setTasks(t=>[...t,newTask]);
        setNewTask("");
        }
    }
    function deleteTask(index){
        setTasks(tasks.filter((_,i)=>i !== index));
    }
    function taskUp(index){
        if(index > 0){
            const updateTasks=[...tasks];
            [updateTasks[index],updateTasks[index-1]]=[updateTasks[index-1],updateTasks[index]];
            setTasks(updateTasks);
        }
    }
    function taskDown(index){
        if(index < 1){
            const updateTasks=[...tasks];
            [updateTasks[index],updateTasks[index+1]]=[updateTasks[index+1],updateTasks[index]];
            setTasks(updateTasks);
        }
    }
    return(
        <div className='ToDoList'>
            <h1 >TO-DO-LIST</h1>
            <div className='input-container'>
                <input type="text" placeholder="Enter a task..." value={newTask} onChange={handleInputChange}/>
                <button onClick={AddTask} className='add-btn' >Add</button>
            </div>
            <ol>
                {tasks.map((task,index)=>
                <li key={index}> 
                  <span className="text">{task}</span>
                  <div className="btn">
                    <button className='del-btn' onClick={()=>deleteTask(index) }>Delete</button>
                    <button className='move-btn' onClick={()=>taskUp(index)}>👆</button>
                    <button className='move-btn' onClick={()=>taskDown(index)}>👇</button>
                  </div>
               </li>)}
            </ol>
        </div>
    );
}
export default ToDoList;