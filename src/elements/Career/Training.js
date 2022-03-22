import React from 'react';

const Training = () => {
    return (
        <div className="Training">
            <h3>Formation</h3>
            <div className="training">
                <h4>
                    <i class="fas fa-thin fa-circle"></i> Formation en design graphique
                </h4>
                <h5>Centre IFAPME Liège-Huy-Verviers</h5>
                <h6>Septembre 2020 - Juin 2021</h6>
            </div>
            <div className="training">
                <h4>
                    <i class="fas fa-thin fa-circle"></i> Master en design industriel
                </h4>
                <h5>ESA Saint-Luc Liège</h5>
                <h6>Septembre 2015 - Juin 2020</h6>
                <p>Diplôme obtenu le 2 juillet 2020</p>
            </div>
            <div className="training">
                <h4>
                    <i class="fas fa-thin fa-circle"></i> Echange Erasmus
                </h4>
                <div className='Timelineanimation'>
                    <span className="Timeline"></span>
                </div>
                <h5>Escuela Superior de Diseño de la Región de Murcia</h5>
                <h6>Septembre 2018 - Février 2019</h6>
                <p>Diseño de producto</p>
            </div>
        </div>
    );
};

export default Training;