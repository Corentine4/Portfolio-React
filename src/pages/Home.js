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
                    <h2>Junior Front-end developer • UI/UX Designer</h2>
                    <div className="uploadcv">
                        <a href="./images/CV-Corentine-Renuart.pdf">
                            Télécharger le CV en pdf
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;