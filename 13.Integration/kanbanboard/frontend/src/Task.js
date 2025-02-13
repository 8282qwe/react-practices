import React, {useState} from 'react';
import styled from "styled-components";

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

    return (
        <TaskStyledLi>
            <input type='checkbox' checked={task.done} onChange={() => {
                setTask(prev => {
                    return {
                        ...prev,
                        done: !prev.done,
                    }
                })
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