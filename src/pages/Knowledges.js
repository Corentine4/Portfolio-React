import React from 'react';
import Developement from '../elements/Knowledges/Developement';
import Graphism from '../elements/Knowledges/Graphism';
import Otherskills from '../elements/Knowledges/Otherskills';
import Navigation from '../elements/Navigation';
import Softskills from '../elements/Knowledges/Softskills';
import Hobbys from '../elements/Knowledges/Hobbys';
import Languages from '../elements/Knowledges/Languages';

const knowledges = () => {
    return (
        <div className="knowledges">
            <Navigation/>
            <div className="KnowledgesContent">
                {/* Contenus de la page */}
                    <div className='Developement_Graphism'>
                        <Developement/>
                        <Graphism/>
                        <Otherskills/>
                    </div>
                    <div className="SoftskillssHobbysContent">
                        <Softskills/>
                        <Hobbys/>
                        <Languages/>
                    </div>
            </div>
        </div>
    );
};

export default knowledges;