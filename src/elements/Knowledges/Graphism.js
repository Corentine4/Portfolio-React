import React, { Component } from 'react';
import ProgressBarGraphism from './ProgressBarGraphism';

class Graphism extends Component {
    
    state = {
        graphism : [
            {id: 1, value: "Adobe XD", xp:2},
            {id: 2, value: "Adobe Photoshop", xp:2},
            {id: 2, value: "Adobe Illustrator", xp:2},
            {id: 2, value: "Adobe Indesign", xp:2},
        ],
    }
    
    render() {

        let {graphism} = this.state;

        return (
            <div className="graphism">
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