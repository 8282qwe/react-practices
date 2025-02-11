import React from 'react';
import Header from "./Header";
import Contents from "./Contents";

function App() {
    return (
        <div>
            <Header />
            <Contents title={"하이~"} name={"바이~"}/>
        </div>
    );
}

export {App};