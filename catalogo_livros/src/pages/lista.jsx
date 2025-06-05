import React from 'react';
import { Link } from 'react-router-dom';

function Lista() {
    return(
        <div>
            <h2>Lista de Receitas</h2>
            <ul>
                <li>
                    <Link to="/detalhes">Bolo de Chocolate</Link>
                </li>

                <li>
                    <Link to="/detalhes">Torta de Limão</Link>
                </li>
            </ul>
        </div>
    )
}

export default Lista;