import React from 'react';
import Header from "./Header";
import Contents from "./Contents";

function App() {
    return React.createElement('div',
        {id: 'App'},
        React.createElement(Header, null),
        React.createElement(Contents, {title: "하이~", name: "바이~"})
    );
}



export {App};