import React from 'react';
import { Link } from 'react-router-dom';
import '../CSS/Report.css';

function Form() {
    return (
        <div>
          <label htmlFor="year">
              Ano:
              <input
              type="text"
              id="year"
              />
          </label>

          <label htmlFor="mounth">
              Mês:
              <input
              type="text"
              id="mounth"
              />
          </label>
          <Link to="/relatorio">
            <button
            type="button"
            id="print"
            >
                Imprimir
            </button>
          </Link>
        </div>

    );
}

export default Form;