import React from 'react';
import {Tab_Item} from "./assets/scss/TabItem.scss"

function TabItem({item}) {
    return (
        <li className={`${Tab_Item} ${item.active?"active":""}`} key={item.no}>{item.name}</li>
    );
}

export default TabItem;