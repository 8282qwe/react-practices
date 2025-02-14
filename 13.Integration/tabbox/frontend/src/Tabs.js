import React, {useState} from 'react';
import TabItem from "./TabItem";
import styled from "styled-components";

const TabsUl = styled.ul`
    list-style-type: none;
    height: 24px;
`;

function Tabs({tabBoxItems,onClick}) {
    const [tabBoxItem, setTabBoxItem] = useState(tabBoxItems);

    const onTabClick = (no) => {
        setTabBoxItem(tabBoxItem.map((e,i) => ({
            ...e,
            active: i === no
        })));
        onClick(no);
    }

    return (
        <TabsUl>
            {tabBoxItem.map((item,i) => <TabItem item={item} key={item.no} onClick={onTabClick} index={i}/>)}
        </TabsUl>
    );
}

export default Tabs;