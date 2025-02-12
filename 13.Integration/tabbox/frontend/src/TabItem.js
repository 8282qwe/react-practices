import React, {useState} from 'react';
import {Tab_Item} from "./assets/scss/TabItem.scss"

function TabItem({item,onClick}) {
    return (
        <li className={`${Tab_Item} ${item.active?"active":""}`} key={item.no}
        onClick={()=>onClick(item.no)}>{item.name}</li>
    );
}

export default TabItem;