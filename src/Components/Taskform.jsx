import { useState } from "react";

export default function Taskform({addTask}) {
    const [task, setTask] = useState('');
    const [priority, setPriority] = useState('Medium');
    const [category, setCategory] = useState('General');
    
    const handleSubmit = (e) => {
        e.preventDefault(); 
        addTask({text:task, priority, category, completed: false})

        // Reset tasks
        setTask('');
        setPriority('medium');
        setCategory('general');
    }

    return(
        <form onSubmit={handleSubmit} className='task-form'>
            <div id="inp">
                <input type="text"
                placeholder="Enter the task" 
                value={task}
                onChange = {(e) => setTask(e.target.value)}/>
                <span><button type="submit">Add Task</button></span>
            </div>

            <div id="btns">
                <select value={priority} onChange = {(e) => setPriority(e.target.value)}>
                    <option value="High">High</option>
                    <option value="Medium">Medium</option>
                    <option value="Low">low</option>
                </select>

                <select value={category} onChange = {(e) => setCategory(e.target.value)}>
                    <option value="General">General</option>
                    <option value="Work">work</option>
                    <option value="Personal">Personal</option>
                </select>
            </div>
        </form>
    )
}