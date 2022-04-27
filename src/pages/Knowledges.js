import React from 'react';
import Developement from '../elements/Knowledges/Developement';
import Graphism from '../elements/Knowledges/Graphism';
import Otherskills from '../elements/Knowledges/Otherskills';
import Navigation from '../elements/Navigation';
import Softskills from '../elements/Knowledges/Softskills';

const knowledges = () => {
    return (
        <div className="knowledges">
            <Navigation/>
            <div className="KnowledgesContent">
                {/* Contenus de la page */}
                    <Developement/>
                    <Graphism/>
                    <Otherskills/>
                    <Softskills/>
            </div>
        </div>
    );
};

export default knowledges;