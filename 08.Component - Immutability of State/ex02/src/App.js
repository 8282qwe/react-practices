import React, {useEffect, useState} from 'react';
import update from 'react-addons-update';
import data from './assets/json/data';

function App() {
    const [order, setOrder] = useState(data);
    const [payment, setPayment] = useState(order.payment);
    const [goods, setGoods] = useState(order.goods);

    useEffect(() => {
        console.log("Order Updated");
    }, [order]);

    useEffect(() => {
        console.log("Payment Updated");
    }, [payment]);

    useEffect(() => {
        console.log("Goods Updated");
    }, [goods]);

    return (
        <div id='App'>
            <button onClick={() => {
                // order.receive = '서울시 서초구 논현동....';
                // setOrder(order);

                // const orderUpdate = Object.assign({}, order, {receive: '서울시 서초구 논현동....'});
                // setOrder(orderUpdate);

                const orderUpdate = update(order, {
                    "receive": {
                        $set: "서울시 서초구 논현동..."
                    }
                });
                setOrder(orderUpdate);
            }}>
                {"배송지 수정"}
            </button>
            <br/><br/>

            <button
                onClick={() => {
                    // const orderUpdate = Object.assign({}, order);
                    // orderUpdate.payment.method = "Mobile";
                    // setPayment(orderUpdate.payment);

                    // sol 1.
                    // const orderUpdated = Object.assign({}, order);
                    // orderUpdated.payment = Object.assign({}, order.payment, {method: "Mobile"});
                    // setPayment(orderUpdated.payment);

                    //sol 2.
                    const OrderUpdate = update(order, {
                        payment: {
                            method: {
                                $set: "Mobile"
                            }
                        }
                    })
                    setPayment(OrderUpdate.payment)
                }}>
                {"결제수단 변경"}
            </button>
            <br/><br/>

            <button onClick={() => {
                // violation
                // goods.push({
                //     "no": "p002-004",
                //     "name": "맨투맨",
                //     "price": 8000,
                //     "amount": 4
                // })
                // setGoods(goods);

                // sol. 1
                // setGoods(goods.concat({
                //     "no": "p002-004",
                //     "name": "맨투맨",
                //     "price": 8000,
                //     "amount": 4,
                // }));

                // sol. 2
                // setGoods([
                //     ...goods,
                //     {
                //         "no": "p002-004",
                //         "name": "맨투맨",
                //         "price": 8000,
                //         "amount": 4
                //     }
                // ]);

                // sol. 3 배열 요소 추가
                const goodsUpdated = update(goods, {
                    $unshift: [{
                        "no": "p002-004",
                        "name": "맨투맨",
                        "price": 8000,
                        "amount": 4
                    }]
                })
                setGoods(goodsUpdated);
            }}>
                {"상품 추가"}
            </button>
            <br/><br/>

            <button onClick={() => {
                // violation
                // goods[2].name = "블루면티";
                // setGoods(goods);

                // setGoods(prevGoods => prevGoods.map((item, i) =>
                //     i === 2 ? {...item, name: "블루면티"} : {...item}
                // ));

                const goodsUpdated = update(goods, {
                    2: {
                        "name": {
                            $set :"블루면티"
                        },
                    }
                })
                setGoods(goodsUpdated);
            }}>
                {"3rd 상품이름 변경"}
            </button>
            <br/><br/>

            <hr/>

            <p>{`배송지: ${order.receive}`}</p>
            <p>{`결제수단: ${payment.method}`}</p>
            <p>{`상품`}</p>
            <ul>
                {
                    goods.map((g, i) =>
                        <li key={i}>{`${g.name} : ${g.price}원`}</li>
                    )
                }
            </ul>
        </div>
    );
}

export {App};