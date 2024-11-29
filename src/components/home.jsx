import React from "react";
import { Link } from "react-router-dom";


export default function Home() {
    return(
        <div>
            <h2>Welcome to the task manager!</h2>
            <nav>
                <Link to="/tasks">View Tasks</Link> | 
                <Link to="/edit-task">Edit Task</Link> | <Link to="/add-task">Add Task</Link>
            </nav>
        </div>
    )
}