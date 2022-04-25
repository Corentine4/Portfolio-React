import React, { Component } from 'react';
import { PortfolioData } from './PortfolioData';
import Project from './Project';

export default class ProjectList extends Component {

    state = {
        projects: PortfolioData
    }

    render() {

        let {projects} = this.state;
        
        return (
            <div className='PortfolioContent'>
                <ul className='RadioDisplay'>
                    Boutons radios
                </ul>
                <div className='Projects'>
                    {
                        projects.map(item => {
                            return (
                                <>
                                    <Project
                                    key= {item.id}
                                    item={item}
                                    PortfolioData = {PortfolioData}
                                />
                                </>
                            )
                        })
                    }
                </div>
            </div>
        );
    }
}