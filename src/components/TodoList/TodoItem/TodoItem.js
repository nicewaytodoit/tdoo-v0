import React from 'react';


const todoItem = (props) => {
    let classes = ['todo'];
    if (props.completed)
        classes.push('completed');
    if (props.editedTodo && (props.id === props.editedTodo.id))
        classes.push('editing');

    const todo = { id: props.id, title: props.title, completed: props.completed, date: props.date};

    return (
        <li className={classes.join(' ')} >
            <div className="view">
                <input
                    className="toggle"
                    type="checkbox"
                    checked={props.completed}
                    onChange={(e)=> props.todoCompleted(e.target.checked, todo.id)}
                />
                <label
                    onDoubleClick={()=>props.editTodo(todo)}>
                    {props.title}
                </label>
                <button
                    className="destroy"
                    onClick={() => props.removeTodo(props.id)}></button>
            </div>
            <input
                className="edit" 
                type="text"
                value={todo.title}
                onChange={()=>{}}
                // v-todo-focus="todo == editedTodo"
                onBlur={() => props.doneEdit(todo)}
                onKeyUp={(e) => {
                    if (e.key === 'Enter') {
                        props.doneEdit(todo);
                    } else if (e.key === 'Esc') {
                        props.cancelEdit(todo);
                    }
                }}
            />
        </li>
    )
}

export default todoItem;