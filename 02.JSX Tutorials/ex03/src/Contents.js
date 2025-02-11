import React from 'react';

function Contents({title, name}) {
    return (
        <div>
            <p>함수 컴포넌트</p>
            <p>{title}</p>
            <p>{name}</p>
        </div>
    );
}

export default Contents;