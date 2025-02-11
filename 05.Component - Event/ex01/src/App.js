import React from 'react';

function App() {
    return (
        <div id={'App'}>
            <h1 onClick={() => alert("click!")}>
                Inline Handler(Click Here!)
            </h1>
        </div>
    );
}

export default App;