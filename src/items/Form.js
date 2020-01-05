import React from 'react';

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.addTodo = this.addTodo.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {newTodo: ''};
  }

  addTodo(todo) {
    this.setState({newTodo: ''})
    this.props.addTodo(todo);
  }

  handleChange(e) {
    this.setState({newTodo: e.target.value})
  }

  render() {
    return(
      <div>
        <label>
          Todo:
          <input type='text' value={this.state.newTodo} onChange={this.handleChange} />
        </label>
        <button onClick={() => this.addTodo(this.state.newTodo)}>
          addTodo
        </button>
      </div>
    );
  }
}
