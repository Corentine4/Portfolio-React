import React from 'react';
import { NavLink } from 'react-dom';

const NotFound = () => {
    return (
        <div>
            <div className="notFoundContent">
                <h3>Error 404 - Not found</h3>
                {/* Navigation to return to the home page */}
                <NavLink exact to="/">
                    <i className="fas fa-home"></i>
                    <span>Accueil</span>
                </NavLink>
            </div>
        </div>
    );
};

export default NotFound;