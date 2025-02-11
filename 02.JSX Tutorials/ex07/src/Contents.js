import React from 'react';

function Contents(props) {
    // 1. JSX 밖은 JavaScript 구문이 가능하기 때문에 주석문이 가능하다.
    return (
        <div
            className='Clock'
            title='시계'>
            <p>Comment</p>
            <div>{'00:00:00'}</div>
        </div>
    );
}

export default Contents;