import React from 'react';
import Counter from './Counter';
import Filter from './Filter';
import './Footer.css';

const footer = (props) => {
    return (
        <footer className="Footer">
            <div className="info">
                <p>Double-click to edit a todo</p>
            </div>
            <Counter remaining={''} />
            <Filter />
            <button
                className="clear-completed"
                onClick={props.removeCompleted}
                display={props.todosLength > props.remaining ? 'block' : 'none'} >
                Clear completed
            </button >
        </footer >
    )
}

export default footer;