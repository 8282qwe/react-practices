import React from 'react';
import {Kanban_Board} from "./assets/scss/KanbanBoard.scss"
import CardList from "./CardList";
import data from "./assets/json/data";

function KanbanBoard() {

    return (
        <div className={Kanban_Board}>
            <CardList cardTitle={"To Do"} data={data.filter(({status})=>{
                return status === 'ToDo';
            })}/>
            <CardList cardTitle={"Doing"} data={data.filter(({status})=>{
                return status === 'Doing';
            })}/>
            <CardList cardTitle={"Done"} data={data.filter(({status})=>{
                return status === 'Done';
            })}/>
        </div>
    );
}

export default KanbanBoard;