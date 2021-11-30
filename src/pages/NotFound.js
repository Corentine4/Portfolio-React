import React from 'react';
import { NavLink } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="notFoundContent">
            <h3>Error 404</h3>
            <p>Cette page n'existe pas !</p>
            {/* Navigation to return to the home page */}
            <NavLink exact to="/">
                <i className="fas fa-home"></i>
                <span>Accueil</span>
            </NavLink>
        </div>
    );
};

export default NotFound;