import { useEffect, useState } from "react";

const Home = () => {
    const [tasks, setTasks] = useState([]);
    const [input, setInput] = useState("");
    

    // useEffect(()=>{
    //     console.log(tasks);
    // },[tasks]);
    const handleAdd = () => {
        if (input.trim() !== "") {
            setTasks([...tasks, input]);
            setInput("");
        }
    };

    return <div className="p-2 w-screen flex flex-col items-center justify-center gap-5">
        <h1 className="text-4xl font-extrabold">To Do Application</h1>
        <div className="bg-gray-100">
            <div className="flex flex-col justify-center items-center border border-gray-300 rounded-md shadow-2xl">
                <div className="px-15 py-10">
                    <div className="p-2 flex flex-row justify-center gap-5">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="p-1 size-8">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0 1 18 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3 1.5 1.5 3-3.75" />
                        </svg>  
                        <span className="text-2xl font-bold">Add Task</span>
                    </div>
                    
                    <div className="p-3 flex flex-row gap-2">
                        <input type="text"
                        value={input}
                        onChange={(e)=>setInput(e.target.value)}
                        placeholder="task" className="p-2 border border-gray-400 rounded-md"/>
                        <div className="p-2 border border-gray-600 rounded-md bg-blue-700 text-white cursor-pointer hover:text-black hover:bg-white"
                        onClick={handleAdd}><span>add</span></div>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <span>Tasks</span>
            <ol>
                {tasks.map((task, index) => (
                    <li key={index}>{task}</li>
                ))}
            </ol>
        </div>
    </div>
}


export default Home;