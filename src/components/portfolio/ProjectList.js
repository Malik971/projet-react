import React, { Component } from 'react';
import { PortfolioData } from '../../data/PortfolioData';
import Project from './Project';

class ProjectList extends Component {
    state = {
        projects:PortfolioData
    }

    render() {
        let {projects} = this.state;
        return (
            <div className='portfolioContent'>
                <ul className='RadioDisplay'>

                </ul>

                <div className='projects'>
                    {
                        projects.map(item=>{
                            return (
                                <Project 
                                key={item.id}
                                item={item}
                                />
                            )
                        })
                    }
                </div>
            </div>
        );
    }
}

export default ProjectList;