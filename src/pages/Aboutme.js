import React from 'react';
// Import elements
import Navigation from '../elements/Navigation';
import Hobbys from '../elements/Aboutme/Hobbys';
import Softskills from '../elements/Aboutme/Softskills';

const Apropos = () => {
    return (
        <div className="aboutme">
            <Navigation/>
            <div className="AboutmeContent">
                <Hobbys/>
                <Softskills/>
            </div>
        </div>
    );
};

export default Apropos;