import React from 'react';
import Navigation from './Home';
import Hobbys from '../elements/Aboutme/Hobbys';

const Apropos = () => {
    return (
        <div>
            <Navigation/>
            <h1>This is the "A propos" page</h1>
            <Hobbys/>
        </div>
    );
};

export default Apropos;