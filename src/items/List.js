import React from 'react';

export default class List extends React.Component {
  render() {
    const listItems = this.props.todos.map((todo, index) =>
      <li key={index}>
        {todo}
        <button onClick={() => this.props.deleteTodo(index)} >削除</button>
      </li>
    );

    return(
      <ul>{listItems}</ul>
    );
  }
}
