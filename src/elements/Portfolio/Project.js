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
        let {name, techno, date, category, description, picture, picturemodal} = this.props.item;

        return (
            <div className="projects">
                <div className='projectsContainer'>
                    <img className='Projectpicture' src={picture} alt="Photo du projet" onClick={this.handleDescription}></img>

                    {
                        this.state.showDescription && (
                            <div className='showInfos'>
                                <div className='showModal'>
                                    <div className='buttonReturn' onClick={this.handleDescription}>
                                        <span className="closeDetails">
                                            <i className="fa fa-plus"></i>
                                        </span>
                                    </div>
                                    <div className='headModal'>
                                        <h2>{name}</h2>
                                        <span>{techno}</span>
                                    </div>
                                    <div className='PictureContainer'>
                                        <img src={picturemodal} alt="Photo du projet" className="PictureDescription"></img>
                                    </div>
                                    <div className='ModalContainer'>
                                        <p>{description}</p>
                                        <p className='dateModal'>{date}</p>
                                    </div>
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