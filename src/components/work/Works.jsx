import React, { useEffect, useState } from 'react';
import { projects as initialProjects } from './Data';
import { categories } from './Data';
import WorkItem from './WorkItem';
import './work.css';

const Works = () => {
    const [item, setItem] = useState({ name: 'All' });
    const [projectList, setProjectList] = useState(initialProjects);
    const [activeItem, setActiveItem] = useState(0);

    useEffect(() => {
        if (item.name === 'All') {
            setProjectList(initialProjects);
        } else {
            const newProjects = initialProjects.filter((project) => {
                return project.category === item.name;
            });
            setProjectList(newProjects);
        }
    }, [item]);

    const handleClick = (e, index) => {
        setItem({ name: e.target.textContent });
        setActiveItem(index);
    };

    return (
        <div>
            <div className="work__filters">
                {categories.map((category, index) => {
                    return (
                        <span
                            onClick={(e) => handleClick(e, index)}
                            className={`${activeItem === index ? 'active-work' : ''} work__item`}
                            key={index}
                        >
                            {category.name}
                        </span>
                    );
                })}
            </div>
            <div className="work__container container grid">
                {projectList.map((item) => {
                    return <WorkItem item={item} key={item.id} />;
                })}
            </div>
        </div>
    );
};

export default Works;
