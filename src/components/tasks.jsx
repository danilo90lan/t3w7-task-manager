import React from "react";
import { Link } from "react-router-dom";
import { useLocalStorage } from "react-use";


export default function Tasks() {
    const [tasks, setTasks] = useLocalStorage("tasks", []);


    return (
        <div>
            <h2>Tasks</h2>
            {
                tasks.length === 0 ? (
                    <p>No tasks found. <Link to="/add-task">Add your first task</Link></p>
                ) : (
                    <ul>
                        {tasks.map((task, index) => {
                            return (
                                <li key={index}>
                                    <strong>{task.title}</strong>:{task.description}
                                    <div>
                                        <Link to={`/edit-task/${task.id}`}>Edit</Link> | {" "}
                                    </div>
                                </li>)
                        }
                        )}
                    </ul>
                )
            }

        </div>
    )
}