import React, {useState} from 'react';
import styled from "styled-components";
import axios from "axios";

const TaskStyledLi = styled.li`
    &:first-child {
        margin-top: 10px;
        padding-top: 10px;
        border-top: dashed 1px #ddd;
    }

    .Task_Remove:after {
        display: inline-block;
        color: #d66;
        content: '✖';
    }
`;

function Task({item,deleteTask}) {
    const [task, setTask] = useState(item);

    const clickCheckBox = async () => {
        const response = await axios.put(`/kanbanboard/task/${task.no}`,{
            done: task.done==='Y'?'N':'Y'
        });

        setTask(prev => ({
            ...prev,
            no: response.data.data.no,
            done: response.data.data.done,
        }))
    }

    return (
        <TaskStyledLi>
            <input type='checkbox' checked={task.done==='Y'} onChange={() => {
                clickCheckBox();
            }}/>
            {
                ` ${task.name} `
            }
            <a href='#' className={"Task_Remove"} onClick={(e) => {
                e.preventDefault();
                deleteTask(item.no)
            }}></a>
        </TaskStyledLi>
    );
}

export default Task;