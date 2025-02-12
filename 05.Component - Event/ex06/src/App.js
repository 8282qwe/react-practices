import React, {Component} from 'react';
import './assets/scss/App.scss';

export default class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div
                className={'App'} ref={(ref) => this.outerRef = ref}
                onScroll={(e) => console.log(this.outerRef.current.scrollTop, this.outerRef.current.clientHeight,this.innerRef.current.clientHeight)}>
                <div ref={(ref) => this.innerRef = ref}>
                    <ul>
                        {
                            Array.from({length: 100}).map((_,i) => <li key={i+1}>{`아이템 ${i+1} 입니다`}</li>)
                        }
                    </ul>
                </div>
            </div>
        );
    }
}