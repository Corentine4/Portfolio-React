import React from 'react';
import Experiences from '../elements/Knowledges/Experiences';
import Hobbys from '../elements/Knowledges/Hobbys';
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
                    <Experiences/>
                    <Otherskills/>
                    <Hobbys/>
                </div>
            </div>
        </div>
    );
};

export default knowledges;