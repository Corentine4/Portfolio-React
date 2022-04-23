import React, { Component } from 'react';

class Project extends Component {
    
    render() {

        let {name, category, source, info, picture} = this.props.item;

        return (
            <div className="projects">
                <h3>{name}</h3>
                <img src={picture} alt="Photo du projet"></img>
                <span className='Infos'>
                    <i className='fas fa-plus-circle'></i>
                </span>
            </div>
        );
    }
}

export default Project;