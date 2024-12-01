import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "react-use";

export default function AddTask() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const [tasks, setTasks] = useLocalStorage("tasks", [])

    const handleSubmit = (event) => {
        event.preventDefault();

        const newTask = {
            id: Date.now(),
            title: title,
            description: description
        };
        //append the new task
        setTasks([...tasks, newTask]);
         // Reset the form by clearing the state values
         setTitle("");
         setDescription("");
        
        
    }

    return (
        <div>
            <h2>Edit Task</h2>
            <form onSubmit = { handleSubmit }>
                <div>
                    <label>Title: </label>
                    <input type = "text" value={title} onChange={(event) => setTitle(event.target.value)} required></input>
                </div>

                <div>
                    <label>Description: </label>
                    <input type = "text" value={description} onChange={(event) => setDescription(event.target.value)} required></input>
                </div>

                <button type = "submit">Add Task</button>
            </form>
        </div>
    )
}