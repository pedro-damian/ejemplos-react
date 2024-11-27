import React from 'react';
import {Link} from 'react-router-dom';

const Error404 = () => {
    return (
        <div>
            <h1>Error 404</h1>
            <p>La página que buscas no existe.</p>
            <Link to="/">Volver al Inicio</Link>
        </div>
    );
}

export default Error404;