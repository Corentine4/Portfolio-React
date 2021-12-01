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
                    <h1>Bienvenue sur la page de <span>Corentine Renuart</span></h1>
                    <h2>Junior Front end developer</h2>
                    <i class="fas fa-comment-dots"></i>
                    <p>Motivée, créative et dynamique, je recherche un stage me permettant d’acquérir une première expérience dans le secteur de développement web.</p>
                    {/* To upload the pdf cv */}
                    <div className="uploadcv">
                        <i class="fas fa-cloud-upload-alt"></i>
                        <a href="./images/CV-Corentine-Renuart.pdf">Télécharger le CV en pdf</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;