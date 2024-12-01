import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useLocalStorage } from "react-use";

export default function EditTask() {
    const { taskId } = useParams();
    const [tasks, setTasks] = useLocalStorage("tasks", []);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const navigate = useNavigate();

    // Load the task details when the component mounts
    useEffect(() => {
        const taskToEdit = tasks.find((task) => task.id === Number(taskId));
        if (taskToEdit) {
            setTitle(taskToEdit.title);
            setDescription(taskToEdit.description);
        } else {
            // Navigate back if task not found
            navigate("/tasks");
            console.warn("Task not found");
        }
    }, [taskId, tasks]);

    const handleSubmit = (event) => {
        event.preventDefault();

        // Update the task in the tasks list
        const updatedTasks = tasks.map((task) => {
            if (task.id === Number(taskId)) {
                return { ...task, title, description };
            }
            else {
                return task;
            }
         }
        );

        setTasks(updatedTasks);
        navigate("/tasks"); // Redirect to tasks page
    };

    return (
        <div>
            <h2>Edit Task</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Title: </label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </div>

                <div>
                    <label>Description: </label>
                    <input
                        type="text"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                    />
                </div>

                <button type="submit">Save Changes</button>
            </form>
        </div>
    );
}