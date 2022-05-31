import React, { useState } from 'react';
import '../CSS/Form.css';

function Form() {
    const [commodity, setCommodity] = useState('');
    const [goodsNumber, setGoodsNumber] = useState(0);
    const [movement, setMovement] = useState('');
    const [buy, setBuy] = useState(0);
    const [sell, setSell] = useState(0);

    function handleSubmit() {
        const getDate = {
            commodity,
            goodsNumber,
            movement,
            buy,
            sell,
        }
        getDate();
    }

    return (
        <div className="form-container">
         <form onSubmit={handleSubmit}>
            <label htmlFor="goods"
            className="goods"
            >
                Mercadoria:
                <input
                className="goods-ipt"
                type="text"
                id="goods"
                value={commodity}
                onChange={(element) =>  setCommodity(element.target.value)}
                />
            </label>
            <br />
            <label htmlFor="goods-numbers"
            className="goods-numbers"
            >
                Unidades:
                <input
                className="goods-numbers-ipt"
                type="text"
                id="goods-numbers"
                value={goodsNumber}
                onChange={(element) =>  setGoodsNumber(element.target.value)}
                />
            </label>
            <br />
            <label htmlFor="movement"
            className="movement"
            >
                Operação:
                <select
                className="movement-ipt"
                value={movement}
                onClick={(element) =>  setMovement(element.target.value)}
                >
                    <option>Selecione</option>
                    <option>Venda</option>
                    <option>Compra</option>
                </select>
            </label>
                <br />
            <label htmlFor="buy-value"
            className="buy-value"
            >
                Valor da compra: 
                <input
                className="buy-value-ipt"
                type="text"
                id="buy-value"
                value={buy}
                onChange={(element) =>  setBuy(element.target.value)}
                />
            </label>
            <br />
            <label htmlFor="sell-value"
            className="sell-value"
            >
                Valor da venda:
                <input
                className="sell-value-ipt"
                type="text"
                id="sell-value"
                value={sell}
                onChange={(element) =>  setSell(element.target.value)}
                />
            </label>
            <button
            className="operation-btn"
            type="button"
            id="operation-btn"
            >
                Finalizar
            </button>
          </form>
        </div>

    );
}

export default Form;