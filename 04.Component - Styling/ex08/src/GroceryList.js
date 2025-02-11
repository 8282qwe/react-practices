import React from 'react';
import GroceryItem from "./GroceryItem";
import styled from "styled-components";

const StyledOl = styled.ol`
    padding-left: 50px;
`

function GroceryList({groceries}) {

    return (<StyledOl>
            {
                groceries.map(item => <GroceryItem name={item.name} count={item.count}/>)
            }
        </StyledOl>);
}

export default GroceryList;