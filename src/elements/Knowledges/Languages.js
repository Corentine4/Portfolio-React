import React, { Component } from 'react';
import ProgressBar from './ProgressBar';

class Languages extends Component {
    
    // Store values ​​dynamically
    state = {
        languages : [
            {id: 1, value: "HTML5", xp:2},
            {id: 2, value: "CSS3", xp:2},
            {id: 3, value: "Javascript", xp:2}
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
                <ProgressBar/>
                <ProgressBar/>
            </div>
        );
    }
}

export default Languages;