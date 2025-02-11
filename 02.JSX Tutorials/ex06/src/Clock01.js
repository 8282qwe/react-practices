import React from 'react';

function Clock01() {
    const now = new Date();

    let hour = now.getHours();
    let minute = now.getMinutes();
    let second = now.getSeconds();

    if (hour < 10) {
        hour = '0' + hour;
    }

    if (minute < 10) {
        minute = '0' + minute;
    }

    if (second < 10) {
        second = '0' + second;
    }

    return (
        <div>
            {hour}
            {":"}
            {minute}
            {":"}
            {second}
        </div>
    );
}

export default Clock01;