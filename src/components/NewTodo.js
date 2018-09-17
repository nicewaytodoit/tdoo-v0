import React from 'react';
import './NewTodo.css';

const newTodo = (props) => {
    return (
        <div className="NewTodoDiv">
            <input 
                className="NewTodo"
                autoFocus 
                autoComplete="off"
                placeholder="What needs to be done?"
                value={props.value}
                onChange={props.change}
                onKeyUp={props.enterPressed}
            />
        </div>
    )
}

export default newTodo;