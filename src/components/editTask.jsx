import React from "react";
import { useParams } from "react-router-dom";

export default function EditTask() {
    //use query param it returns the key value pair. It will be destructure with 
    // the curly brackets and get only the taskID
    const { taskId } = useParams();
    console.log(typeof taskId);

    return (
        <div>
            <h2>Edit Task</h2>
            <p>Task ID: {taskId}</p>
            <p>Here, you'll view or edit the task details</p>
        </div>
    )
}