
import React, { Component } from 'react';

class TodoList extends Component {
  render(){
    return (
      <div className="TodoList">
        <p>{this.props.title}</p>
      </div>
    );
  }
}
export default TodoList;
