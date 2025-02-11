import React from 'react';

function Clock01() {
    const now = new Date();

    return (
        <div>
            {now.getHours() < 10 ? '0' + now.getHours() : now.getHours()}
            {":"}
            {now.getMinutes() < 10 ? '0' + now.getMinutes() : now.getMinutes()}
            {":"}
            {('0' + now.getSeconds()).slice(-2)}
        </div>
    );
}

export default Clock01;