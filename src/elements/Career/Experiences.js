import React from 'react';

const Experiences = () => {
    return (
        <div className="Experiences">
            <h3>Expériences</h3>
            <div className="experiences">
                <h4>Front-end dévelopeur (UI/UX)</h4>
                <h5>IOT Factory, Bruxelles</h5>
                <h6>Janvier - Avril 2022 (stage)</h6>
                <ul>
                    <li>Refonte entière de l'interface web de leur application : amélioration du design et de l'expérience utilisateur.</li>
                    <li>Pug, Sass, Bootstrap, Angularjs</li>
                </ul>
            </div>
            <div className="experiences">
                <h4>Junior frontend developer</h4>
                <h5>Becode.org, Liège</h5>
                <h6>Juin 2021 - Janvier 2022</h6>
                <ul>
                    <li>7 mois de formation intensive afin d'apprendre le développement web.</li>
                    <li>HTML5, CSS3, SASS, Bootstrap, Javascript, Reactjs, Wordpress, Php, Git, Npm.</li>
                    <li>Réalisation d'un projet MERN en groupe : refonte d'un site e-commerce.</li>
                </ul>
            </div>
            <div className="experiences">
                <h4>Designer industriel</h4>
                <h5>Aazio (Stratégie Agency), Oupeye</h5>
                <h6>Novembre 2019 - Janvier 2020 (stage)</h6>
                <ul>
                    <li>Création d'emballages et d'objets publicitaires pour différentes marques telles qu'ING, Léonidas, Galler, Lyreco et Tilman.</li>
                    <li>Recherches / améliorations de concepts, modélisations / rendus 3D, plans industriels.</li>
                </ul>
            </div>
        </div>
    );
};

export default Experiences;