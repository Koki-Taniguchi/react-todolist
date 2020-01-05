import React from 'react';
import './App.css';
import Form from './items/Form';
import List from './items/List';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.addTodo = this.addTodo.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
    this.state = {
      todos: [],
    }
  }

  addTodo(todo) {
    if (!todo) return;
    this.setState({todos: this.state.todos.concat(todo)})
  }

  deleteTodo(index) {
    const list = this.state.todos.concat();
    list.splice(index, 1);
    this.setState({todos: list})
  }

  render() {
    return (
      <div className="App">
        <Form
          addTodo={this.addTodo}
        />
        <List
          todos={this.state.todos}
          deleteTodo={this.deleteTodo}
        />
      </div>
    );
  }
}
