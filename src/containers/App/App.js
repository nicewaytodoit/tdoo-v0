import React, { Component } from 'react';
import './App.css';
import Header from '../../components/Header';
import NewTodo from '../../components/NewTodo';
import TodoList from '../../components/TodoList/TodoList';
import Footer from '../../components/Footer/Footer';
import * as filters from '../../shared/filters';
import * as tdooStorage from '../../shared/localStorage';

// const item = { id: 6, title: "test", completed: false, date: new Date() }

class App extends Component {
  state = {
    // todos: [item, { ...item, id: 7, title: 'Buy Apples!', date: new Date() }],
    todos: [],
    newTodo: '',
    editedTodo: null,
    visibility: 'all',
    uid: 0
  }

  filteredTodos = (todos) => filters[this.state.visibility](todos);
  remaining = (todos) => filters.active(todos).length;
  allDone = {
    get: () => (this.remaining(this.state.todos) === 0),
    set: (value) => {
      const newArray = this.state.todos.map((todo) => {
        return {
          ...todo,
          completed: value
        }
      });
      // console.log('Check all', this.state.todos, newArray);
      this.saveTodos(newArray);
    }};

    componentWillMount() {
      const initData = tdooStorage.fetch();
      this.setState({ todos: initData.todos, uid: initData.uid }, () => {
        //console.log('State is set!'); 
      });
    }


  saveTodos = (todosModified) => {
      this.setState({ todos: todosModified }, () => {
        tdooStorage.save(this.state.todos);
      });
    }


  addTodo = () => {
      let value = this.state.newTodo && this.state.newTodo.trim();
      if (!value) {
        return;
      }
      let todosList = [...this.state.todos];
      let todo = {
        id: this.state.uid + 1,
        title: value,
        completed: false
      }
      todosList.push(todo);
      this.setState({ newTodo: '', uid: todo.id }, () => {
        this.saveTodos(todosList);
      });
    }

  removeTodo = (id) => {
      const newTodos = [...this.state.todos];
      const todoIndex = newTodos.map((t) => t.id).indexOf(id);
      newTodos.splice(todoIndex, 1);
      this.saveTodos(newTodos);
    }

  editTodo = (todo) => {
      this.beforeEditCache = todo.title
      this.editedTodo = todo
    }

  doneEdit = (todo) => {
      if (!this.editedTodo) {
        return;
      }
      this.editedTodo = null
      todo.title = todo.title.trim()
      if (!todo.title) {
        this.removeTodo(todo)
      }
    }

  cancelEdit = (todo) => {
      this.editedTodo = null
      todo.title = this.beforeEditCache
    }

  removeCompleted = () => {
      this.todos = filters.active(this.todos)
    }


  onNewInputChange = (e) => {
      this.setState({ newTodo: e.target.value });
    }

  onNewEnterPressed = (e) => {
      if (e.key === 'Enter') {
        this.addTodo();
      }
    }

  todoCompleted = (value, id) => {
      const newTodos = [...this.state.todos];
      const todoIndex = newTodos.map((t) => t.id).indexOf(id);
      const updatedTodo = { ...newTodos[todoIndex], completed: value };
      newTodos[todoIndex] = updatedTodo;
      this.saveTodos(newTodos);
    }

  render() {
      return (
        <section className="TodoApp">
          <Header />
          <NewTodo value={this.state.newTodo} change={this.onNewInputChange} enterPressed={this.onNewEnterPressed} />
          <TodoList
            allDone={this.allDone}
            filteredTodos={this.filteredTodos}
            removeTodo={this.removeTodo}
            todos={this.state.todos}
            editedTodo={this.state.editedTodo}
            editTodo={this.editTodo}
            doneEdit={this.doneEdit}
            cancelEdit={this.cancelEdit}
            todoCompleted={this.todoCompleted}
          />
          <Footer />
        </section>
      );
    }
  }

  export default App;
