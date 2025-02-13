import React, {useState} from 'react';
import styled from "styled-components";
import {Card_Title, Card_Title_Open} from "./assets/scss/CardTitle.scss"
import TaskList from "./TaskList";

const StyledDiv = styled.div`
    position: relative;
    z-index: 1;
    background: #fff;
    width: 100%;
    padding: 10px 10px 10px 15px;
    margin: 0 0 10px 0;
    overflow: auto;
    border: 1px solid #e5e5df;
    border-radius: 3px;
    box-shadow: 0 1px 0 rgba(0, 0, 0, 0.25);
`

function Card({item}) {
    const [onToggle, setOnToggle] = useState(false);

    return (
        <StyledDiv>
            <div className={`${Card_Title} ${onToggle ? Card_Title_Open : ""}`}
                 onClick={() => setOnToggle(prevState => !prevState)}>{item.title}</div>
            {
                onToggle ? (<div className='Card_Details'>
                    {item.description}
                </div>) : null
            }
            <TaskList tasks={item.tasks} key={item.no} />
        </StyledDiv>
    );
}

export default Card;