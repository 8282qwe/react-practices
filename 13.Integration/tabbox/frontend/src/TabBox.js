import React from 'react';
import Tabs from "./Tabs";
import TabView from "./TabView";
import TabBoxItemList from "./assets/json/data";
import {Tab_Box} from "./assets/scss/TabBox.scss"

function TabBox() {
    return (
        <div className={Tab_Box}>
            <Tabs tabBoxItems={TabBoxItemList} />
            <TabView contents={"탭뷰입니다."} />
        </div>
    );
}

export default TabBox;