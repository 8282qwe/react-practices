import React, {useEffect, useState} from 'react';
import {Kanban_Board} from "./assets/scss/KanbanBoard.scss"
import CardList from "./CardList";
import axios from "axios";
// import data from "./assets/json/data";

function KanbanBoard() {
    const boardType = ["ToDo", "Doing", "Done"];
    const [data, setData] = useState([]);

    const initData = async () => {
        const response = await axios.get("/kanbanboard/card");
        setData(response.data.data);
    }

    useEffect(() => {
        initData();
    }, []);

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