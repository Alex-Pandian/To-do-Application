import { useEffect, useState } from "react";
import axios from 'axios';

const Home = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    // useEffect(()=>{
    //     console.log(tasks);
    // },[tasks]);
    const handleAdd = async (e) => {
        e.preventDefault();
        if (title.trim() !== "" && description.trim() !== "") {
            try{
                const res = await axios.post(`${import.meta.env.VITE_API_URL}/api/task/add`,{
                    title,
                    description,
                });
                alert("Successfully added");
                console.log(res.data.message);
            }
            catch(error){
                console.error("Error adding task : ",error);
            }
            setTitle('');
            setDescription('');
        }
    };

    return <div className="w-screen p-3 flex flex-col items-center justify-center gap-5">
      
        <div className="bg-gray-100">
            <div className="flex flex-col justify-center items-center border border-gray-300 rounded-md shadow-2xl">
                <div className="px-15 py-10">
                    <div className="p-2 flex flex-row justify-center gap-5">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="p-1 size-8">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0 1 18 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3 1.5 1.5 3-3.75" />
                        </svg>  
                        <span className="text-2xl font-bold">Add Task</span>
                    </div>
                    
                    <div className="p-3 flex flex-col items-center gap-2">
                        <div className="flex flex-col gap-2">
                            <div className="flex flex-row justify-end">
                                <label className="p-2">Title</label>
                                <input type="text"
                                value={title}
                                onChange={(e) => (setTitle(e.target.value))}
                                placeholder="title" 
                                className="p-2 border border-gray-400 rounded-md"/>
                            </div>
                            <div className="flex flex-row justify-end">
                                <label className="p-2">Description</label>
                                <textarea
                                    value={description}
                                    onChange={(e) => (setDescription(e.target.value))}
                                    placeholder="give description"
                                    className="p-2 border border-gray-400 rounded-md"
                                />
                            </div>
                        </div>
                        <button type="submit" className="p-2 border border-gray-600 rounded-md bg-blue-700 text-white cursor-pointer hover:text-black hover:bg-white"
                        onClick={handleAdd}><span>add</span></button>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default Home;
