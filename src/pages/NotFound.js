import React from 'react';
import { NavLink } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="notFound">
            <div className="notFoundcontent">
                <h3>
                    Désolé mais cette page n'existe pas !
                </h3>
                <NavLink exact to="/cv">
                    <i className='fa fa-home'></i>
                    <span>Accueil</span>
                </NavLink>
            </div>
        </div>
    );
};

export default NotFound;