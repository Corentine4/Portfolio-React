import React, { Component } from 'react';
import ProgressBar from './ProgressBar';

class Languages extends Component {
    
    // Store values ​​dynamically
    state = {
        languages : [
            {id: 1, value: "CSS3", xp:2},
            {id: 2, value: "SASS", xp:2},
            {id: 3, value: "Bootstrap", xp:2},
            {id: 4, value: "Javascript", xp:2},
            {id: 5, value: "React", xp:2},
            {id: 6, value: "Bases de Php", xp:2}
        ],
        frameworks : [
            {id: 1, value: "Sass", xp:2},
            {id: 2, value: "Bootstrap", xp:2},
            {id: 3, value: "React", xp:2},
        ],
    }
    
    render() {

        let {languages, frameworks} = this.state;

        return (
            <div className="languagesFrameworks">
                <ProgressBar
                    languages={languages}
                    title="Languages"
                    className="languageDisplay"
                />
                <ProgressBar
                    languages={frameworks}
                    title="Frameworks et bibliothèques"
                    className="frameworksDisplay"
                />
            </div>
        );
    }
}

export default Languages;