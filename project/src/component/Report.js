import React from 'react';
import '../CSS/Report.css';

function Report() {
    return (
        <div className="report-container">
          <label htmlFor="year"
          className="report-year"
          >
              Ano:
              <input
              className="report-year-ipt"
              type="text"
              id="year"
              />
          </label>

          <label htmlFor="mounth"
          className="report-mounth"
          >
              Mês:
              <input
              className="report-mounth-ipt"
              type="text"
              id="mounth"
              />
          </label>
          <button
            className="report-btn"
            type="button"
            id="print"
            >
                Imprimir
          </button>
          <tr key={key}>
              <td>{}</td>
          </tr>
        </div>
    );
}

export default Report;