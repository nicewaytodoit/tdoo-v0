import React from 'react';
import './Filter.css';

const filter = (props) => {
    return (
        <ul className="Filters">
            <li><a href="#/all"
                className={(props.visibility === 'all') ? 'selected' : null}>All</a></li>
            <li><a href="#/active"
                className={(props.visibility === 'active') ? 'selected' : null}>Active</a></li>
            <li><a href="#/completed"
                className={(props.visibility === 'completed') ? 'selected' : null}>Completed</a></li >
        </ul >
    )
}

export default filter;