import React, {useState} from 'react';
import {Task_List, Input_Add_Task} from "./assets/scss/TaskList.scss"
import Task from "./Task";

function TaskList({tasks}) {
    const [taskList, setTaskList] = useState(tasks);
    const [newTask, setNewTask] = useState("");

    const addTask = (e) => {
        if (e.key !== "Enter" || newTask === "" || e.nativeEvent.isComposing) {
            return;
        }
        setTaskList((prevTasks) => [...prevTasks,
            {
                no: prevTasks[prevTasks.length - 1].no + 1,
                name: newTask,
                done: false
            }
        ]);
        setNewTask("");
    }

    const deleteTask = (taskNo) => {
        setTaskList((prevTasks) => prevTasks.filter(task => task.no !== taskNo));
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