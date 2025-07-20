import NavBar from "./components/navBar";
import Home from "./pages/home";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import TaskList from "./pages/taskList";

const App = () => {
  return <>
    
    <BrowserRouter>
        <NavBar/>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/tasks" element={<TaskList/>} />
        </Routes>
    </BrowserRouter>
  </>
}

export default App;