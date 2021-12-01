import React from 'react';
import Navigation from '../elements/Navigation';

const Home = () => {
    return (
        <div className="home">
            {/* Import the navigation */}
            <Navigation/>
            {/* Main page */}
            <div className="homeContent">
                <div className="homeContent">
                    <h1>Corentine Renuart</h1>
                    <h2>Développeuse Front-end</h2>
                    <div className="pdfcv">
                        <a href="./images/CV-Corentine-Renuart.pdf">Télécharger le curriculum vitae</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;