import React, { Component } from 'react';

const getDateTimeString = (dtObj) => {
    const date = new Date(dtObj);
    const dateString = date.toLocaleDateString() + ' ' + date.toLocaleTimeString();
    return dateString;
}

class TodoItem extends Component {
    state = {
        todo: {
            id: this.props.id,
            title: this.props.title,
            completed: this.props.completed,
            date: this.props.date
        },
        title: '',
    }

    static getDerivedStateFromProps(props, state) {
        if (state.todo.title !== props.title) {
            return {
                ...state,
                todo: {
                    ...state.todo,
                    title: props.title
                }
            }
        }
        return null;
    }

    render() {
        const todo = this.state.todo;

        let classes = ['todo'];
        if (this.props.completed)
            classes.push('completed');
        if (this.props.editedTodo && (this.props.id === this.props.editedTodo.id))
            classes.push('editing');



        return (
            <li className={classes.join(' ')} >
                <div className="view">
                    <input
                        className="toggle"
                        type="checkbox"
                        checked={this.props.completed}
                        onChange={(e) => this.props.todoCompleted(e.target.checked, todo.id)}
                    />
                    <label
                        onDoubleClick={() => {
                            this.setState({ title: todo.title });
                            this.props.editTodo(todo);
                        }}>
                        {todo.title}
                    </label>
                    <span className="date">{getDateTimeString(todo.date)}</span>
                    <button
                        className="destroy"
                        onClick={() => this.props.removeTodo(todo.id)}>
                    </button>
                </div>
                <input
                    className="edit"
                    type="text"
                    value={this.state.title}
                    onChange={(e) => { this.setState({ title: e.target.value }) }}
                    autoFocus={this.props.editedTodo && todo.id === this.props.editedTodo.id}
                    onBlur={(e) => this.props.doneEdit(todo.id, e.target.value)}
                    onKeyUp={(e) => {
                        if (e.key === 'Enter') {
                            this.props.doneEdit(todo.id, e.target.value);
                        } else if (e.key === 'Escape') {
                            this.props.cancelEdit(todo.id);
                        }
                    }}
                />
            </li>
        )
    }
}

export default TodoItem;