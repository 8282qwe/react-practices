import React, {useState} from 'react';
import data from './assets/json/data.js';
import update from 'react-addons-update'

function GoodList({goods}) {
    // goods.push({
    //     "no": "p002-004",
    //     "name": "맨투맨",
    //     "price": 8000,
    //     "amount": 4
    // });

    const goodsUpdated = [...goods, {
            "no": "p002-004",
            "name": "맨투맨",
            "price": 8000,
            "amount": 4
        }];

    return (
        <ul>
            {
                goodsUpdated.map((g, i) =>
                    <li key={i}>{`${g.name} : ${g.amount} : ${g.price}원`}</li>
                )
            }
        </ul>
    )
}

function App() {
    const [order, setOrder] = useState(data);

    return (
        <div id='App'>
            <p>{`배송지: ${order.receive}`}</p>
            <p>{`결제수단: ${order.payment.method}`}</p>
            <p>{'상품'}</p>
            <GoodList goods={order.goods}/>
            <button onClick={() => {
                setOrder(update(order, {
                    receive: {
                        $set: "서울시 강남구 논현동..."
                    },
                }));
            }}>
                {"배송지 수정"}
            </button>
        </div>
    );
}

export {App};