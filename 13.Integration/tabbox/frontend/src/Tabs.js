import React, {useState} from 'react';
import TabItem from "./TabItem";
import styled from "styled-components";

const TabsUl = styled.ul`
    list-style-type: none;
    height: 24px;
`;

function Tabs({tabBoxItems}) {
    const [tabBoxItem, setTabBoxItem] = useState(tabBoxItems);

    const onTabClick = (no) => {
        setTabBoxItem(tabBoxItem.map((e) => ({
            ...e,
            active: e.no === no
        })));
    }
    return (
        <TabsUl>
            {tabBoxItem.map(item => <TabItem item={item} key={item.no} onClick={onTabClick}/>)}
        </TabsUl>
    );
}

export default Tabs;