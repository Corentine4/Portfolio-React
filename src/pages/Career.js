import React from 'react';
import Navigation from './Home';
import Experiences from '../elements/Career/Experiences';
import Training from '../elements/Career/Training';

const Parcours = () => {
    return (
        <div>
            <Navigation/>
            <h1>This is the parcours page</h1>
            <Experiences/>
            <Training/>
        </div>
    );
};

export default Parcours;