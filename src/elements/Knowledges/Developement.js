import React, { Component } from 'react';
import ProgressBarDevelopement from './ProgressBarDevelopement';

class Developement extends Component {
    
    state = {
        languages : [
            {id: 1, value: "Css3", xp:1.5},
            {id: 2, value: "Sass", xp:1},
            {id: 3, value: "Bootstrap", xp:0.5},
            {id: 4, value: "Javascript", xp:1},
            {id: 5, value: "Reactjs", xp:0.5},
        ],
    }
    
    render() {

        let {languages} = this.state;

        return (
            <div className="LanguagesFrameworks">
                <ProgressBarDevelopement
                    languages={languages}
                    title="Développement web"
                    className="languageDisplay"
                />
            </div>
        );
    }
}

export default Developement;