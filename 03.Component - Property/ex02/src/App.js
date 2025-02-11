import React from 'react';
import "./assets/css/styles.css";
import GroceryList from "./GroceryList";

function App(props) {
    const groceryItems = [{name: "Bread", count: 10}, {name: "Milk", count: 20}, {name: "Egg", count: 30}]

    return (
        <div id={'App'}>
            <h1 >{'Grocery List'}</h1>
            <GroceryList groceries={groceryItems} />
        </div>
    );
}

export default App;