import React from 'react';
import './Counter.css';
import { pluralize } from '../../shared/filters';

const counter = (props) => {
    return (
        <span className="TodoCount">
            <strong>{props.remaining}</strong> {pluralize(props.remaining)} left
        </span>
    )
}

export default counter;