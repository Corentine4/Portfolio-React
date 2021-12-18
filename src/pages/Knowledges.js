import React from 'react';
import Developement from '../elements/Knowledges/Developement';
import Graphism from '../elements/Knowledges/Graphism';
import Otherskills from '../elements/Knowledges/Otherskills';
import Navigation from '../elements/Navigation';

const knowledges = () => {
    return (
        <div>
            
            <div className="Knowledges">
                <Navigation/>
                {/* Contenus de la page */}
                <div className="KnowledgesContent">
                    <Developement/>
                    <Graphism/>
                    <Otherskills/>
                </div>
            </div>
        </div>
    );
};

export default knowledges;