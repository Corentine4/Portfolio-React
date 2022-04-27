import React from 'react';
import Navigation from '../elements/Navigation';

const Home = () => {
    return (
        <div className="home">
            <Navigation/>
            {/* Main page */}
            <div className="homeContainer">
                <div className="homeContent">
                    <h1>Bienvenue sur le portfolio de <span>Corentine Renuart,</span></h1>
                    <h2>Junior UI/UX - Webdesigner</h2>
                    <div className="uploadcv">
                        <a href="./images/CV-Corentine-Renuart.pdf" target='_blank'>
                            Télécharger le CV en pdf
                        </a>
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
            </div>
        </div>
    );
};

export default Home;