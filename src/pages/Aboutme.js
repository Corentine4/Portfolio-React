import React from 'react';
import Navigation from './Home';
import Hobbys from '../elements/Aboutme/Hobbys';
import Softskills from '../elements/Aboutme/Softskills';

const Apropos = () => {
    return (
        <div>
            <Navigation/>
            <Hobbys/>
            <Softskills/>
        </div>
    );
};

export default Apropos;