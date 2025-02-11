import React from 'react';
import {title} from "./assets/scss/App.scss";
import GroceryList from "./GroceryList";

function App(props) {
    const groceryItems = [{name: "Bread", count: 10}, {name: "Milk", count: 20}, {name: "Egg", count: 30}]

    return (
        <div id={'App'}>
            <h1 className={title}>{'Grocery List'}</h1>
            <GroceryList groceries={groceryItems} />
        </div>
    );
}

export default App;