import React from 'react';

const Training = () => {
    return (
        <div className="Training">
            <h3>Formation</h3>
            <div className="training">
                <h4>
                    <i class="fas fa-thin fa-circle"></i> Formation de développement web
                </h4>
                <h5>Becode.org, Liège</h5>
                <h6>Juin 2021 - Janvier 2022 (7 mois)</h6>
                <ul>
                    <li>HTML5, CSS3, SASS, Bootstrap, Javascript, Reactjs, Wordpress, Php, Git, Npm, Nodejs,...</li>
                    <li>Réalisation de nombreux projets de groupe dont un projet MERN : refonte entière d'un site e-commerce.</li>
                </ul>
            </div>
            <div className="training">
                <h4>
                    <i class="fas fa-thin fa-circle"></i> Formation de design graphique
                </h4>
                <h5>Centre IFAPME Liège-Huy-Verviers</h5>
                <h6>Septembre 2020 - Juin 2021</h6>
                <p>Cours du soir afin d'apprendre le graphisme pour l'impression, le web et la 3D.</p>
            </div>
            <div className="training">
                <h4>
                    <i class="fas fa-thin fa-circle"></i> Master en design industriel
                </h4>
                <h5>ESA Saint-Luc Liège</h5>
                <h6>Septembre 2015 - Juin 2020</h6>
                <p>Diplôme obtenu le 2 juillet 2020 (68,75%)</p>
            </div>
            <div className="training">
                <h4>
                    <i class="fas fa-thin fa-circle"></i> Echange Erasmus (Espagne)
                </h4>
                <div className='Timelineanimation'>
                    <span className="Timeline"></span>
                </div>
                <h5>Escuela Superior de Diseño de la Región de Murcia</h5>
                <h6>Septembre 2018 - Février 2019</h6>
                <p>Suivi de cours de design produit, stylisme et graphisme en espagnol.</p>
            </div>
        </div>
    );
};

export default Training;