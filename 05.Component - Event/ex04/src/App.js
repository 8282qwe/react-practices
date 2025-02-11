import React, {useRef} from 'react';
import logo from './assets/images/react-logo.png';

export default function App() {
    const imgRef = useRef(null);

    const onKeyUpInput = (e) => {
        console.log("keyup" + e.target.value);
    }

    const onKeyDownInput = (e) => {
        console.log("keydown" + e.target.value);
    }

    const onFocusInput = (e) => {
        console.log("focus");
    }

    const onBlurInput = (e) => {
        console.log("blur");
    }

    const onMouseOverImg = (e) => {
        const offsetTop = imgRef.current.offsetTop;
        const offsetLeft = imgRef.current.offsetLeft;

        console.log(`onMouseOverImg x = ${e.clientX-offsetLeft} y = ${e.clientY - offsetTop}`);
    }

    const onMouseMoveImg = (e) => {
        console.log(`onMouseMoveImg x = ${e.clientX} y = ${e.clientY}`);
    }

    const onMouseOutImg = (e) => {
        console.log(`onMouseOutImg x = ${e.clientX} y = ${e.clientY}`);
    }

    return (
        <>
            <h2>Event Handler 예제</h2>
            <input
                type='text'
                placeholder='메세지를 입력 하세요'
                onKeyUp={onKeyUpInput}
            onKeyDown={onKeyDownInput}
            onFocus={onFocusInput}
            onBlur={onBlurInput}/>
            <br/>
            <br/>
            <img
                ref={imgRef}
                style={{
                    cursor: 'pointer',
                    width: 190,
                    border: '1px solid #ccc'
                }}
                onMouseOver={onMouseOverImg}
                onMouseMove={onMouseMoveImg}
                onMouseOut={onMouseOutImg}
                src={logo}/>
        </>
    );
};