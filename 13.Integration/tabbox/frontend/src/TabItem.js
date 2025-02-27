import React from 'react';
import {Tab_Item} from "./assets/scss/TabItem.scss"

function TabItem({item,onClick,index}) {
    return (
        <li className={`${Tab_Item} ${item.active?"active":""}`} key={item.no}
        onClick={()=>onClick(index)}>{item.name}</li>
    );
}

export default TabItem;