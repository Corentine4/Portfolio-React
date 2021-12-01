import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        // Container div for the navigation
        <div className="Sidebar">
 
            <div className="id">
                    <img src={"images/CorentineRenuart.png"} alt="Auteur de" width="175rem" />
                    <div className="idContent">
                        <h3>Corentine Renuart</h3>
                    </div>
            </div>
 
            <div className="Navigation">
                <ul>
                    <li>
                        <NavLink exact to="/" activeClassName="navActive">
                            <i className="fas fa-home"></i>
                            <span>Accueil</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/competences" activeClassName="navActive">
                            <i className="fas fa-code"></i>
                            <span>Compétences</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/" activeClassName="navActive">
                            <i className="fas fa-hiking"></i>
                            <span>Parcours</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/portfolio" activeClassName="navActive">
                            <i className="fas fa-book-open"></i>
                            <span>Portfolio</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/contact" activeClassName="navActive">
                            <i class="fas fa-phone-alt"></i>
                            <span>Contact</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/" activeClassName="navActive">
                            <i className="fas fa-user"></i>
                            <span>À propos</span>
                        </NavLink>
                    </li>
                </ul>
            </div>

            <div className="socialNetwork">
                <ul>
                    <li>
                        <a href="https://www.linkedin.com/in/corentine-renuart/" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-linkedin"></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/Corentine4" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-github"></i>
                        </a>
                    </li>
                    <li>
                        <a href="mailto:renuart.corentine@gmail.com" target="_blank" rel="noopener noreferrer">
                            <i className="far fa-envelope"></i>
                        </a>
                    </li>
                </ul>
            </div>

        </div>
    );
};

export default Navigation;