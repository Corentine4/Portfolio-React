import React from 'react';

const Experiences = () => {
    return (
        <div className="Experiences">
            <h3>Expériences</h3>
            <div className="experiences">
                <h4>
                    <i class="fas fa-thin fa-circle"></i> Animatrice - CDD
                </h4>
                <h5>BeCentral, Liège</h5>
                <h6>04 - 15 Avril 2022 (2 semaines)</h6>
                <ul>
                    <li>Animation d'un stage de Pâques afin d'apprendre les bases de l'informatique à des enfants de 8 à 12 ans.</li>
                </ul>
            </div>
            <div className="experiences">
                <h4>
                    <i class="fas fa-thin fa-circle"></i> Stage UI/UX - Front-end
                </h4>
                <span className="Timeline"></span>
                <h5>IOT Factory, Bruxelles</h5>
                <h6>17 Janvier - 01 Avril 2022 (3 mois)</h6>
                <ul>
                    <li>Refonte entière de l'interface web de leur application : amélioration du design et de l'expérience utilisateur (Adobe XD).</li>
                    <li>Application des solutions en Pug, SCSS, Bootstrap, Angularjs.</li>
                </ul>
            </div>
            <div className="experiences">
                <h4>
                    <i class="fas fa-thin fa-circle"></i> Stage en design industriel
                </h4>
                <h5>Aazio (Stratégie Agency), Oupeye</h5>
                <h6>Novembre 2019 - Janvier 2020 (3 mois)</h6>
                <ul>
                    <li>Création d'emballages et d'objets publicitaires pour différentes marques telles qu'ING, Léonidas, Galler, Lyreco et Tilman.</li>
                    <li>Recherches / améliorations de concepts, modélisations / rendus 3D, plans industriels.</li>
                </ul>
            </div>
        </div>
    );
};

export default Experiences;