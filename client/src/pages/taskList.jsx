import axios from "axios";
import { useEffect, useState } from "react"
import { Trash } from 'lucide-react'

const TaskList = () => {

    const [tasks, setTasks] = useState([]);
    const [currentTask, setCurrentTask] = useState(null);

    const getTasks = async () =>{
        try{
            const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/task/get`);
            console.log(res.data);
            setTasks(res.data);
        }
        catch(error){
            console.error('Error fetching tasks: ',error);
        }
    }

    useEffect(()=>{
        getTasks();
    },[]);

    const handleDelete = async () => {
        try{
            const res = await axios.delete(`${import.meta.env.VITE_API_URL}/api/task/delete`,{
                data: { id: currentTask }
            })
            alert('Deleted successfully');
            getTasks();
        }
        catch(error){
            console.error('Error deleting task : ',error);
        }
    }

    return <div className="p-2 flex flex-col justify-center items-center">
        <div><h1 className="p-2 font-bold text-2xl">TASKS</h1></div>
        <div>
            <ul className="flex flex-col justify-center gap-3">
                {tasks.map(task => (

                    <li key={task._id} className='p-2 bg-gray-100 shadow-2xl flex flex-row justify-between'
                     onMouseEnter={() => setCurrentTask(task._id)}
                     onMouseLeave={() => setCurrentTask(null)}>
                        <div>
                            <div>Title : {task.title}</div>
                            <div>Description : {task.description}</div>
                        </div>
                        <div>{currentTask === task._id && <Trash size={15} className="mt-3 cursor-pointer" onClick={handleDelete}/>}</div>
                    </li>
                ))}
            </ul>
        </div>
    </div>
}

export default TaskList