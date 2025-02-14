import React from 'react';
import {Kanban_Board} from "./assets/scss/KanbanBoard.scss"
import CardList from "./CardList";
import data from "./assets/json/data";

function KanbanBoard() {
    const boardType = ["ToDo", "Doing", "Done"];

    return (
        <div className={Kanban_Board}>
            {
                boardType.map((item, index) => (
                    <CardList cardTitle={item} data={data.filter(({status}) => status === item)} key={index} />
                ))
            }
        </div>
    );
}

export default KanbanBoard;