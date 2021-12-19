import React from 'react';

const Experiences = () => {
    return (
        <div className="Experiences">
            <h3>Expériences</h3>
            <div className="experience-1">
                <h4>Becode.org</h4>
                <h5>Juin 2021 - Janvier 2022</h5>
                <ul>
                    <li>7 mois de formation intensive afin d'apprendre le développement front-end et back-end.</li>
                    <li>Git, Npm, HTML5, CSS3, SASS, Bootstrap, Javascript, Reactjs, Wordpress,...</li>
                    <li>Type de projet : MERN / en groupe : Refonte d'un site internet entier (en cours).</li>
                </ul>
            </div>
            <div className="experience-2">
                <h4>Strategie Agency</h4>
                <h5>Novembre 2019 - Janvier 2020</h5>
                <ul>
                    <li>Stage de 3 mois m'ayant permis de créer des emballages et objets publicitaires pour différentes marques telles qu'ING, Léonidas, Galler, Lyreco et Tilman.</li>
                    <li>Recherches / améliorations de concepts, modélisation / rendus 3D, plans industriels.</li>
                </ul>
            </div>
        </div>
    );
};

export default Experiences;