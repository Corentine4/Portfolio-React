import React from 'react';
import Languages from '../elements/Knowledges/Languages';
import Otherskills from '../elements/Knowledges/Otherskills';
import Navigation from './Home';

const knowledges = () => {
    return (
        <div>
            
            <div className="Knowledges">
                <Navigation/>

                {/* Contenus de la page */}
                <div className="KnowledgesContent">
                    <Languages/>
                    <Otherskills/>
                </div>
            </div>
        </div>
    );
};

export default knowledges;