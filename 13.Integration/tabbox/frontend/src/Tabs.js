import React from 'react';
import TabItem from "./TabItem";
import styled from "styled-components";

const TabsUl = styled.ul`
    list-style-type: none;
    height: 24px;
`;

function Tabs({tabBoxItems}) {
    return (
        <TabsUl>
            {tabBoxItems.map(item => <TabItem item={item} key={item.no} />)}
        </TabsUl>
    );
}

export default Tabs;