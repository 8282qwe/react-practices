import React, {useState} from 'react';
import {Task_List, Input_Add_Task} from "./assets/scss/TaskList.scss"
import Task from "./Task";
import axios from "axios";

function TaskList({tasks,cardNo}) {
    const [taskList, setTaskList] = useState(tasks);
    const [newTask, setNewTask] = useState("");

    const addTask = async (e) => {
        if (e.key !== "Enter" || newTask === "" || e.nativeEvent.isComposing) {
            return;
        }


        const response = await axios.post("/kanbanboard/task", {
            name: newTask,
            cardNo: cardNo
        });

        setTaskList((prevTasks) => [...prevTasks,
            {
                no: response.data.data.no,
                name: newTask,
                done: "N"
            }
        ]);
        setNewTask("");
    }

    const deleteTask = async (taskNo) => {
        const response = await axios.delete(`/kanbanboard/task/${taskNo}`);

        setTaskList((prevTasks) => prevTasks.filter(task => task.no !== response.data.data));
    }

    return (
        <div className={Task_List}>
            <ul>
                {
                    taskList?.map((task, index) => (
                        <Task key={index} item={task} deleteTask={deleteTask} />
                    ))
                }
                <input className={Input_Add_Task} type='text' placeholder='태스크 추가' value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
                onKeyDown={(e) => addTask(e)}/>
            </ul>
        </div>
    );
}

export default TaskList;