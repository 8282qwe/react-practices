import React, {useState} from 'react';
import Tabs from "./Tabs";
import TabView from "./TabView";
import TabBoxItemList from "./assets/json/data";
import {Tab_Box} from "./assets/scss/TabBox.scss"

function TabBox() {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div className={Tab_Box}>
            <Tabs tabBoxItems={()=>{
                return TabBoxItemList.map((item, index) => ({
                    ...item,
                    active: index === activeIndex
                }));
            }} onClick={(index) => {setActiveIndex(index)}}/>
            <TabView contents={TabBoxItemList[activeIndex].contents} />
        </div>
    );
}

export default TabBox;