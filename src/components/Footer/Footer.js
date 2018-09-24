import React, { Fragment } from 'react';
import Counter from './Counter';
import Filter from './Filter';
import './Footer.css';

const footer = (props) => {

    const noteStyle = {
        position: 'absolute',
        textAlign: 'center',
        bottom: '-60px',
        left: '50%',
        width: '240px',
        marginLeft: '-120px'
    }

    return (
        <Fragment>
            <footer className="Footer">
                <div className="info">
                    <p>Double-click to edit a todo</p>
                </div>
                <Counter
                    remaining={props.remaining} />
                <Filter
                    visibility={props.visibility}
                />
                <button
                    className="clear-completed"
                    onClick={props.removeCompleted}
                    style={{ display: (props.todosLength > props.remaining) ? 'block' : 'none' }} >
                    Clear completed
                </button >
            </footer>
            <div style={noteStyle}>
                <a href="/">Go Back >> to main TDoo page</a><br />
                <a href="https://github.com/nicewaytodoit" target="_blank" rel="noopener noreferrer">Source Code on GitHub</a>
            </div>
        </Fragment>
    )
}

export default footer;