import React from 'react';
import GroceryItem from "./GroceryItem";

function GroceryList({groceries}) {
    const groceryItems = [
        <GroceryItem name={"Bread"} count={10}/>,
        <GroceryItem name={"Milk"} count={20}/>,
        <GroceryItem name={"Egg"} count={30}/>,
    ]
    return (
        <ol className={'grocery-list'}>
            {groceryItems}
        </ol>
    );
}

export default GroceryList;