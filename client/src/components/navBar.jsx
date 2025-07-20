import { Link } from "react-router-dom"

const NavBar = () => {
    return <div className="p-3 bg-white border-b border-b-gray-400 shadow shadow-gray-500 w-full flex flex-row justify-between ">
        <div>
            <h1 className="text-4xl font-extrabold text-blue-950">TO DO APPLICATION</h1>
        </div>
        <div className="p-2 font-bold text-blue-700">
            <Link to='/tasks'>My Tasks</Link>
        </div>
    </div>
}

export default NavBar