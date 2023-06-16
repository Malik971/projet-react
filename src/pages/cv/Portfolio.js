import React from 'react';
import CvNavigation from '../../components/CvNavigation';
import ProjectList from '../../components/portfolio/ProjectList';

const Portfolio = () => {
    return (
        <div className="portfolio">
            <CvNavigation />
            <ProjectList />
        </div>
    );
};

export default Portfolio;