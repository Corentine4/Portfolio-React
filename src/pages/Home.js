import React from 'react';
import Navigation from '../elements/Navigation';

const Home = () => {
    return (
        <div className="home">
            {/* Import the navigation */}
            <Navigation/>
            {/* Main page */}
            <div className="homeContainer">
                <div className="homeContent">
                    <h1>Bienvenue sur le portfollio de <span>Corentine Renuart,</span></h1>
                    <h2>Une junior en développement front-end.</h2>
                    
                    {/* Upload the PDF CV */}
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