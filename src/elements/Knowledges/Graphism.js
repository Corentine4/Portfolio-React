import React, { Component } from 'react';
import ProgressBarGraphism from './ProgressBarGraphism';

class Graphism extends Component {
    
    state = {
        graphism : [
            {id: 1, value: "Adobe XD", xp:1},
            {id: 2, value: "Photoshop", xp:8},
            {id: 3, value: "Illustrator", xp:8},
            {id: 4, value: "Indesign", xp:2},
        ],
    }
    
    render() {

        let {graphism} = this.state;

        return (
            <div className="Graphism">
                <ProgressBarGraphism
                    graphism={graphism}
                    title="Graphisme"
                    className="graphismDisplay"
                />
            </div>
        );
    }
}

export default Graphism;