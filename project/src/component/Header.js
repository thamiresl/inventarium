import React from 'react';
import '../CSS/Header.css';

function Header() {
    return (
        <div className="header-container">
            <h1
            className="header-title"
            >
                Inventarium
            </h1>
            <button
            className="report-btn"
            >
                Relatorio
            </button>
            <button
            className="inventary-btn"
            >
                Estoque
            </button>
        </div>

    );
}

export default Header;
