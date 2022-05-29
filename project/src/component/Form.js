import React from 'react';
import '../CSS/Form.css';

function Form() {
    return (
        <div className="form-container">
          <label htmlFor="goods"
          className="goods"
          >
              Mercadoria:
              <input
              className="goods-ipt"
              type="text"
              id="goods"
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
              />
          </label>
          <br />
          <label htmlFor="movement"
          className="movement"
          >
              Operação:
              <select
              className="movement-ipt"
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
              />
          </label>
          <button
          className="operation-btn"
          type="button"
          id="operation-btn"
          >
             Finalizar
          </button>
        </div>

    );
}

export default Form;