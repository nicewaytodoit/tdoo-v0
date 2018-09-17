import React from 'react';
import TodoItem from './TodoItem/TodoItem';
import './TodoList.css';

const todoList = (props) => {
    return (
        <section 
            className="main"
            //show="todos.length" 
        >
            <input
                className="toggle-all"
                type="checkbox" 
                //v-model="allDone"
                 />
            <ul className="TodoList">
                {props.filteredTodos(props.todos).map((item) => {
                    return <TodoItem
                        key={item.id}
                        {...item}
                        removeTodo={props.removeTodo}
                        editedTodo={props.editedTodo}
                        editTodo={props.editTodo}
                        doneEdit={props.doneEdit}
                        cancelEdit={props.cancelEdit}
                        todoCompleted={props.todoCompleted}

                    />
                })}
            </ul>
        </section>
    )
}
export default todoList;