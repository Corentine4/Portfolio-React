import React, { Component } from 'react';
import ProgressBarDevelopement from './ProgressBarDevelopement';

class Developement extends Component {
    
    // Store values ​​dynamically
    state = {
        languages : [
            {id: 1, value: "CSS / SASS", xp:2},
            {id: 2, value: "Javascript", xp:2},
        ],
        frameworks : [
            {id: 1, value: "Bootstrap", xp:2},
            {id: 2, value: "Reactjs", xp:2},
        ],
    }
    
    render() {

        let {languages, frameworks} = this.state;

        return (
            <div className="languagesFrameworks">
                <ProgressBarDevelopement
                    languages={languages}
                    title="Languages"
                    className="languageDisplay"
                />
                <ProgressBarDevelopement
                    languages={frameworks}
                    title="Frameworks"
                    className="frameworksDisplay"
                />
            </div>
        );
    }
}

export default Developement;