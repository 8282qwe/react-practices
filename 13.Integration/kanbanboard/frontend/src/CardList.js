import React from 'react';
import {Card_List} from "./assets/scss/CardList.scss"
import Card from "./Card";

function CardList({cardTitle,data}) {
    return (
        <div className={Card_List}>
            <h1>{cardTitle}</h1>
            {
                data?.length > 0 && data.map((item,index) => {
                    return (
                        <Card item={item} key={index}/>
                    )
                })
            }
        </div>
    );
}

export default CardList;