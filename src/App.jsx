import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EditTask from "./components/editTask";
import AddTask from "./components/addTask";
import Tasks from "./components/tasks";
import Home from "./components/home";


function App() {
    return (
        <Router>
            <div>
                <h1>Task Manager</h1>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/tasks" element={<Tasks />} />
                    <Route path="/add-task" element={<AddTask />} />
                    <Route path="/edit-task/:taskID" element={<EditTask />} />
                </Routes>
            </div>
        </Router>


    )

}

export default App;