import React from 'react';
import Navigation from '../elements/Navigation';
import Experiences from '../elements/Career/Experiences';
import Training from '../elements/Career/Training';

const Parcours = () => {
    return (
        <div className="career">
            <Navigation/>
            <div>
                <Experiences/>
                <Training/>
            </div>
        </div>
    );
};

export default Parcours;