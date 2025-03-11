
import {useState} from 'react';

export default function ToDoList() {
    const [task,setTask] = useState([]);
    const [newTask,setNewTask] = useState([]);

    
    const AddTask = () => {
        if(newTask.trim() !== ""){
            setTask(t =>[...t,newTask]);
            setNewTask("");
        }
    }
    const RemoveTask = (Index) => {
        const UpdatedTask =task.filter((_,i ) => i !==Index);
        setTask(UpdatedTask);
    }
    const MoveTaskUp = (Index) => {
        if(Index > 0){
            const UpdatedTasks = [...task];
            [UpdatedTasks[Index],UpdatedTasks[Index -1]] = [UpdatedTasks[Index -1],UpdatedTasks[Index]];
            setTask(UpdatedTasks);
        }
    }
    const MoveTaskDown = (Index) => {
        if(Index < task.length - 1){
            const UpdatedTasks = [...task];
            [UpdatedTasks[Index],UpdatedTasks[Index + 1]] = [UpdatedTasks[Index + 1],UpdatedTasks[Index]];
            setTask(UpdatedTasks);
        }
    }
   

    
    return( 
        <div className="to-do-list">
            <h1>To Do List</h1>
            <div>
                <input type="text"  value={newTask} 
                onChange={(event) => setNewTask((HandleInput) => event.target.value)} 
                placeholder='Enter Task'/>
                <button className="add-button" onClick={() => AddTask()}>Add✅</button>
            </div>
            <ol>
                {task.map((task,Index) =>
                <li key={Index} id='tasks'>
                    <span className="text">{task}</span>
                    <button className='delete-button' onClick={() => RemoveTask(Index)}>❌</button>
                    <button className='move-button-up' onClick={() => MoveTaskUp(Index)}>☝️</button>
                    <button className='move-button-down' onClick={() => MoveTaskDown(Index)}>👇</button>


                    </li>)}
            </ol>
        </div>
    );
}