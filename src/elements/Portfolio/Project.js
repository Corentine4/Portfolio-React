import React, { Component } from 'react';

class Project extends Component {
    
    state = {
        showDescription: false
    }

    handleDescription = () => {
        this.setState({
            showDescription : !this.state.showDescription
        })
    }

    render() {
        let {name, category, description, picture} = this.props.item;

        return (
            <div className="projects">
                <div className='projectsContainer'>
                    <img className='Projectpicture' src={picture} alt="Photo du projet" onClick={this.handleDescription}></img>

                    {
                        this.state.showDescription && (
                            <div className='showModal'>
                                <div className='buttonReturn' onClick={this.handleDescription}>
                                    <span className="closeDetails">
                                        <i className="fa fa-plus"></i>
                                    </span>
                                </div>
                                <div className='headModal'>
                                    <h2>{name}</h2>
                                    <img src={picture} alt="Photo du projet" className="PictureDescription"></img>
                                </div>
                                <div className='ModalContainer'>
                                    <p>{description}</p>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        );
    }
}

export default Project;